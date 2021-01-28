import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 1.8rem;
  color: #141200;
  font-weight: 600;
`

const StyledH2 = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  color: #141200;
  font-weight: 500;
`

const StyledH3 = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  color: #141200;
  font-weight: 400;
`

const StyledBold = styled.span`
  font-family: Roboto, sans-serif;
  color: #000;
  font-weight: 600;
`

const Layout = ({ children, pageContext }) => {
  return (
    <div>
      <MDXProvider
        components={{
          h1: StyledH1,
          h2: StyledH2,
          h3: StyledH3,
          strong: StyledBold,
        }}
      >
        {children}
      </MDXProvider>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
