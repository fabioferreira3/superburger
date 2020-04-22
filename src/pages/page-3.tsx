import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { PageLayout } from "../layouts/PageLayout"

const ThirdPage = () => (
  <PageLayout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>
)

export default ThirdPage
