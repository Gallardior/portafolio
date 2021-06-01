import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'

import { Layout, Seo } from "../../components"

export const query = graphql`
  query Post($id: String!, $slug: String!) {
	graphCmsPost(slug: {eq: $slug} ) {
		title
		slug
		date
		description
		coverImage {
	      url
		}
		content
		tags
		seo {
		  title
		  description
		  image {
			url
		  }
		  keywords
		}
	}
	cover: graphCmsAsset(coverImagePost: { elemMatch: { id: {eq: $id} } }) {
		gatsbyImageData(layout: FULL_WIDTH)
	}
  }
`

// (transformation: {image: {resize: {height: 1200, width: 650}}})
export default function PostTemplate (props) {
  const post = props.data.graphCmsPost
  const cover = props.data.cover
  console.log(cover)
  
  const searchImage = post.seo.image ? post.seo.image.url : post.coverImage.url 
  console.log(searchImage)

  return(
    <Layout>
	  <Seo title={post.seo.title} description={post.seo.description} image={searchImage}/> 
	  <GatsbyImage image={ getImage(cover) } alt="" className="w-full lg:h-[300px]" />
	  
	  <article className="max-w-[980px] mx-auto text-[#333]">
	    <h2 className="font-bold text-[40px] mt-4">{post.title}</h2>
		<small className="text-[16px]">{post.date}</small>
		<hr className="my-8 bg-gray-300" />
		
		<div className="prose text-[18px]">
		  <ReactMarkdown>		  
		    {post.content}
		  </ReactMarkdown>
		</div>
		
	  </article>
	</Layout>
  )
}