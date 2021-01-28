import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

export const useArticles = () => {
  const result = useStaticQuery(
    graphql`
      query MyArticlesQuery {
        allMdx {
          nodes {
            frontmatter {
              author
              date
              title
              location
            }
          }
        }
      }
    `
  )

  return result.allMdx.nodes
}
