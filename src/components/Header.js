import { Link } from "react-router-dom";
function Header() {
    return ( <div className="blogpageheader">
    <h2>V.E.N.T</h2>
    <Link to="login/signin">Log In/Sign Up</Link>
  </div> );
}

export default Header;