const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend to connect
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
