import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, useStore } from "./store";
import "@testing-library/jest-dom";

describe("Provider", () => {
  it("renders children", () => {
    render(
      <Provider>
        <div>Child component</div>
      </Provider>,
    );

    expect(screen.getByText("Child component")).toBeInTheDocument();
  });

  it("provides store context", async () => {
    const TestComponent = () => {
      const [store, setStore] = useStore();

      const handleClick = () => {
        setStore({ name: "John", age: 30 });
      };

      return (
        <div>
          <div data-testid="name">{store.name}</div>
          <div data-testid="age">{store.age}</div>
          <button onClick={handleClick}>Update store</button>
        </div>
      );
    };

    render(
      <Provider>
        <TestComponent />
      </Provider>,
    );

    expect(screen.getByTestId("name")).toHaveTextContent("");
    expect(screen.getByTestId("age")).toHaveTextContent("0");

    const updateButton = screen.getByText("Update store");
    await userEvent.click(updateButton);

    expect(screen.getByTestId("name")).toHaveTextContent("John");
    expect(screen.getByTestId("age")).toHaveTextContent("30");
  });
});
