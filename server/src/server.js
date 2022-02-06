const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: ['http://localhost:3000','http://127.0.0.1:3000']}));

app.get('/', (req, res) => {
  res.send('Hello word');
});

app.listen(8000, () => {
  console.log("server start success, you can visit: http://127.0.0.1:8000");
});
