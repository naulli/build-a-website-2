import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Joanna's Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Paris"> Paris </a>
        <a href="/?city=Milan"> Milan </a>
        <a href="/?city=Seoul"> Seoul </a>
        <a href="/?city=New%20Orleans"> New Orleans </a>
      </nav>
    </header>
  );
}

export default Header;
