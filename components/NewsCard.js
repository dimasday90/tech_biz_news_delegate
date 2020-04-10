import { Card, Container, Row, Col } from "react-bootstrap";

export default function News(props) {
  return (
    <Container fluid style={{ marginTop: 22 }}>
      <Row>
        {props.news.map((article, i) => (
          <Col key={i} xs={12} sm={6} md={3} lg={3}>
            <Card style={{ maxHeight: 920, marginBottom: 21 }}>
              <Card.Img
                variant="top"
                src={article.urlToImage}
                alt="No Image Available"
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Author: {article.author || "-"}
                </Card.Text>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url} target="_blank">
                  Details
                </Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Published Time: {new Date(article.publishedAt).toString()}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
