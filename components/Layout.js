import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Tech Biz News</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <Container fluid style={{ marginTop: 100, marginBottom: 30 }}>
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
