var React= require('react');
var ReactDOM= require('react-dom');

var NavBar=require("./components/NavBar.js");
var About=require("./components/About.js");
var Home=require("./components/Home.js");
var Contact=require("./components/Contact.js");
var NavBar=require("./components/NavBar.js");
var ShowNews=require("./components/ShowNews.js");
var Search=require("./components/Search.js");
var FindNewsProvider=require("./components/FindNewsProvider.js");

var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var MainComponent = React.createClass({


  render: function(){
    return(
      <div>
<NavBar />
{this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path = "/" component = {MainComponent} >
  <IndexRoute component = {Home} />
  <Route path = "/home" component = {FindNewsProvider} />
  <Route path = "/about" component = {About} />
  <Route path = "/search" component = {Search} />
  <Route path = "/contact" component = {Contact} />
  </Route>
  </Router>,
  document.getElementById('app'));
