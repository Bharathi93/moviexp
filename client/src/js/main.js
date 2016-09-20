var React=require('react');
var ReactDOM=require('react-dom');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var MovieBox = require('./component/MovieBox');
var Navbar = require('./component/Navbar');
var About = require('./component/About');
var Home= require('./component/Home');
var Learn= require('./component/Learn');
var AllMovie= require('./component/AllMovie');


var MainComponent=React.createClass({

  render:function()
  {
    return(
      <div>

	<Navbar/>
  <br/><br/><br/><br/>
{this.props.children}
<br/><br/>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={MainComponent}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/moviebox" component={MovieBox}/>
        <Route path="/learn/:comp" component={Learn}/>
        <Route path="/allmovie" component={AllMovie}/>
      </Route>
  </Router>,document.getElementById('app'));
