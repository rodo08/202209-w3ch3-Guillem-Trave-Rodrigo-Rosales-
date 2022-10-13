import Main from "./Main.js";

describe("Given the instance Main", () => {
  describe("When it has a container that groups several related elements within it", () => {
    test("Then it should render a main container which inside contains a section container", () => {
      const screen = document.createElement("div");

      const main = new Main(screen, "");
      main.render();

      const queryMain = screen.querySelector("main");
      const querySection = screen.querySelector("section");

      expect(queryMain).not.toBeNull();
      expect(querySection).not.toBeNull();
    });
  });
});
