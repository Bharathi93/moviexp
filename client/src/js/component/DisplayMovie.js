var React = require('react');
var DisplayMovie = React.createClass({

getInitialState: function() {
  return {data: [],url:'http://localhost:8080/movie/favmovie'};
},

handleCommentSubmit: function() {
 $.ajax({
   url: this.state.url,
   dataType: 'json',
   type: 'POST',
   data: this.props.detail,
   success: function(data) {
     this.setState({data: data});
   }.bind(this),
   error: function(xhr, status, err) {
     console.error(this.props.url, status, err.toString());
   }.bind(this)
 });
},

render:function(){
  return(
    <div className="well">
      <div className="row" >
        <div className="col-sm-3">
        <div className="thumbnail">
        <img src={this.props.detail.Poster} alt="image"></img>
        </div>
        </div>
        <div className="col-sm-9">

        <div class="list-group">

          <div class="list-group-item">

            <h3 class="list-group-item-heading">Movie Name:<h4>{this.props.detail.Title}</h4></h3>

            <h3 class="list-group-item-text">Year:<h4>{this.props.detail.Year}</h4></h3>

            <h3 class="list-group-item-text">IMDB id:<h4>{this.props.detail.imdbID}</h4></h3>
            <input className="btn btn-primary" value="Favourite" onClick={this.handleCommentSubmit}/>

          </div>

        </div>
    </div>
    </div>
    </div>
  );
}
});
module.exports = DisplayMovie;
