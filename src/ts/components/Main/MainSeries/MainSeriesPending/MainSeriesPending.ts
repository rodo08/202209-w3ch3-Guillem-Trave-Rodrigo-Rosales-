import Component from "../../../Component.js";
import Paragraph from "../../../Paragraph/Paragraph.js";
import Title from "../../../Title/Title.js";

class MainSeriesPending extends Component {
  constructor(parentElemnt: HTMLElement, className: string) {
    super(parentElemnt, "section", className);
  }

  render(): void {
    super.render();

    const title = new Title(
      this.domElement,
      "h3",
      "subsection-title",
      "Pending series"
    );
    title.render();
    const paragraph = new Paragraph(
      this.domElement,
      "p",
      "info",
      "You have 4 series pending to watch"
    );
    paragraph.render();
  }
}

export default MainSeriesPending;
