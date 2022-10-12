import Header from "./components/Header/Header.js";

const container: HTMLElement = document.querySelector(".container");

const header = new Header(container, "My Series");

header.render();
