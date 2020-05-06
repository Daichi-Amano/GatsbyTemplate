import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Props = {
  name: string
  className?: string
}
const Image = ({ name }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data[name].childImageSharp.fluid} />
}

export default Image
