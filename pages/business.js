import Layout from "../components/Layout";
import newsapi from "../api";
import NewsCard from "../components/NewsCard";
import { Tabs, Tab } from "react-bootstrap";

const BusinessNews = props => {
  return (
    <Layout>
      <div>
        <h1>Business News</h1>
        <Tabs defaultActiveKey="USA" variant="pills">
          <Tab eventKey="USA" title="USA">
            <NewsCard news={props.businessUS} />
          </Tab>
          <Tab eventKey="Singapore" title="Singapore">
            <NewsCard news={props.businessSG} />
          </Tab>
          <Tab eventKey="Indonesia" title="Indonesia">
            <NewsCard news={props.businessID} />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
};

BusinessNews.getInitialProps = async function() {
  const resUS = await newsapi.v2.topHeadlines({
    country: "us",
    language: "en",
    category: "business",
    pageSize: 8
  });
  const resSG = await newsapi.v2.topHeadlines({
    country: "sg",
    language: "en",
    category: "business",
    pageSize: 8
  });
  const resID = await newsapi.v2.topHeadlines({
    country: "id",
    language: "en",
    category: "business",
    pageSize: 8
  });
  return {
    businessUS: resUS.articles,
    businessSG: resSG.articles,
    businessID: resID.articles
  };
};

export default BusinessNews;
