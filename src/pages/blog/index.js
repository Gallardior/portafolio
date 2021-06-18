import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Seo, PostCard } from "../../components"

const BlogPage = (props) => {
	const allPosts = props.data.allGraphCmsPost.nodes
	return(
		<Layout>
			<Seo title="Blog"/>
			<div className="prose text-center mb-8 min-w-full">
				<h2>Ultimos Articulos</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{
				allPosts.map(post => <PostCard post={post} key={post.title} />)
			}
			</div>
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