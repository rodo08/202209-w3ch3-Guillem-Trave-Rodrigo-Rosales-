import Header from "./Header.js";

describe("Given the instance Header", () => {
  describe("When it has a container component with the title 'My Series' on it", () => {
    test("Then the viewport should show a header tag component on it", () => {
      const screen = document.createElement("div");

      const header = new Header(screen, "");
      header.render();

      const query = screen.querySelector("h1");

      expect(query).not.toBeNull();
    });

    test("Then the viewport should show an h1 title component on it", () => {
      const expectedTitle = "My Series";

      const screen = document.createElement("div");

      const header = new Header(screen, "");
      header.render();

      const query = screen.querySelector("h1");

      expect(query.textContent).toBe(expectedTitle);
    });
  });
});
