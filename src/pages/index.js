import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Layout, Seo, ProjectCard, PostCard } from "../components"

const Btn = ({url}) => {
	return(
		<Link to={url} className="w-[fit-content] cursor-pointer inline font-bold p-4 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 text-white rounded-md">
			CONTACTAME !
		</Link>
	)
}

const Hero = () => {
	return(
		<div className="md:min-h-[80vh] bg-[#0068b8] hero border border-gray-200 rounded-lg shadow-lg mb-16 grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
			<div className="relative text-white p-12 md:p-8 h-full flex flex-col justify-center">
				<p className="font-bold text-[40px] sm:text-[48px]">Hola soy Jesus 👋</p>
				<p className="font-bold text-[24px] sm:text-[32px] mb-6">Frontend Developer</p>
				<p className="text-[16px] sm:text-[20px] font-semibold mb-8">Ayudo a empresas y marcas a construir y mejorar su presencia online a través de tecnologias web.</p>
				<Btn url="/contacto"/>
				<svg aria-hidden="true" className="z-[3] absolute top-0 right-0 hidden md:block w-[200px] h-full text-white transform translate-x-1/2 dark:text-secondary-500" fill="#0068b8" preserveAspectRatio="none" viewBox="0 0 100 100">
					<polygon points="50,0 100,0 50,100 0,100"></polygon>
				</svg>
			</div>
			<div className="hidden md:block md:min-h-full relative">
				<StaticImage src="../images/hero-image.png" className="h-full min-h-[80vh] absolute right-0 bottom-0" alt="hero-image" />
			</div>
		</div>
	)
}

const Projects = ({ projects }) => {
  return (
    <div className="mb-16">
      <h2 className="my-4 text-center font-bold text-[40px] text-[#2D3748]">
        Ultimos Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  )
}

const Posts = ({ posts }) => {
  return (
    <div className="mb-16">
      <h2 className="my-4 text-center font-bold text-[40px] text-[#2D3748]">
        Ultimos Articulos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  )
}

const IndexPage = props => {
  const posts = props.data.allGraphCmsPost.nodes
  const projects = props.data.allGraphCmsProject.nodes

  return (
    <Layout>
      <Seo title="Home" />
	  <Hero />
      <Posts posts={posts} />
      <Projects projects={projects} />
    </Layout>
  )
}

export const query = graphql`
  query Home {
    allGraphCmsPost(limit: 3, sort: { fields: publishedAt, order: DESC }) {
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
    allGraphCmsProject(limit: 2, sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        miniatura {
          url
        }
        preview
        repositorio
        slug
      }
    }
  }
`

export default IndexPage
