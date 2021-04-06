import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBarLinks = links.map((link) => {
    //<a href="#home">home</a> 
    return  (<a href={`"#${link}`} key={link}>{link}</a>)
  })
  //deliverable 1
  return <nav>
    {navBarLinks}
  </nav>;
}

export default NavBar;
