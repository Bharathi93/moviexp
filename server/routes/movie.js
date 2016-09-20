var express = require('express');
var route = express.Router();
var movies1 = require('../model/movie');

/* GET home page. */
route.get('/allfav', function(req, res, next) {

  movies1.find({},function(err,docs)
{
  res.json(docs);
});
});

route.put('/upfav', function(req, res, next) {

  movies1.findOneAndUpdate({imdbID:req.body.imdbID},{Title:req.body.Title},function(err)
{
  if (err) throw err;
  res.send("Updated");
});
});
  // var a=parseInt(req.param('a'));
  // var b=parseInt(req.param('b'));
  // var total=a+b;
  // res.send("Total:"+total);
//  res.send('movie get');

route.delete('/delfav', function(req, res, next) {
movies1.findOneAndRemove({imdbID:req.body.imdbID},function(err)
{
  if (err) throw err;
  res.send("Deleted");
});
});

route.post('/favmovie',function(req,res)
{
  console.log(req.body);
  var movie=new movies1();
  movie.Title=req.body.Title;
  movie.Type=req.body.Type;
  movie.Poster=req.body.Poster;
  movie.Year=req.body.Year;
  movie.imdbID=req.body.imdbID;
  movie.save(function(err)
{
  if(err)
  {
    res.send(err);
  }
  else
    {
      res.send('Movie added');
    }
  });
});

module.exports = route;
