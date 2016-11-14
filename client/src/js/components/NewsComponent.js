handleAddNews: function()
  {
    console.log("News add clicked")
     var movieJSON=this.props.newsInfo;
     console.log(movieJSON);
    $.ajax({
      url:"http://localhost:8080/news/add",
      type:'POST',
      data: movieJSON,
      success: function(msg)
      {
        alert(msg);
        //console.log("Movie added successfully");
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
  },
