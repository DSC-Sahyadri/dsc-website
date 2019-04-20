import React from "react";
import "./style.css";
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
      <div className="container">
        <div className="content">
          <p className="DSCS">DSCS</p>

          <p className="title">Developer Students Club</p>
          <br />
          <p className="sahyadri">Sahyadri</p>

          <br />
          <br />
          <p className="Landingpagecontent">
            Provied native app and Web Development skills for Students to Help{" "}
            <br />
            them work towards Employability
          </p>
          <div className="landingfooter">
     
        <button className="herobutton">Learn More</button>
     </div>
        </div>
        <div className="solid">
          <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className="hero1"
          />
          <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className="hero2"
          />
        </div>
        

        
      </div>
      
     
      </div>
    )}
  />
);

export default LandingPage;
