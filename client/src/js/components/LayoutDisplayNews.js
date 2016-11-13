var React= require('react');

var LayoutDisplayNews= React.createClass({
  render: function(){

    return(
      <div>
      <div className="row">
      <br></br>    <br></br>
      <h1>{this.props.specNewsObject.title}</h1>
      <div className="col-lg-4">


      <img src={this.props.specNewsObject.urlToImage} alt="Poster Image" height="300" width="250" style={{marginTop:'20'}}></img>
      </div>

      <div className="col-lg-5" >
      <div className="well">
      <br></br>    <br></br>     <br></br>     <br></br>
      <br></br>     <br></br>       <br></br>      <br></br>
    <p>Description:  {this.props.specNewsObject.description}</p>
      </div>
    <a href={this.props.specNewsObject.url} className="btn btn-primary" target="_blank"><span className="glyphicon glyphicon-share-alt"></span> See on</a>&nbsp;&emsp;
    <button onClick={this.addMovie} className="btn btn-warning"><span className="glyphicon glyphicon-star"></span> Add as favourite</button>
    </div>
    </div><br></br><hr></hr>
    </div>
    );
  }
});

module.exports=LayoutDisplayNews;
