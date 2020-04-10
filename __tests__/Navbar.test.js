import React from "react";
import { render, cleanup } from "@testing-library/react";
import * as nextRouter from "next/router";
import renderer from "react-test-renderer";

import Navbar from "../components/Navbar";

afterEach(cleanup);

describe("Navbar Test", () => {
  test("should render navbar text", () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
    const { getByText } = render(<Navbar />);
    expect(getByText("Tech Biz News")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Technology")).toBeInTheDocument();
    expect(getByText("Business")).toBeInTheDocument();
  });
});

describe("With Snapshot Testing", () => {
  it("should match navbar coding", () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
    const component = renderer.create(<Navbar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
