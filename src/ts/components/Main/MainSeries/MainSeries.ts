import Component from "../../Component.js";

class MainSeries extends Component {
  constructor(
    parentElemnt: HTMLElement,
    private readonly title: string,
    private readonly className: string
  ) {
    super(parentElemnt, "section", "series");
  }

  render(): void {
    super.render();

    this.domElement.innerHTML = `<h3 class="${this.className}">${this.title}</h3>`;
  }
}

export default MainSeries;
