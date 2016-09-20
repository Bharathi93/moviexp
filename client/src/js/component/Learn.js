var React=require('react');
var Learn=React.createClass({

  render:function()
  {
    return(

  <div className="container-fluid">
    {this.props.params.comp}

      </div>

    );
}
});

module.exports=Learn;
