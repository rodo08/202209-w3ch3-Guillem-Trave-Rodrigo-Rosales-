import type { TitleTag } from "../../types.js";
import Component from "../Component/Component.js";

class Title extends Component {
  constructor(
    parentElement: HTMLElement,
    tag: TitleTag,
    className: string,
    private readonly title: string
  ) {
    super(parentElement, tag, className);
  }

  render(): void {
    super.render();

    this.domElement.textContent = this.title;
  }
}

export default Title;
