require('dotenv').config();
const http = require('http');
const {username,password} = require('./exp'); 



const port = process.env.PORT || 3000; //fallback
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const apiKey = process.env.API_KEY;

// A function to demonstrate the use of environment variables
function connectToDatabase() {
  console.log(`Connecting to database on host: ${dbHost}`);
  console.log(`Using credentials: ${dbUser} : ${dbPass}`);
}

function useApiKey() {
  console.log(`Using API Key: ${apiKey}`)
}

// Start a simple server

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the dotenv example application!');
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectToDatabase();
  useApiKey();
});
