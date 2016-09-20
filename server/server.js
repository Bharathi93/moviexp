var express=require('express');
var mongoose=require('/mongoose');
var users=require('./model/users');
var app=express();

mongoose.connect('mongodb://localhost:27017/users',function(error){
if(error)
{
  console.log(error);
}

});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'Connection'));
db.once('open',function()
{
  console.log("connected");
});

app.get('/',function(req,res){
  res.send("<a href='/users'>ShowData</a>");
});

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
