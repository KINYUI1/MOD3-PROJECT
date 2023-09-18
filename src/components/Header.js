import { Link } from "react-router-dom";
function Header() {
    return ( <div className="blogpageheader">
    <h2>BlogPage</h2>
    <Link to="login/signin">LogIn/SignIn</Link>
  </div> );
}

export default Header;