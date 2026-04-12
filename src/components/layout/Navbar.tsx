//navigare, user info, iconița coș
import Button from "../ui/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">Allfactive</NavLink>
      </div>
      <div className="nav-links text-center">
        <NavLink to="/products">Parfumuri</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>

      <div>
        <Button
          className="btn btn-primary"
          onClick={() => console.log("da ma daa")}
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
