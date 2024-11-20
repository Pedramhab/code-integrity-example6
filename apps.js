onst express = require('express');
const app = express();

app.get('/user', (req, res) => {
  // Get the user input from the query string
  const userId = req.query.id;

  // Insecure SQL query: User input is directly inserted into the query string
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  console.log('SQL Query: ', query);  // Logs the query with user input

  res.send(`User: ${userId}`);
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});
