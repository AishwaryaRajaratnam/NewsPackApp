var React= require('react');
var ReactDOM= require('react-dom');

var About=require("./components/About.js");
var Home=require("./components/Home.js");
var Contact=require("./components/Contact.js");
var NavBar=require("./components/NavBar.js");
var ShowNews=require("./components/ShowNews.js");
var FindNewsProvider=require("./components/FindNewsProvider.js");
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var MainComponent = React.createClass({


  render: function(){
    return(
      <div>
<NavBar />
    {this.props.children}

      </div>
    )
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path = "/" component = {MainComponent} >
  <IndexRoute component = {FindNewsProvider} />

  <Route path = "/about" component = {About} />
  <Route path = "/contact" component = {Contact} />
  </Route>
  </Router>,
  document.getElementById('app'));
