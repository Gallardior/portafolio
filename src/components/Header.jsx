import * as React from "react"
import { Link } from "gatsby"

import { TwitterIcon, FacebookIcon, GithubIcon, LinkedinIcon, BurguerMenu } from "./icons/icons"

const Logo = () => {
  return(
    <Link to="/">
	  <img alt="Logo" src="https://midu.dev/logo.png" width="160"/>
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
		<div className="p-8">
		  <ul className="text-center space-y-8 font-bold font-black text-md">
	        <li>
			  <Link to="/page-2/" >Portafolio</Link>
			</li>
			<li>
			  <Link to="/page-2/" >Blog</Link>
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
		  <Link to="/page-2/" >Portafolio</Link>
		</li>
	    <li>
		  <Link to="/page-2/" >Blog</Link>
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
    <header className="p-4 w-full relative">
      <div className="lg:container mx-auto flex items-center justify-between">
		<Logo />
		<Nav />
	  </div>
    </header>
  )
}