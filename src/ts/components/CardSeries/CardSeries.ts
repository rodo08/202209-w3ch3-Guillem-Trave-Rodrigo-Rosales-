import series from "../../series.js";
import Component from "../Component/Component.js";
import Paragraph from "../Paragraph/Paragraph.js";
import Title from "../Title/Title.js";

class CardSeries extends Component {
  constructor(
    parentElemnt: HTMLElement,
    className: string,
    private readonly subSectionTitle: string
  ) {
    super(parentElemnt, "section", className);
  }

  render(): void {
    super.render();

    const title = new Title(
      this.domElement,
      "h3",
      "subsection-title",
      this.subSectionTitle
    );
    title.render();

    const isWatched: boolean = this.subSectionTitle.includes("Watched");
    let showTitle: string;
    const seriesWatched = series.filter(
      (serie) => serie.watched === isWatched
    ).length;

    if (this.subSectionTitle.includes("Watched")) {
      if (seriesWatched === series.length) {
        showTitle = "Congrats! You've watched all your series";
      } else {
        showTitle = `You have ${seriesWatched} series pending to watch`;
      }
    } else if (seriesWatched <= 0) {
      showTitle = "You have not watched any serie yet";
    } else {
      showTitle = `You have watched ${seriesWatched} series`;
    }

    const paragraph = new Paragraph(this.domElement, "info", showTitle);
    paragraph.render();
  }
}

export default CardSeries;
