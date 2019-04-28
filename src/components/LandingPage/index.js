import React from "react";
import style from "./style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby"

const LandingPage = ({ props }) => (
  <StaticQuery
    query={graphql`
      fragment LandingSiteImages on File {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      query {
        imageFirst: file(relativePath: { eq: "hero2.png" }) {
          ...LandingSiteImages
        }
        imageSecond: file(relativePath: { eq: "hero1.png" }) {
          ...LandingSiteImages
        }
      }
    `}
    render={data => (
      <div>
      <div className={style.container}>
        <div className={style.content}>
          <p className={style.title}>Developer Students Club</p>
          <br />
          <p className={style.sahyadri}>Sahyadri</p>

          <br />
          <br />
          <p className={style.Landingpagecontent}>
            Provied native app and Web Development skills for Students to Help{" "}
            <br />
            them work towards Employability
          </p>
          <div className={style.landingfooter}>
     
        <button className={style.herobutton}>Learn More</button>
     </div>
        </div>
        <div className={style.solid}>
          <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className={style.hero1}
          />
          <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.hero2}
          />
        </div>
        

        
      </div>
      
     
      </div>
    )}
  />
);

export default LandingPage;
