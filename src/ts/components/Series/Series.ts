import CardSeries from "../CardSeries/CardSeries.js";
import Component from "../Component/Component.js";
import Title from "../Title/Title.js";

class Series extends Component {
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
    const cardSeries = new CardSeries(
      this.domElement,
      "series-pending",
      "Pending series"
    );
    cardSeries.render();
    const cardSeries2 = new CardSeries(
      this.domElement,
      "series-watched",
      "Watched series"
    );
    cardSeries2.render();
  }
}

export default Series;
