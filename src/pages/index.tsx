import React from "react";

import Seo from "../components/Seo";
import { App } from "../components/App";
import { PageLayout } from "../layouts/PageLayout";
import { BannerSection } from "../components/BannerSection/BannerSection";
import { About } from "../components/About/About";
import { StatsSection } from "../components/StatsSection/StatsSection";
import { MenuSection } from "../components/MenuSection/MenuSection";

import "../components/layout.css";
import { PromoSection } from "../components/PromoSection/PromoSection";
import { Footer } from "../components/Footer/Footer";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Hidden } from "@material-ui/core";
import LazyLoad from "react-lazyload";

const IndexPage = () => {
  return (
    <App>
      <PageLayout>
        <Seo title="Home" />
        <Hidden xsDown>
          <BannerSection />
        </Hidden>
        <About />
        <Hidden xsDown>
          <StatsSection />
        </Hidden>
        <MenuSection />
        <PromoSection />
        <LazyLoad>
          <ContactForm />
        </LazyLoad>
        <Footer />
      </PageLayout>
    </App>
  );
};

export default IndexPage;
