import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { TwitterIcon, FacebookIcon, GithubIcon, LinkedinIcon, BurguerMenu } from "./icons/icons"

const Logo = () => {
  return(
    <Link to="/">
	  <StaticImage alt="Logo" src="https://midu.dev/logo.png" width={160}/>
	</Link>
  )
}

const Social = () => {
  return(
    <>
	  <li>
	    <TwitterIcon url="https://twitter.com/gallardior"/>
	  </li>
	  <li>
	    <FacebookIcon url="#"/>
	  </li>
	  <li>
	    <LinkedinIcon url="#"/>
	  </li>
	  <li>
	    <GithubIcon url="#"/>
	  </li>
    </>
  )
}

const Nav = () => {
  return(
    <nav>
	  {/* MENU MOVIL */}
	  <BurguerMenu children={
		<div>
		  <ul className="text-center space-y-8 font-bold text-lg text-white">
	        <li>
			  <Link to="/portfolio" >Portafolio</Link>
			</li>
			<li>
			  <Link to="/blog" >Blog</Link>
			</li>
			<li>
			  <Link to="/page-2/" >Contacto</Link>
			</li>
			<li>
			  <Link to="/page-2/" >Sobre Mi</Link>
			</li>
			<Social />
	      </ul>
		</div>  
	  }/>
	  
	  {/* MENU DEKSTOP */}
	  <ul className="space-x-8 hidden lg:flex items-center font-bold font-black text-md">
	    <li>
		  <Link to="/portfolio" >Portafolio</Link>
		</li>
	    <li>
		  <Link to="/blog" >Blog</Link>
		</li>
		<li>
		  <Link to="/page-2/" >Contacto</Link>
		</li>
		<li>
		  <Link to="/page-2/" >Sobre Mi</Link>
		</li>
		<Social />
	  </ul>
	</nav>
  )  
}

export const Header = () => {
  return(
    <header className="p-4 w-full relative border-b border-gray-200 shadow-md mb-8 fixed z-[5] bg-white">
      <div className="lg:container mx-auto flex items-center justify-between">
		<Logo />
		<Nav />
	  </div>
    </header>
  )
}
