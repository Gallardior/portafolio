import * as React from "react"
import { Link, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo } from "../../components"

const PortfolioPage = (props) => {
	const allProjects = props.data.allGraphCmsProject.nodes
	console.log(allProjects)
	return(
		<Layout>
			<Seo title="Portfolio"/> 
			<h1 className="my-4 text-center">Ultimos Proyectos</h1>
			{
				allProjects.map(project => {
					return(
					<>
						<h3>{project.title}</h3>
						<Link to={`/portfolio/${project.slug}`}>Ir al posts </Link>
					</>
					)
				})
			}
		</Layout>
	)
}

export const allProjects = graphql`
	query allProjects {
	  allGraphCmsProject(sort: {fields: publishedAt, order: DESC}) {
		nodes {
		  title
		  slug
		}
	  }
	}
`

export default PortfolioPage