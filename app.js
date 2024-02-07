const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const getForm = require(path.join(__dirname, 'Public', 'JS', 'API.js'));

// Handle requests to the root path '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.use('/save', getForm);

