import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <a href="#drinks">Drinks</a>
      <a href="#api">API</a>
      <Link to="/signup">Sign Up</Link>
      <a href="expore">Explore</a>
    </div>
  );
}

export default TopNav;
