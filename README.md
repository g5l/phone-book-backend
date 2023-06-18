# Phone Book Backend
This is a simple CRUD (Create, Read, Update, Delete) API for a phonebook application. It's built with Node.js, Prisma, TypeScript, and SQLite. The API allows you to manage a list of contacts, where each contact has an `id`, `name`, and `phone` data.

## Prerequisites

Before you start, ensure you have these installed on your system:

1. Node.js and npm (Node Package Manager)
2. TypeScript
3. Prisma
4. SQLite

## Setup

To set up the project on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/phonebook-api.git
cd phonebook-api
```

2. Install the dependencies:
```bash
npm install
```

3. Generate the Prisma client:
```bash
npx prisma generate
```

4. Run the API:
```bash
npx ts-node index.ts
```

Your API should now be running on http://localhost:3000.


## Usage

Here are some examples of how you can use the API:

* Create a new contact:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe", "phone":"1234567890"}' http://localhost:3000/contacts
```

* Get all contacts:
```bash
curl http://localhost:3000/contacts
```

* Update a contact:
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Jane Doe", "phone":"0987654321"}' http://localhost:3000/contacts/1
```

* Delete a contact:
```bash
curl -X DELETE http://localhost:3000/contacts/1
```

