import React from "react";
import { graphql, StaticQuery } from "gatsby";

export default function Layout({ children, data }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              name
            }
          }
        }
      `}
      render={data => (
        <div className="app">
          {/* Page content: */}
          {children}
        </div>
      )}
    />

  )
}