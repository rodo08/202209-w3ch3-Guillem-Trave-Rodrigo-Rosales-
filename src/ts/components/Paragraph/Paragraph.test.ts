import Paragraph from "./Paragraph.js";

describe("Given the instance Paragraph", () => {
  describe("When the screen shows more than one line of text", () => {
    test("Then the screen should show a paragraph component with p tag", () => {
      const screen = document.createElement("div");

      const paragraph = new Paragraph(screen, "", "");
      paragraph.render();

      const query = screen.querySelector("p");

      expect(query).not.toBeNull();
    });
  });
});
