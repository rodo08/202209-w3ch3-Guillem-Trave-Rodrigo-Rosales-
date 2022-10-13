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
    const cardSeriesPending = new CardSeries(
      this.domElement,
      "series-pending",
      "Pending series"
    );
    cardSeriesPending.render();
    const cardSeriesWatched = new CardSeries(
      this.domElement,
      "series-watched",
      "Watched series"
    );
    cardSeriesWatched.render();
  }
}

export default Series;
