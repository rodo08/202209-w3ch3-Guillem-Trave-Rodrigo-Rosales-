import Component from "../Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement, private readonly title: string) {
    super(parentElement, "header", "main-header");
  }

  render(): void {
    super.render();

    this.domElement.innerHTML = `<h1 class="main-title">${this.title}</h1>`;
  }
}

export default Header;
