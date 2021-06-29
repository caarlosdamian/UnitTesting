import { act, render, fireEvent } from "@testing-library/react";
import Input from "../Components/Input";

describe("Input Component", () => {
  it("render input", () => {
    const { getByTestId } = render(<Input showdiv={false} />);
    const input = getByTestId("searchBar");
    expect(input).toBeTruthy();
  });

  it("render div", () => {
    const { getByTestId } = render(<Input showdiv={true} />);
    const div = getByTestId("divWeWantToShow");
    expect(div).toBeTruthy();
  });

  it("dont render div", () => {
    const { queryByTestId } = render(<Input showdiv={false} />);
    const div = queryByTestId("divWeWantToShow");
    expect(div).toBeFalsy();
  });

  it("change on input", async () => {
    await act(async () => {
      const { getByTestId } = render(<Input showdiv={true} />);
      const input = getByTestId("searchBar");
      const header = getByTestId("displaySearch");
      const inputword = "Carlos"
      await fireEvent.change(input, {target:{value: inputword}})
      expect(header.innerHTML).toBe(inputword)
    });
  });
});
