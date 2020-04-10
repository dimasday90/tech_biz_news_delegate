import React from "react";
import { render, cleanup } from "@testing-library/react";
import * as nextRouter from "next/router";
import renderer from "react-test-renderer";

import Layout from "../components/Layout";

afterEach(cleanup);

describe("Footer Test", () => {
  test("should render footer text", () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
    const { getByText } = render(<Layout />);
    expect(getByText("Tech Biz News")).toBeInTheDocument();
  });
});

describe("With Snapshot Testing", () => {
  it("should match layout coding", () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
    const component = renderer.create(<Layout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
