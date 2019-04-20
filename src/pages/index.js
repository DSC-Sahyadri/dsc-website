import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPage from '../components/LandingPage/index'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <LandingPage />
   
  </Layout>
)

export default IndexPage
