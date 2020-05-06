/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./global/header"
import Footer from "./global/footer"
import "ress/dist/ress.min.css"
import "./layout.scss"
import styled from "styled-components"

const Main = styled.main`
  display: block;
`
type Props = {
  children: any
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
