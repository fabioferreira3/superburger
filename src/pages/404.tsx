import React from "react";

import Seo from "../components/Seo";
import { PageLayout } from "../layouts/PageLayout";

export const NotFoundPage: React.FC = () => (
  <PageLayout>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
);

export default NotFoundPage;
