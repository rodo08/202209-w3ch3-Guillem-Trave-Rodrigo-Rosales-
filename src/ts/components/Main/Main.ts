import Component from "../Component/Component.js";
import MainSeries from "./MainSeries/MainSeries.js";

class Main extends Component {
  constructor(parentElemnt: HTMLElement, className: string) {
    super(parentElemnt, "main", className);
  }

  render(): void {
    super.render();

    const mainSeries = new MainSeries(this.domElement, "series");
    mainSeries.render();
  }
}

export default Main;
