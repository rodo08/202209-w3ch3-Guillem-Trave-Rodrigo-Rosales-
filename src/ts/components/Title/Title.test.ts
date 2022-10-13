import Title from "./Title.js";

describe("Given the instance Title", () => {
  describe("When the screen shows a headliner", () => {
    test("Then the screen should show a headliner component with an h1 tag", () => {
      const screen = document.createElement("div");
      const title = new Title(screen, "h1", "", "");
      title.render();

      const query = screen.querySelector("h1");
      expect(query).not.toBeNull();
    });
  });
});
