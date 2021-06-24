import * as React from "react"
import { BtnContact } from "./index"

export const ContactZone = () => {
	return(
		<div className="shadow-md border border-gray-200 w-full max-w-[85%] mx-auto mb-8 p-8 text-center bg-gray-100 rounded-md">
			<div className="prose min-w-full">
				<h2>¿Quieres hablar?</h2>
				
				<p>
					Si desea ponerse en contacto o hablar sobre un proyecto, no dude en contactarme.
				</p>
				<p>
					También puedes enviarme un DM en las redes sociales.
				</p>
				<p>.</p>
			</div>
			
			<BtnContact url="/contact"/>
		</div>
	)
}