const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.status(200).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({ message: 'User logged in successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
