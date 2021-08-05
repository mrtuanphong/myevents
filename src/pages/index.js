import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Tabletop from "../components/Tabletop";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta property="og:title" content={data.site.siteMetadata.title}></meta>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta property="og:description" content={data.site.siteMetadata.description}></meta>
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="canonical" href={data.site.siteMetadata.url} />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta property="og:image" content={data.site.siteMetadata.image} />
      </Helmet>
      <h1 className="text-3xl text-center font-semibold pt-4">
        <a
          href="https://docs.google.com/spreadsheets/d/1k5aMKFFg-sNGy1pwkFPai9Yl0v2iVV10Fs_n-Gnk3ek/edit#gid=1998618605"
          target="_blank"
          title="See the Google Sheets file"
          className="hover:text-blue-600"
        >
          {data.site.siteMetadata.name}
        </a>
      </h1>
      <Tabletop />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        name,
        author,
        title,
        description,
        keywords,
        url,
        image
      }
    }
  }
`