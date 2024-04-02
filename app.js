// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); // Import the fs module

// Serve static files (HTML, CSS, JavaScript) from the public directory
app.use(express.static('public'));


// Define a route to handle requests for the web page

// Define a route to handle requests for the web page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/random', (req, res) => {
    // Generate a random number on the server-side
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Send the random number as part of the HTML response
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Random Number Generator</title>
        </head>
        <body>
            <h1>Random Number: ${randomNumber}</h1>
        </body>
        </html>
    `);
});


// Define a route to handle requests for the web page
app.get('/lottery', (req, res) => {
    // Generate a random number on the server-side
    const randomNumber = Math.floor(Math.random() * 1000) + 1000;

    // Read the content of index.html file
    const htmlFilePath = path.join(__dirname, '/public/bigger.html');
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Insert the random number into the HTML content
    htmlContent = htmlContent.replace('<!-- RANDOM_NUMBER_PLACEHOLDER -->', `<p>Lucky Number: ${randomNumber}</p>`);

    // Send the modified HTML content to the client
    res.send(htmlContent);
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


