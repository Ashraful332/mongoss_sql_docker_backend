const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Server is running, Express 1.0!');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
