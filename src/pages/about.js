import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo, BtnContact } from "../components"


const AboutPage = props => {

  return (
    <Layout>
      <Seo title="Sobre mi" />
	  <div className="prose w-full max-w-full mb-8">
		<h2>Sobre mi</h2>
		<p>
			¡Hola, soy Jesús <span  role="img" aria-label="Emoji">👋</span>
		</p>
		<p>
			En primer lugar, gracias por visitar mi sitio web personal. <span  role="img" aria-label="Emoji">❤️</span>
		</p>
		<p>
			Soy un desarrollador de Venezuela que está interesado principalmente en tecnologías web, especialmente en el desarrollo de frontend.
		</p>
		<p>
			Desarrollo mis habilidades como autodidacta con libros y plataformas online.
			Mi curiosidad me permite aprender rápidamente nuevas herramientas y tecnologías cuando sea necesario.
		</p>
		<p>
			Disfruto compartiendo mis conocimientos y ayudando a los demás cuando sea posible.
			Todavía soy un novato en codificación, pero creo que la experiencia impulsa el aprendizaje y apenas estoy comenzando este viaje.
		</p>
		<p>
			Por último, pero no menos importante, me gusta la sencillez.
		</p>
		<h2>Mi stack</h2>
		<p>Estoy enfocado en:</p>
		<ul>
			<li>
				<h4 className="text-[16px]">HTML</h4>
			</li>
			<li>
				<h4 className="text-[16px]">CSS</h4>
			</li>
			<li>
				<h4 className="text-[16px]">Bootstrap</h4>
			</li>
			<li>
				<h4 className="text-[16px]">JavaScript</h4>
			</li>
			<li>
				<h4 className="text-[16px]">ReactJS</h4>
			</li>
			<li>
				<h4 className="text-[16px]">GatbyJS</h4>
			</li>
			<li>
				<h4 className="text-[16px]">Git</h4>
			</li>
		</ul>
		<h2>¿Quieres hablar?</h2>
		<p>
			Si desea ponerse en contacto o hablar sobre un proyecto, no dude en contactarme.
		</p>
		<p>
			También puedes enviarme un DM en las redes sociales.
		</p>
	  </div>
	  <BtnContact url="/contact"/>
    </Layout>
  )
}

export default AboutPage
