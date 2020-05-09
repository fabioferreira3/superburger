import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import { App } from "../components/App";
import { PageLayout } from "../layouts/PageLayout";
import { BannerSection } from "../components/BannerSection/BannerSection";
import { About } from "../components/About/About";

import "../components/layout.css";

const IndexPage = () => {
  return (
    <App>
      <PageLayout>
        <BannerSection />
        <About />
        <SEO title="Home" />
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-3/">Go to page 3</Link>
      </PageLayout>
    </App>
  );
};

export default IndexPage;
