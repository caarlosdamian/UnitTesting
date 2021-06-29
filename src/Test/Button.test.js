import { act, render, fireEvent, getByTestId } from "@testing-library/react";
import Button from "../Components/Button";

describe("Button Component", () => {
  it("render button", () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId("button");
    expect(button).toBeTruthy();
  });
  it("Render one button before button click", () => {
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId("button");
    expect(buttonList).toHaveLength(1);
  });
  it("Render Two button after button click", async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);
      const buttonList = getAllByTestId("button");
      await fireEvent.click(buttonList[0]);
      expect(getAllByTestId("button")).toHaveLength(2);
    });
  });
});
