import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'

import { Layout, Seo } from "../../components"

export const Project = graphql`
  query Project($slug: String!) {
	graphCmsProject(slug: {eq: $slug} ) {
		title
		repositorio
		preview
		screens {
		  url
		}
		content
		seo {
		  title
		  keywords
		  description
		  image {
			url
		  }
		}
		miniatura {
			url
		}
	}
  }
`

export default function ProjectTemplate (props) {
  const project = props.data.graphCmsProject
  console.log("PROPS: ", props)
  
  const searchImage = project.seo.image ? project.seo.image : project.miniatura.url

  return(
	<Layout>
		<Seo title={project.seo.title} description={project.seo.description} image={searchImage}/> 
		<article className="max-w-[980px] mx-auto text-[#333]">
			<h2 className="font-bold text-[40px] mt-4">{project.title}</h2>
			<hr className="my-8 bg-gray-300" />
			<div className="prose text-[18px]">
			  <ReactMarkdown>		  
				{project.content}
			  </ReactMarkdown>
			</div>
	    </article>
	</Layout>
  )
  
}


/*

*/

/*
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
*/