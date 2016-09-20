var express = require('express');
var app = express.Router();
var users=require('../model/users');

/* GET users listing. */
app.post('/userinsert/:userid/:password',function(req,res)
{
  var user=new users();
  user.username=req.params.userid;
  user.password=req.params.password;
  user.save(function(err)
{
  if(err)
  {
    res.send(err);
  }
  else
    {
      res.send('user created');
    }
  });
});

app.put('/modify/:userid/:password', function(req, res, next) {
  var user=new users();
  user.username=req.params.userid;
  user.password=req.params.password;
  user.save(function(err)
{
  if(err)
  {
    res.send(err);
  }
  else
    {
      res.send('user updated');
    }
  });
});

app.delete('/del/:userid', function(req, res, next) {
  var user=new users();
  user.username=req.params.userid;
  //user.password=req.params.password;
  mongoose.model('users').find(user.username,function(err,users)
  {
    if(err)
    {
      throw err;
    }
  else {
    user.remove(function(err)
    {
    if(err)
    {
      throw err;
    }
    else
      {
        res.send('user deleted');
      }
  });
}
});
});

module.exports = app;
