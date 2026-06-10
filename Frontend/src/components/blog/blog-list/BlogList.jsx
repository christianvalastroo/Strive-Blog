import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/blogPosts");

        if (response.ok === false) {
          throw new Error("Errore nel recupero dei blog post");
        }

        const result = await response.json();

        setPosts(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogPosts();
  }, []);

  return (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={post._id || `item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
