var express = require('express');
var router = express.Router();

const database = {
  users: [
    { name: "John Doe", email: "},
    { name: "big foot", email: "},

  ],
  brand: {
    name:"Smash Games",
    industry:"Game Development",
    address:"1234 Main St",
    city:"Los Angeles",
    state:"CA",
    zip:"90001",
  },
  posts: [
    { title: "Hello World", body: "This is my first post" ,
    slug: "hello-world",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac nunc luctus tincidunt"},
    author: "Blake",
    date: "2021-10-01",
  
//posts endpoints

//get all posts
router.use('/posts', (req, res) => {
  res.json(database.posts);
});

module.exports = router;
  ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
