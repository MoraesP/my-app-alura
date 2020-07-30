import React from "react";
import Logo from "../../assets/images/moraesflix.png";
import Button from "../button";
import "./menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <Button as="a" href="/">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
