import Component from "../Component/Component.js";
import Title from "../Title/Title.js";

class Header extends Component {
  constructor(parentElement: HTMLElement, className: string) {
    super(parentElement, "header", className);
  }

  render(): void {
    super.render();

    const title = new Title(this.domElement, "h1", "main-title", "My Series");
    title.render();
  }
}

export default Header;
