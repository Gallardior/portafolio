import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo } from "../../components"

const BlogPage = (props) => {
	const allPosts = props.data.allGraphCmsPost.nodes
	console.log(allPosts)
	return(
		<Layout>
			<Seo title="Blog"/> 
			<h1 className="my-4 text-center">Ultimos blogs</h1>
			{
				allPosts.map(post => {
					return(
					<>
						<h3>{post.title}</h3>
						<Link to={`/blog/${post.slug}`}>Ir al posts </Link>
					</>
					)
				})
			}
		</Layout>
	)
}

export const allPosts = graphql`
	query AllPosts {
	  allGraphCmsPost(sort: {fields: publishedAt, order: DESC}) {
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

export default BlogPage