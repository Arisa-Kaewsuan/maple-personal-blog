import express from 'express';

const app = express();
const port = 4000;

app.use(express.json());

// Test Server
app.get('/', (req, res) => {
  return res.send('Server API is working 🚀');
});

app.get('/profiles', (req, res) => {
    return res.status(200).json({"data": {
        "name": "John",
        "age": 20,
    }});
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})