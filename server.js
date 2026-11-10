import express from 'express';
import axios from 'axios';

// Create an Express application.
const app = express();

// Define the port the server will listen on.
const port = 3000;

// Define the external API endpoint for random fun facts.
const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

// Create a GET route that returns a random fun fact.
app.get('/api/fun-fact', async (req, res) => {
  try {
    // Send a GET request to the external API using Axios.
    // await pauses execution until the request completes.
    const apiResponse = await axios.get(url);

    // Extract only the fact text from the API response.
    const funFact = apiResponse.data.text;

    // Send the fact to the client as a JSON object.
    res.json({ fact: funFact });

  } catch (error) {
    // Log the error on the server for debugging.
    console.error('Error fetching fun fact:', error.message);

    // Send a generic error message to the client.
    res.status(500).json({
      error: 'Could not fetch fun fact'
    });
  }
});

// Start the Express server and log its address.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
