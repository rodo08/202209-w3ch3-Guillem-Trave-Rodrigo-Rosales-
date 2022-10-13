import Component from "../Component/Component.js";
import Series from "./Series/Series.js";

class Main extends Component {
  constructor(parentElemnt: HTMLElement, className: string) {
    super(parentElemnt, "main", className);
  }

  render(): void {
    super.render();

    const series = new Series(this.domElement, "series");
    series.render();
  }
}

export default Main;
