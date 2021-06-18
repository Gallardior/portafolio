import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Seo, ProjectCard } from "../../components"

const PortfolioPage = (props) => {
	const allProjects = props.data.allGraphCmsProject.nodes
	return(
		<Layout>
			<Seo title="Portfolio"/> 
			<div className="prose text-center mb-8 min-w-full">
				<h2>Ultimos Proyectos</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{
				allProjects.map(project => <ProjectCard project={project} key={project.title}/>)
			}
			</div>
		</Layout>
	)
}

export const allProjects = graphql`
	query allProjects {
	  allGraphCmsProject(sort: {fields: publishedAt, order: DESC}) {
		nodes {
		  title
		  slug
		  preview
		  repositorio
		  miniatura {
			url
		  }
		}
	  }
	}
`

export default PortfolioPage