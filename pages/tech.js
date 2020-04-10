import Layout from "../components/Layout";
import newsapi from "../api";
import NewsCard from "../components/NewsCard";
import { Tabs, Tab } from "react-bootstrap";

const TechNews = props => {
  return (
    <Layout>
      <div>
        <h1>Technology News</h1>
        <Tabs defaultActiveKey="USA" variant="pills">
          <Tab eventKey="USA" title="USA">
            <NewsCard news={props.techUS} />
          </Tab>
          <Tab eventKey="Singapore" title="Singapore">
            <NewsCard news={props.techSG} />
          </Tab>
          <Tab eventKey="Indonesia" title="Indonesia">
            <NewsCard news={props.techID} />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

TechNews.getInitialProps = async function() {
  const resUS = await newsapi.v2.topHeadlines({
    country: "us",
    language: "en",
    category: "technology",
    pageSize: 8
  });
  const resSG = await newsapi.v2.topHeadlines({
    country: "sg",
    language: "en",
    category: "technology",
    pageSize: 8
  });
  const resID = await newsapi.v2.topHeadlines({
    country: "id",
    language: "en",
    category: "technology",
    pageSize: 8
  });
  return {
    techUS: resUS.articles,
    techSG: resSG.articles,
    techID: resID.articles
  };
};

export default TechNews;
