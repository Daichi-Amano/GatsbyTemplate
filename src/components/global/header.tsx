import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Wrap = styled.header`
  background-color: purple;
`
const Header = () => {
  return (
    <Wrap>
        <h1>
          <Link to="/">
            SiteTitle
          </Link>
        </h1>
    </Wrap>
  )
}

export default Header
