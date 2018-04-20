const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.join(__dirname,'../../resources/static/build')));
app.use('/vendor', express.static(path.join(__dirname,'../../../../node_modules')));
app.use('/stylesheets', express.static(path.join(__dirname, '../../resources/static')));

app.get('/', (req,res,send) => {
  res.sendFile(path.join(__dirname, '../../resources/templates/index.html'))
});
const port = process.env.port || 3000;

app.listen(port, () => `Listening on port ${ port }`);

