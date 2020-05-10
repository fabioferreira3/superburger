import React from "react";

import SEO from "../components/seo";
import { App } from "../components/App";
import { PageLayout } from "../layouts/PageLayout";
import { BannerSection } from "../components/BannerSection/BannerSection";
import { About } from "../components/About/About";
import { StatsSection } from "../components/StatsSection/StatsSection";
import { MenuSection } from "../components/MenuSection/MenuSection";

import "../components/layout.css";

const IndexPage = () => {
  return (
    <App>
      <PageLayout>
        <SEO title="Home" />
        <BannerSection />
        <About />
        <StatsSection />
        <MenuSection />
      </PageLayout>
    </App>
  );
};

export default IndexPage;
