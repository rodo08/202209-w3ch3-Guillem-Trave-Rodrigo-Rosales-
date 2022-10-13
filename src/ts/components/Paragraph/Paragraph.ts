import Component from "../Component.js";

class Paragraph extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    private readonly title: string
  ) {
    super(parentElement, "p", className);
  }

  render(): void {
    this.domElement.textContent = this.title;
    super.render();
  }
}

export default Paragraph;
