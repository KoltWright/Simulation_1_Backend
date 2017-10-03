const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const sc = require('./shelf_controller.js');

app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })

app.use(bodyParser.json());
app.use(cors());

app.get('/api/bin/:id', sc.getBin);
app.put('/api/bin/:id', sc.updateBin);
app.delete('/api/bin/:id', sc.deleteBin);
app.post('/api/bin/:id', sc.createBin);
app.get('/api/shelf/:id', sc.getShelf);

const port = 3005;
app.listen(port, () => {
  console.log(`I am listening on ${port}`)
});
