import request from 'supertest';
import {app} from '../server';

describe('Server', () => {
  it('should respond with 404 error when accessing an invalid route', async () => {
    const response = await request(app).get('/invalid');
    expect(response.status).toBe(404);
  });

  it('should respond with "Server is running" message when GET /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Server is running');
  });
});