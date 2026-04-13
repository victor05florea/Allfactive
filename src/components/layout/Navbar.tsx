import Button from "../ui/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useBackground from "../../hooks/useBackground";

const Navbar = () => {
  const navigate = useNavigate();
  const { nextBackground } = useBackground();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Allfactive</Link>
      </div>

      <div className="nav-links text-center">
        <NavLink to="/products">Parfumuri</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="nav-buttons-right">
        <Button variant="success" onClick={() => nextBackground()}>
          Change Background
        </Button>
        <Button variant="secondary" onClick={() => navigate("/cartPage")}>
          Cos
        </Button>
        <Button variant="danger" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
