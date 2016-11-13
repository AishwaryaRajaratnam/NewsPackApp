var React= require('react');
var LayoutDisplayNews=require("../components/LayoutDisplayNews.js");

var NewsDisplay= React.createClass({

  render: function(){
    var specNewsObjArr=this.props.specNewsObject.map(function(news){

return(<LayoutDisplayNews specNewsObject={news}/>);

});

    return(
      <div className="container">
      <h1>Current Top News</h1>
      {specNewsObjArr}
      <br></br> <br></br>  <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br>
      </div>
    );
  }

});

module.exports=NewsDisplay;
