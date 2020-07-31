import React from "react";
import Logo from "../../assets/images/moraesflix.png";
import Button from "../button";
import "./menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
