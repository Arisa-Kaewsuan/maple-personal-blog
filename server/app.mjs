import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
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