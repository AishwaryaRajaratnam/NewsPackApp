var React = require('react');
var {browserHistory}= require ('react-router');
var Login = React.createClass({


checkUser(e){
  e.preventDefault();

  var username = this.refs.userName.value;
   // alert("Hello"+username);
  var password = this.refs.passWord.value;
      //alert(password);
      self=this;
      var userObj={"username":username,"password":password};
  $.ajax({
    url:'http://localhost:8080/login',
    type: 'POST',
    data:userObj,

    success: function(data)
    {
    alert(data);
   console.log("Ajax login success");
     self.props.update(true);
     browserHistory.push('/home');
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
  });
},
render : function () {
  return(
    <head>
  <title>News-LoginPage</title>

		 <link rel="icon" href="http://vectorlogofree.com/wp-content/uploads/2014/05/21601-news-logo-icon-vector-icon-vector-eps.png" type="image/x-icon">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>
<body>
<style>
div{
    max-width: 450px;
    background: #FAFAFA;
    padding: 30px;
    margin: 100px auto;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    border: 6px solid #305A72;
}
</style>

<div class="container">
  <h2>Please Login</h2>
  <form>

      <label for="user">UserName</label>
      <input type="user" class="form-control" id="user" placeholder="Enter Your UserName">

      <label for="pwd">Password</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password"></br>

    <button type="submit" class="btn btn-default">Login</button>
	<button type="reset" class="btn btn-default" value="Reset">Reset</button>
  </form>
</div>

</body>

  )
}
});

module.exports = Login;
