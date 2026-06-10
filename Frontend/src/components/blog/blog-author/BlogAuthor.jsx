import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = ({ author }) => {
  const name = author ? `${author.nome} ${author.cognome}` : "Autore non disponibile";

  return (
    <Row>
      <Col xs={"auto"} className="pe-0">
        {author?.avatar && (
          <Image
            className="blog-author"
            src={author.avatar}
            alt={name}
            roundedCircle
          />
        )}
      </Col>
      <Col>
        <div>di</div>
        <h6>{name}</h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;
