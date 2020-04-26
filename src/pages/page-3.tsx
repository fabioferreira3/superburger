import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { PageLayout } from "../layouts/PageLayout"
import { App } from "./index"

const ThirdPage = () => (
  <App>
    <PageLayout>
      <SEO title="Page three" />
      <h1>Hi from the third page</h1>
      <p>Welcome to page 3</p>
      <Link to="/">Go back to the homepage</Link>
    </PageLayout>
  </App>
)

export default ThirdPage
