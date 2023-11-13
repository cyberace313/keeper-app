import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { render } from "@testing-library/react";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Note></Note>
      <Footer></Footer>
    </div>
  );
}

export default App;
