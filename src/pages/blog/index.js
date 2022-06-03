import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import kebabCase from "lodash.kebabcase";

const BlogPage = ({ data, loction }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <div>
            <ul>
              {node.frontmatter.tags
                ? node.frontmatter.tags.map((tag) => (
                    <li key={kebabCase(tag)}>
                      <Link to={`/tags/${kebabCase(tag)}`}>
                        {kebabCase(tag)}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </article>
      ))}
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://cdn.imweb.me/upload/S201712205a3a0910b89f5/d95b7faed6d64.jpg"
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
