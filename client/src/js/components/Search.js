var React= require('react');

var Search= React.createClass({

  onFormSubmit: function (e) {
e.preventDefault();
var  cat=this.refs.category.value
var searchNews=this.refs.newsSearch.value;
this.refs.MovieName.value='';
this.props.onSearch(movieName);
},
  render: function(){
    return(
<div>
<div className="well">
<form onSubmit={this.onFormSubmit} className="navbar-form center">
<label className="col-lg-2 control-label" for="category">Category:</label>
<select className="" id="category" ref="category">
<option>sports</option>
<option>politics</option>
<option>economical</option>
<option>entertainment</option>
<option>others</option>
</select>

<div className="container text-center">
<h1>Search Movie</h1>
<br></br>
<input type="text" ref="newsSearch" className="" /> &emsp;&emsp;

<button  className="btn btn-primary" >
<span className="glyphicon glyphicon-search"></span>  Search
</button>
</div>
</form>
</div>


</div>

    );
  }
});

module.exports=Search;
