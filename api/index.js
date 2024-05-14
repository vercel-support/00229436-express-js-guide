const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));
app.get('/test', (req, res) => res.send('Test! Express on Vercel'));

app.listen(4001, () => console.log('Server ready on port 3000.'));

module.exports = app;