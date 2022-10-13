import Series from "./Series";

describe("Given the instance Series", () => {
  describe("When it has been rendered", () => {
    test("Then it should display a series component with tag section", () => {
      const screen = document.createElement("div");
      const series = new Series(screen, "series");
      series.render();

      const query = screen.querySelector(".series");
      expect(query).not.toBeNull();
    });

    test("Then it should display a headliner component with tag h3", () => {
      const expectedTitle = "Series list";
      const screen = document.createElement("div");
      const series = new Series(screen, "series");
      series.render();

      const query = screen.querySelector("h3");
      expect(query).not.toBeNull();
      expect(query.textContent).toBe(expectedTitle);
    });
  });
});
