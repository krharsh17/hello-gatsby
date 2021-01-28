import React from 'react'
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

export default function useSiteData() {
    const result = useStaticQuery(
      graphql`
            query MyQuery {
                site {
                    siteMetadata {
                        title
                        description
                }
            }
        }
        `
    )

    return result.site.siteMetadata
}