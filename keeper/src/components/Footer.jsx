import React from "react";
import { ReactDOM } from "react";

let d = new Date();
const year = d.getFullYear();
console.log(year);

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
