import React from "react";
import { ReactDOM } from "react";

let d = new Date();
const year = d.getFullYear();
console.log(year);

function Footer() {
  return (
    <footer>
      <h1>Copyright {year}</h1>
    </footer>
  );
}

export default Footer;
