import React from "react";

function Footer() {
  const cuurentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ©️ {cuurentYear}</p>
    </footer>
  );
}

export default Footer;
