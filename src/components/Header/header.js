import React from "react";
import style from "./Style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Header = ({ props }) => (
  <StaticQuery
    query={graphql`
    fragment firstSiteImages on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    query{
    imageFirst: file(relativePath: { eq: "dsc-logo2.png" }) {
      ...firstSiteImages
    }
  

      }
    `}
    render={data => (
      <header>
        <>
          <div className={style.Menu}>
          <div className={style.titlewrap}>
            <div className={style.image}>
              <Img
                fluid={data.imageFirst.childImageSharp.fluid}
                className={style.dsc_logo}
              />
             
            </div>
            <p className={style.title}>DSCS</p>
           </div>
            <div className={style.list}>
              <ul className={style.ullist}>
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
