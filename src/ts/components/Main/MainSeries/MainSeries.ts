import Component from "../../Component.js";
import Title from "../../Title/Title.js";
import MainSeriesPending from "./MainSeriesPending/MainSeriesPending.js";

class MainSeries extends Component {
  constructor(parentElemnt: HTMLElement, className: string) {
    super(parentElemnt, "section", className);
  }

  render(): void {
    super.render();

    const title = new Title(
      this.domElement,
      "h3",
      "section-title",
      "Series list"
    );
    title.render();
    const mainSeriesPending = new MainSeriesPending(
      this.domElement,
      "series-pending"
    );
    mainSeriesPending.render();
  }
}

export default MainSeries;
