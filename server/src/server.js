const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formidable = require('express-formidable');

const app = express();

app.use(cors({origin: ['http://localhost:3000','http://127.0.0.1:3000']}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(formidable())

app.get('/', (req, res) => {
  res.send('Hello word');
});

app.listen(8080, () => {
  console.log("server start success, you can visit: http://127.0.0.1:8080");
});
