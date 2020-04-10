import React from "react";
import { render, cleanup } from "@testing-library/react";
import * as nextRouter from "next/router";
import renderer from "react-test-renderer";

import Footer from "../components/Footer";

afterEach(cleanup);

describe("Footer Test", () => {
  test("should render footer text", () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
    const { getByText } = render(<Footer />);
    expect(getByText("Powered by")).toBeInTheDocument();
    expect(getByText("newsapi.org")).toBeInTheDocument();
  });
});

describe("With Snapshot Testing", () => {
  it("should match footer coding", () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
