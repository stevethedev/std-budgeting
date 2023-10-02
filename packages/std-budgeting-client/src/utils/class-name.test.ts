import { getClassName } from "./class-name";

describe("getClassName", () => {
  it("should return a string from an object", () => {
    const className = getClassName({
      foo: true,
      bar: false,
    });
    expect(className).toBe("foo");
  });

  it("should return a string from an array", () => {
    const className = getClassName([
      {
        foo: true,
        bar: false,
      },
      "baz",
    ]);
    expect(className).toBe("foo baz");
  });

  it("should return a string from a string", () => {
    const className = getClassName("foo");
    expect(className).toBe("foo");
  });

  it("should return a string from a nested array", () => {
    const className = getClassName(["foo", ["bar", ["baz"]]]);
    expect(className).toBe("foo bar baz");
  });
});
