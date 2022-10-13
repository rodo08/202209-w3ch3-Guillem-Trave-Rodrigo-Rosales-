import Header from "./Header.js";

describe("Given the instance Header", () => {
  describe("When it an title", () => {
    test("Then the viewport should show a header tag component on it", () => {
      const container = document.createElement("div");
      const header = new Header(container, "");
      header.render();

      const query = container.querySelector("h1");

      expect(query).not.toBeNull();
    });

    test("Then the viewport should show an h1 title component on it", () => {
      const expectedTitle = "My Series";
      const container = document.createElement("div");
      const header = new Header(container, "");
      header.render();

      const query = container.querySelector("h1");

      expect(query.textContent).toBe(expectedTitle);
    });
  });
});
