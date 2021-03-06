import '@stoplight/elements/styles/elements.css';
import '../styles/stoplight.css';

import { PageProps } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import StoplightPage from '../components/stoplight-page';

const APIReferencePage = ({ location }: PageProps) => {
  const nodeUri = location.pathname.split('/api-reference/')[1] || '/docs/api-reference.md';

  return (
    <Layout centered={false}>
      <SEO title="API Reference" />

      <StoplightPage path="api-reference" projectSrn="gh/qualtrics/publicapidocs" nodeUri={nodeUri} />
    </Layout>
  );
};

export default APIReferencePage;
