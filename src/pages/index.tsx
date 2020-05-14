import React from "react";

import Seo from "../components/Seo";
import { App } from "../components/App";
import { PageLayout } from "../layouts/PageLayout";
import { BannerSection } from "../components/BannerSection/BannerSection";
import { About } from "../components/About/About";
import { StatsSection } from "../components/StatsSection/StatsSection";
import { MenuSection } from "../components/MenuSection/MenuSection";

import "../components/layout.css";
import { PromoSection } from "../components/PromoSection/PromoSection"

const IndexPage = () => {
  return (
    <App>
      <PageLayout>
        <Seo title="Home" />
        <BannerSection />
        <About />
        <StatsSection />
        <MenuSection />
        <PromoSection />
      </PageLayout>
    </App>
  );
};

export default IndexPage;
