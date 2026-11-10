# The Daily Grind — Fun Fact API

A simple Express.js server that retrieves random fun facts from an external API using Axios and returns them as JSON.

This project was completed as part of Lab 2: Server-to-Server Communication to practice making HTTP requests, handling asynchronous operations, processing API responses, and implementing error handling.

## Technologies Used

- Node.js
- Express.js
- Axios
- JavaScript (ES Modules)

## Features

- Express server running on port 3000
- GET endpoint at `/api/fun-fact`
- Fetches random facts from the Useless Facts API using Axios
- Uses `async/await` to handle asynchronous requests
- Returns a simplified JSON response containing only the fact
- Implements error handling with `try...catch`
- Returns a generic error message if the external API request fails

## Project Structure

```text
lab-server-comms/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── reflection.md
└── README.md
```

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open the API endpoint in your browser:

http://localhost:3000/api/fun-fact

Refresh the page to retrieve a new random fact.

## Example API Response

```json
{
  "fact": "A random fun fact will appear here."
}
```

## External API

This project uses the [Useless Facts API](https://uselessfacts.jsph.pl/) to retrieve random facts.

## Reflection

Answers to the lab's reflection questions are available in [reflection.md](./reflection.md).

## Author

[Ebony Mitchell](https://github.com/ebonymitchell)
