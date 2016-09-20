var React = require('react');
var SearchBar = React.createClass({

  getInitialState: function() {
    return {text: ''};
  },

  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit:function()
  {
    this.props.data(this.state.text);
  },
  render:function(){
    return(
      <div className="jumbotron">
      <div className="row">

				<div className="col-md-12">

          <input type="text" className="form-control input-sm"value={this.state.text}
          onChange={this.handleTextChange}/>

          <input type="submit" className="btn btn-success" value="Search" onClick={this.handleSubmit}/>

				</div>

			</div>

      </div>
    );
  }
});
module.exports = SearchBar;
