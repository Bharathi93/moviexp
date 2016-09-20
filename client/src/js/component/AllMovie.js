var React=require('react');
var DisplayFav=require('./DisplayFav');
var AllMovie=React.createClass({

getInitialState: function() {
  return {data: [],url:'http://localhost:8080/movie/allfav'};
},

fetch: function() {
 $.ajax({
   type:"GET",
   url: this.state.url,
   dataType: 'json',
   success: function(data) {
     this.setState({data:data});
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(this.props.url, status, err.toString());
   }.bind(this)
 });
},

componentDidMount:function(){
 this.fetch();
},

render:function(){
    var commentNodes = this.state.data.map(function(fdetail){
      return (
        <DisplayFav fdetail={fdetail} />
    );
  });

  return(

<div className="disp">

<h2> These are my favourites</h2>
      {commentNodes}
    </div>

  );
}
});

module.exports=AllMovie;
