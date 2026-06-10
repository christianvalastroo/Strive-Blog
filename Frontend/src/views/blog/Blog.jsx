import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/navbar/likes/BlogLike";
import "./styles.css";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/blogPosts/${params.id}`);

        if (!response.ok) {
          navigate("/404");
          return;
        }

        const result = await response.json();

        setBlog(result.data);
      } catch (error) {
        console.log(error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    getBlogPost();
  }, [navigate, params.id]);

  if (loading || !blog) {
    return <div>loading</div>;
  } else {
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={blog.cover} fluid />
          <h1 className="blog-details-title">{blog.title}</h1>

          <div className="blog-details-container">
            <div className="blog-details-author">
              <BlogAuthor author={blog.author} />
            </div>
            <div className="blog-details-info">
              <div>{blog.createdAt}</div>
              {blog.readTime && (
                <div>{`lettura da ${blog.readTime.value} ${blog.readTime.unit}`}</div>
              )}
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <BlogLike defaultLikes={["123"]} onChange={console.log} />
              </div>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          ></div>
        </Container>
      </div>
    );
  }
};

export default Blog;
