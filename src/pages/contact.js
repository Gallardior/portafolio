import * as React from "react"
import { Layout, Seo, ContactForm } from "../components"


const ContactPage = props => {

  return (
    <Layout>
      <Seo title="Contact" />
	  <div className="grid grid-cols-1 md:grid-cols-2 min-w-full">
		<div className="prose p-8">
			<h2 className="font-bold">¡Hablemos!</h2>
			<p>
				Si tienes algún proyecto en mente que podría necesitar
				mis servicios de desarrollo Front-End,
				no dudes en ponerte en contacto conmigo.
			</p>
			<p>
				Para cualquier consulta sobre trabajos o colaboraciones,
				puedes ponerte en contacto conmigo usando este formulario
				o enviándome un email a: <a className="font-bold" href="mailto:jjgallardior@gmail.com">jjgallardior@gmail.com</a>
			</p>
			<hr/>
			<h3 className="font-bold">Para Preguntas Rápidas</h3>
			<p>
				Para cualquier pregunta no relacionada con trabajos
				o para saludar, puedes <a className="font-bold" rel="noreferrer" href="https://twitter.com/gallardior" target="_blank">enviarme un tweet</a>.
			</p>
		</div>
		<div className="p-8 grid items-center">
			<ContactForm />
		</div>
	  </div>
    </Layout>
  )
}

export default ContactPage
