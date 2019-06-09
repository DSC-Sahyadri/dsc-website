import React from "react";
import style from "./Style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby"
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
    imageFirst: file(relativePath: { eq: "images/dsc-logo2.png" }) {
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
                <div><Link className={style.links} activeClassName={style.activelink}       to="/">Home</Link></div>
                <div> <Link className={style.links}  activeClassName={style.activelink}  to="/events">Events</Link></div>
                <div><Link className={style.links}  activeClassName={style.activelink}  to="/page-2/">Team</Link></div>
                <div>  <Link  className={style.links}  activeClassName={style.activelink}  to="/Blogs">Blogs</Link></div>
              </ul>
            </div>
          </div>
        </>
      </header>
    )}
  />
);

export default Header;
