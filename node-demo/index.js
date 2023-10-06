const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const app = express();
const port = 8000;

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.get('/api/*',(req,res) => {
    res.json({ status: 'ok', message: 'Server is running' });
})

// Serve the React app's static files
app.use(express.static(path.join(__dirname, 'build')));

// All other routes should serve the React app
app.get('/react/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});