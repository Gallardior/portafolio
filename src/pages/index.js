import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Layout, Seo } from "../components"

const IndexPage = (props) => {
	console.log(props.data.allGraphCmsPost.nodes)
	return(
		<Layout>
			<Seo title="Home"/> 
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<StaticImage
			  src="../images/gatsby-astronaut.png"
			  width={300}
			  quality={95}
			  formats={["AUTO", "WEBP", "AVIF"]}
			  alt="A Gatsby astronaut"
			  style={{ marginBottom: `1.45rem` }}
			/>
			<p>
			  <Link to="/page-2/">Go to page 2</Link> <br />
			</p>
		</Layout>
	)
}

export const query = graphql`
	query Posts {
	  allGraphCmsPost(limit: 3, sort: {fields: publishedAt, order: DESC}) {
		nodes {
		  title
		  description
		  coverImage {
			url
		  }
		  date
		  slug
		}
	  }
	}
`

export default IndexPage
