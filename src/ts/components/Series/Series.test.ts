import Series from "./Series";

describe("Given the instance Series", () => {
  describe("When it has been rendered", () => {
    test("Then it should display a series component with tag section, h3", () => {
      const expectedTitle = "Series list";

      const screen = document.createElement("div");
      const series = new Series(screen, "series");
      series.render();

      const querySeries = screen.querySelector(".series");
      const queryTitle = screen.querySelector(".section-title");

      expect(querySeries).not.toBeNull();
      expect(queryTitle).not.toBeNull();
      expect(queryTitle.textContent).toBe(expectedTitle);
    });
  });
});
