//navigare, user info, iconița coș
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nr, setNr] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const bgUrl = `url('/Background${nr % 5}.png')`;
    document.body.style.backgroundImage = bgUrl;
  }, [nr]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Allfactive</Link>
      </div>

      <div className="nav-links text-center">
        <NavLink to="/products">Parfumuri</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>

      <div>
        <Button variant="success" onClick={() => setNr(nr + 1)}>
          Change Background
        </Button>
        <NavLink to="/cartPage" className="btn btn-primary">
          Cart
        </NavLink>
        <Button variant="danger" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
