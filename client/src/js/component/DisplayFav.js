var React=require('react');
var ReactDOM=require('react-dom');
var DisplayFav=React.createClass({


AjaxDel:function()
{
$.ajax({
url: "http://localhost:8080/movie/delfav",
dataType: 'json',
type: 'DELETE',
data: this.props.fdetail,
success: function(data)
{
this.setState({data: data});
}.bind(this),
error: function(xhr, status, err) {
console.error(this.state.url, status, err.toString());
}.bind(this)
});
},

AjaxUpdate:function()
{
var query = ReactDOM.findDOMNode(this.refs.inputMovie).value;

this.props.fdetail.Title=query;

$.ajax({
url:"http://localhost:8080/movie/upfav",
dataType: 'json',
type: 'PUT',
data: this.props.fdetail,
success: function() {
console.log('success');

}.bind(this),
error: function(xhr, status, err) {
console.error(this.state.url, status, err.toString());
}.bind(this)
});
},



render:function(){

return(
<div className="well">
<div className="row" >
<div className="col-sm-3">
  <div className="thumbnail">
  <img src={this.props.fdetail.Poster} alt="image"/>

   </div>
</div>
<div className="col-sm-9">
  <div className="list-group">
  <div class="list-group-item">
    <h3 className="list-group-item-heading">Movie Title :<h4>{this.props.fdetail.Title}</h4></h3>
    <h3 className="list-group-item-text">Year:<h4>{this.props.fdetail.Year}</h4></h3>
    <h3 className="list-group-item-text">Id:<h4>{this.props.fdetail.imdbID}</h4></h3>
    <button type="submit" className="btn btn-danger" onClick={this.AjaxDel}>Delete</button>

    <a href="#myModal" role="button" className="btn btn-warning" data-toggle="modal">
								Update
							</a>
						<div className="modal fade" id="myModal">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button className="close" data-dismiss="modal">&times;</button>

											<h4 className="modal-title">Update</h4>
										</div>
										<div className="modal-body">

											<form className="form-horizontal">
												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputMovie">Movie</label>
													<div className="col-lg-10">
														<input className="form-control" ref="inputMovie" placeholder="Movie" type="text"/>
													</div>
												</div>

												<div className="form-group">
													<label className="col-lg-2 control-label" for="inputYear">Year</label>
													<div className="col-lg-10">
														<input className="form-control" id="inputYear" placeholder="Year" type="text"/>
													</div>
												</div>

                        <div className="form-group">
													<div className="col-lg-12">
														<input className="btn btn-success pull-right" type="submit"value="Save" onClick={this.AjaxUpdate}/>
													</div>
												</div>

											</form>
										</div>

									</div>
								</div>
							</div>




  </div>
  </div>
  </div>
</div>
</div>

)

}

});
module.exports=DisplayFav;
