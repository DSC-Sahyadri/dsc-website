import React from "react";
import "./Style.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Header = ({ props }) => (
  <StaticQuery
    query={graphql`
    fragment firstSiteImages on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    query{
    imageFirst: file(relativePath: { eq: "logo2.png" }) {
      ...firstSiteImages
    }
  

      }
    `}
    render={data => (
      <header>
        <>
          <div className="Menu">
            <div className="image">
              <Img
                fluid={data.imageFirst.childImageSharp.fluid}
                className="dsc_logo"
              />
            </div>
            <div className="list">
              <ul>
                <li>Home</li>
                <li>Events</li>
                <li>Projects</li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </>
      </header>
    )}
  />
);

export default Header;
