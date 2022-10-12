import Component from "../Component.js";
import MainSeries from "./MainSeries/MainSeries.js";

class Main extends Component {
  constructor(parentElemnt: HTMLElement) {
    super(parentElemnt, "main", "main");
  }

  render(): void {
    super.render();

    const mainSeries = new MainSeries(
      this.domElement,
      "Series list",
      "section-title"
    );
    mainSeries.render();
  }
}

export default Main;
