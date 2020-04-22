import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { PageLayout } from "../layouts/PageLayout"

const IndexPage: React.FC = () => (
  <PageLayout>
    <SEO title="Home" />
    <h1>Hi teste</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-3/">Go to page 3</Link>
  </PageLayout>
)

export default IndexPage
