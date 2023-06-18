import request from 'supertest';
import {app} from '../server';

describe('POST /contacts', () => {
  it('Should fail when create a contact without a name', async () => {
    const response = await request(app)
      .post('/contacts')
      .send({
        phone: '1234567890'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('name is a required field');
  });

  it('Should fail when create a contact without a phone number', async () => {
    const response = await request(app)
      .post('/contacts')
      .send({
        name: 'John Doe'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('phone is a required field');
  });
  
  it('Should create a new contact', async () => {
    const response = await request(app)
      .post('/contacts')
      .send({
        name: 'John Doe',
        phone: '1234567890'
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.phone).toBe('1234567890');
  });
});

describe('GET /contacts', () => {
  it('gets all contacts', async () => {
    const response = await request(app).get('/contacts');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});
