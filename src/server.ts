import express from 'express'

// Create a new express app instance
const app: express.Application = express();
app.get('/', (req, res) => {
    res.send('Hello World2!');
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});