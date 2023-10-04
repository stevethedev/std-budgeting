import { Stack } from ".";
import { render } from "@testing-library/react";
import { createElement } from "react";

jest.mock("react", () => {
  const react = jest.requireActual("react");
  return {
    ...react,
    createElement: jest.fn(react.createElement),
  };
});

describe("Stack", () => {
  it("should render as a `div` by default", () => {
    const { container } = render(<Stack>foo</Stack>);
    expect(container.children).toHaveLength(1);
    expect(createElement).toHaveBeenCalledWith("div", expect.anything(), "foo");
    expect(container.children[0].nodeName).toBe("DIV");
  });

  it("should allow a string-based `as` prop", () => {
    const { container } = render(<Stack as="nav">foo</Stack>);
    expect(container.children).toHaveLength(1);
    expect(createElement).toHaveBeenCalledWith("nav", expect.anything(), "foo");
    expect(container.children[0].nodeName).toBe("NAV");
  });

  it("should allow a component-based `as` prop", () => {
    const Comp = (props: object) => <section {...props} />;
    const { container } = render(<Stack as={Comp}>foo</Stack>);
    expect(container.children).toHaveLength(1);
    expect(createElement).toHaveBeenCalledWith(Comp, expect.anything(), "foo");
    expect(container.children[0].nodeName).toBe("SECTION");
  });
});
