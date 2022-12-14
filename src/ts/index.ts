import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

const container: HTMLElement = document.querySelector(".container");

const header = new Header(container, "main-header");
header.render();

const main = new Main(container, "main");
main.render();
