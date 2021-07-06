import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const ImageGatsby = ({ src, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  quality: 90
                  transformOptions: { cropFocus: CENTER }
                  width: 1800
                )
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(src);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <GatsbyImage
          style={{
            userSelect: "none",
            maxWidth: "1800px",
            maxHeight: "600px",
          }}
          alt={alt}
          image={image.node.childImageSharp.gatsbyImageData}
        />
      );
    }}
  />
);
