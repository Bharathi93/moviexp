var React=require('react');
var ReactDOM=require('react-dom');
var SearchBar = require('./SearchBar');
var MovieList = require('./MovieList');


var MovieBox=React.createClass({

getInitialState: function() {
  return {data:[],url:'http://www.omdbapi.com/?s='};
},
SearchData: function(value) {
  $.ajax({
    url: this.state.url+value,
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({data: data.Search});
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(this.state.url, status, err.toString());
    }.bind(this)
  });
},
render:function()
{
  return(
    <div className="main">

      <h2>Search for a movie</h2>
      <SearchBar data={this.SearchData}/>
      <MovieList list={this.state.data}/>

    </div>
  );
}
});

module.exports = MovieBox;
