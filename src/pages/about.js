import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo, ContactZone } from "../components"

const AboutPage = props => {

  return (
    <Layout>
      <Seo title="Sobre mi" />
	  <div className="grid grid-cols-1 md:grid-cols-2 min-w-full items-center mb-8">
		  <div className="p-8">
			<StaticImage src="../images/me.jpg" objectPosition="50% 0%" imgClassName="mx-auto" className="border border-gray-200 w-full shadow-lg rounded-md"/>
		  </div>
		  <div className="p-8 prose w-full max-w-full mb-8">
			<h2>¡Hola, soy Jesús Gallardo ! <span  role="img" aria-label="Emoji">👋</span></h2>
			<p>Soy un desarrollador que está interesado principalmente en tecnologías web, especialmente en el desarrollo de frontend.</p>		

			<p>Desarrollo mis habilidades como autodidacta con libros y plataformas online. Mi curiosidad me permite aprender rápidamente nuevas herramientas y tecnologías cuando sea necesario.</p>

			<p className="mb-0">Disfruto compartiendo mis conocimientos y ayudando a los demás cuando sea posible.</p>
		  </div>
	  </div>
	  
	  <div className="prose w-full max-w-full mb-8 p-8 text-center">
		<h2>Mi stack</h2>
		<p>Estoy enfocado en:</p>
		<div className="flex justify-center flex-wrap gap-8">
			<span className="text-[16px] font-bold">HTML</span>
			<span className="text-[16px] font-bold">CSS</span>
			<span className="text-[16px] font-bold">Bootstrap</span>
			<span className="text-[16px] font-bold">JavaScript</span>
			<span className="text-[16px] font-bold">ReactJS</span>
			<span className="text-[16px] font-bold">GatbyJS</span>
			<span className="text-[16px] font-bold">Git</span>
		</div>
	  </div>
	  
	  <ContactZone />
	  
    </Layout>
  )
}

export default AboutPage
