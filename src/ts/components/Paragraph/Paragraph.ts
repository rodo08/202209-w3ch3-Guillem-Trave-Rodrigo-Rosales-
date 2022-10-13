import Component from "../Component/Component.js";

class Paragraph extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    private readonly title: string
  ) {
    super(parentElement, "p", className);
  }

  render(): void {
    super.render();

    this.domElement.textContent = this.title;
  }
}

export default Paragraph;
