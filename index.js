const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;
const categories = require('./data/categories.json');


app.use(cors())

app.get('/', (req, res) => {

  res.send(" you go to the categories through the categories router.");

})
app.get('/categories', (req, res) => {

    res.send(categories);
  
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})