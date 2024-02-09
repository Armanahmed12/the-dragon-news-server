const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors())
app.get('/', (req, res) => {

  res.send("You can go to the categories through the categories router.");

})

app.get('/categories', (req, res) => {

  res.send(categories);

});

app.get('/allCategoriesNews', (req, res) => {

    res.send(news);

});

app.get('/category/:categoryId', (req, res) => {

  const { params } = req;
  const { categoryId } = params;
  if (categoryId == 0 || categoryId == 6) {

    res.send(news);
  }
  else {

    const matchedCategoryNews = news.filter(eachNews => eachNews.category_id == categoryId);
    res.send(matchedCategoryNews);

  }

});

app.get('/newsDetails/:id', (req, res) => {

  const { params } = req;
  const matchedNews = news.find(eachNews => eachNews._id == params.id);
  res.send(matchedNews);

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})