import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ReactMarkdown from 'react-markdown'
import { Layout, Seo } from "../../components"
import { VerCodigo, VerProyecto } from "../../components/ProjectCard"

export const Project = graphql`
  query Project($slug: String!) {
	  graphCmsProject(slug: {eq: $slug}) {
		title
		repositorio
		preview
		screens {
		  gatsbyImageData(layout: FULL_WIDTH)
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
const ArrowRight = ({width, height}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="#000" className="bi bi-arrow-right-circle-fill cursor-pointer" viewBox="0 0 16 16">
		  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
		</svg>
	)
}

const ArrowLeft = ({width, height}) => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="#000" className="bi bi-arrow-left-circle-fill cursor-pointer" viewBox="0 0 16 16">
		  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
		</svg>
	)
}

const Circle = ({color, handleClick}) => {
	return(
		<svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color} className="bi bi-circle-fill cursor-pointer" viewBox="0 0 16 16">
		  <circle cx="8" cy="8" r="8"/>
		</svg>
	)
}

const Slider = ({images}) => {
	const [image, setImage] = React.useState(0)
	
	const handleClickRight = () => {
		if(image < images.length - 1) {
			setImage(image + 1)
		} else {
			setImage(0)
		}
	}
	
	const handleClickLeft = () => {
		if(image === 0) {
			setImage(images.length - 1)
		} else {
			setImage(image - 1)
		}
	} 
	
	return(
		<>
		<div className="relative slider border border-gray-200 relative shadow-md max-h-[450px] overflow-hidden">
			<div className="flex items-center absolute top-0 left-[8px] h-full font-bold" style={{zIndex: 2}}>
				<div onClick={handleClickLeft}>
					<ArrowLeft width="28" height="36" />
				</div>
			</div>
			<GatsbyImage image={ getImage(images[image]) } className="max-h-[450px]"/>
			<div className="flex items-center absolute top-0 right-[8px] h-full font-bold" style={{zIndex: 2}}>
				<div onClick={handleClickRight}>
					<ArrowRight width="28" height="36" />
				</div>
			</div>
		</div>
		<div className="flex justify-center space-x-4 p-4">
		{
			images.map((img, i) => {
				let color = image === i ? '#0068b8' : '#333'
				return <Circle color={color} key={i} handleClick={() => setImage(i)}/>
			})
		}
		</div>
		</>
	)
}

const VerProyectoBtn = ({url}) => {
	return(
		<a href={url} target="_blank" rel="noreferrer" className="transition duration-500 ease-in-out font-bold p-4 flex items-center space-x-3 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white rounded-md">
			<span>Ver Proyecto</span> 
			<VerProyecto />
		</a>
	)
}

const VerCodigoBtn = ({url}) => {
	return(
		<a href={url} target="_blank" rel="noreferrer" className="transition duration-500 ease-in-out font-bold p-4 flex items-center space-x-3 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 text-white rounded-md">
			<span>Ver Codigo</span> 
			<VerCodigo />
		</a>
	)
}

export default function ProjectTemplate (props) {
  const project = props.data.graphCmsProject 
  const searchImage = project.seo.image ? project.seo.image : project.miniatura.url

  return(
	<Layout>
		<Seo title={project.seo.title} description={project.seo.description} image={searchImage}/> 
		<div className="max-w-[980px] mx-auto text-[#333] mb-4">
			<h2 className="mb-4 font-bold text-[40px]">{project.title}</h2>
			<div className="flex space-x-4">
				<VerProyectoBtn url={project.preview} />
				<VerCodigoBtn url={project.repositorio} />
			</div>
		</div>
		<article className="max-w-[980px] mx-auto text-[#333]">
			<Slider images={project.screens}/>
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
