import { headerComponent } from "./components/header/header";
import { mainComponent } from "./components/mainsection/mainsection";
import "./style.css";

document.getElementById("app").innerHTML = `   

  <header id="header"></header>
  <main id="main"></main>

`;

headerComponent(document.getElementById("header"));
mainComponent(document.getElementById("main"));
