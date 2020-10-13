const express = require('express');
const app = express();
const port = 3000;
console.log('wow');
app.get('/', (req, res) => {
  res.send('This is my updated site!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
