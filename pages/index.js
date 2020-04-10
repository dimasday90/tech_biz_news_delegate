import Layout from "../components/Layout";
import { Jumbotron } from "react-bootstrap";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1 className="text-center">Tech Biz News</h1>
        <p className="text-justify text-monospace" style={{ fontSize: "20pt" }}>
          Welcome to "Tech Biz News". In this website, people are provided with
          top headline news of technology and business. Our sources and
          audiences come from USA, Singapore, and Indonesia.
        </p>
        <hr className="my-4" />
        <p className="text-justify text-monospace" style={{ fontSize: "20pt" }}>
          Select one of the categories above (at the top bar) to view the latest
          news. Details of each news are provided as link to the original
          source.
        </p>
      </Jumbotron>
    </Layout>
  );
}
