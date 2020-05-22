import express from 'express'

// Create a new express app instance
const app: express.Application = express();
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send('Hello World2!');
});
app.listen(port, function () {
    console.log('App is listening on port ' + port);
});