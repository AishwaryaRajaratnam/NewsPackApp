var React= require('react');
var DisplayFav=require("../components/DisplayFav.js");
var Search= React.createClass({

  getInitialState: function(){
  return({
  newsFav:[]
  });
},

  onFormSubmit: function (e) {
e.preventDefault();

var searchNews=this.refs.newsSearch.value;

if(searchNews=""){searchNews="blank"}
var  category=this.refs.category.value;
alert(searchNews);
this.refs.newsSearch.value='';
//all news fetched
/*if(searchNews="" & category=="All"){
var url="http://localhost:8080/news/savednews"
}

else if(searchNews!="" & category=="All"){
var url="http://localhost:8080/news/savednews"+"/"+searchNews
}
else if(searchNews!="" & category!="All"){
var url="http://localhost:8080/news/savednews"+"/"+category+"/"+searchNews
}
else{
  var url="http://localhost:8080/news/savednews"+"/"+category
}*/
var url="http://localhost:8080/news/savednews"
var obj={category:category,searchNews:searchNews}
$.ajax({
    url: url,
    type: 'POST',
    dataType: 'JSON',
    data: obj,
    success: function(data)
    {
      alert(data.Response);
      if(data.Response=="No News"){
        alert("Sorry!!!..No News by this name.");
      }
      else{
        alert("News Found");
        this.setState({newsFav:data});
      }
    }.bind(this),

    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });

},
  render: function(){
    return(
<div>
<div className="well">
<form onSubmit={this.onFormSubmit} className="navbar-form center">
<label className="col-lg-2 control-label" for="category">Category:</label>
<select className="" id="category" ref="category">
<option>All</option>
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
<DisplayFav favNews={this.state.newsFav}/>

</div>

    );
  }
});

module.exports=Search;
