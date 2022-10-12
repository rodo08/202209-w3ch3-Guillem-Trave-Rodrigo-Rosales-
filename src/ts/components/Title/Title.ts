import Component from "../Component.js";

class Title extends Component {
  constructor(
    parentElement: HTMLElement,
    tag: string,
    className: string,
    private readonly title: string
  ) {
    super(parentElement, tag, className);
  }

  render(): void {
    this.domElement.textContent = this.title;
    super.render();
  }
}

export default Title;
