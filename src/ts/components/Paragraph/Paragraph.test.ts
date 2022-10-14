import Paragraph from "./Paragraph.js";

describe("Given the instance Paragraph", () => {
  describe("When the screen shows more than one line of text", () => {
    test("Then the screen should show a paragraph component with p tag and content 'You have not watched any serie yet'", () => {
      const title = "You have not watched any serie yet";
      const screen = document.createElement("div");

      const paragraph = new Paragraph(screen, "info", title);
      paragraph.render();

      const query = screen.querySelector(".info");

      expect(query).not.toBeNull();
      expect(query.textContent).toBe(title);
    });
  });
});
