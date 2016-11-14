var React= require('react');

var About= React.createClass({
render: function(){
  return(
    <div>
    <ul >
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-heart"></span> Favourites <strong className="caret"></strong></a>

        <ul className="dropdown-menu">
          <li>
            <Link href="#"> Entertainment</Link>
          </li>

          <li>
            <Link href="#">Sports</Link>
          </li>

          <li>
            <Link href="#">Political</Link>
          </li>
          <li>
            <Link href="#">Ecnomical</Link>
          </li>

          <li class="divider">
          </li>
          <li>
            <Link href="#">Others</Link>
          </li>
        </ul>
      </li>
    </ul>
</div>
  );
}
});

module.exports=About;
