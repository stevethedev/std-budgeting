import { cssProperties } from "./css-properties";

describe("cssProperties", () => {
  it("should return the same object", () => {
    const props = {
      "--foo": "bar",
      "--baz": "qux",
      color: "red",
      fontSize: "1rem",
    };
    expect(cssProperties(props)).toEqual(props);
  });

  it("should combine multiple objects", () => {
    const a = {
      "--foo": "bar",
      "--baz": "qux",
    };

    const b = {
      color: "red",
      fontSize: "1rem",
    };
    expect(cssProperties(a, b)).toEqual({ ...a, ...b });
  });
});
