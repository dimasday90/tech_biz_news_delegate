import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import * as nextRouter from "next/router";
import renderer from "react-test-renderer";

import newsapi from "../api";
import NewsCard from "../components/NewsCard";

afterEach(cleanup);

describe("NewsCard Test", () => {
  test("should render newscard component with data", async () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/tech" }));
    const fetchTechUS = await newsapi.v2.topHeadlines({
      country: "us",
      language: "en",
      category: "technology",
      pageSize: 8
    });
    const oneData = fetchTechUS.articles[0];
    const { getByText } = render(<NewsCard news={fetchTechUS.articles} />);
    expect(getByText(oneData.title)).toBeInTheDocument();
    expect(getByText(oneData.description)).toBeInTheDocument();
  });
});

describe("With Snapshot Testing", () => {
  it("should match newscard coding", async () => {
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: "/tech" }));
    const fetchTechUS = await newsapi.v2.topHeadlines({
      country: "us",
      language: "en",
      category: "technology",
      pageSize: 8
    });
    const component = renderer.create(<NewsCard news={fetchTechUS.articles} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
