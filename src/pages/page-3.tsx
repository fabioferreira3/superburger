import React from "react";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import { PageLayout } from "../layouts/PageLayout";
import { App } from "../components/App";

const ThirdPage = () => (
  <App>
    <PageLayout>
      <Seo title="Page three" />
      <h1>Hi from the third page</h1>
      <p>Welcome to page 3</p>
      <Link to="/">Go back to the homepage</Link>
    </PageLayout>
  </App>
);

export default ThirdPage;
