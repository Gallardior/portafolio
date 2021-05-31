import * as React from "react"
import { TwitterIcon, FacebookIcon, GithubIcon, LinkedinIcon } from "./icons/icons"

export const Footer = () => {
  return(
    <footer className="text-md p-4 text-center bg-gray-500 bg-opacity-5">
	  <div className="flex justify-center mb-4 space-x-8">
	    <TwitterIcon url="https://twitter.com/gallardior"/>
		<FacebookIcon url="#"/>
		<GithubIcon url="#"/>
		<LinkedinIcon url="#"/>
	  </div>
      <div className="lg:container mx-auto">
		<p> © 2021 <strong>Jesus Gallardo</strong> - Todos los derechos reservados.</p>
	  </div>
    </footer>
  )
}
