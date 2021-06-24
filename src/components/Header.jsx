import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { TwitterIcon, FacebookIcon, GithubIcon, LinkedinIcon, BurguerMenu } from "./icons/icons"

const Logo = () => {
  return(
    <Link to="/">
	  <StaticImage width={160} alt="Logo" src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.15752-9/204414693_2301234183346502_6157045456519968775_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=IdIfVbSeuEIAX97YDOw&_nc_ht=scontent-mia3-1.xx&oh=f3df547e01a98171428ac13f640bf5c9&oe=60D55AAD" />
	</Link>
  )
}
// <StaticImage alt="Logo" src="https://midu.dev/logo.png" width={160}/>
const Social = () => {
  return(
    <>
	  <li>
	    <TwitterIcon url="https://twitter.com/gallardior"/>
	  </li>
	  <li>
	    <FacebookIcon url="https://www.facebook.com/gallardior/"/>
	  </li>
	  <li>
	    <LinkedinIcon url="https://www.linkedin.com/in/gallardior/"/>
	  </li>
	  <li>
	    <GithubIcon url="https://github.com/gallardior"/>
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
			  <Link to="/contact" >Contacto</Link>
			</li>
			<li>
			  <Link to="/about" >Sobre Mi</Link>
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
		  <Link to="/contact" >Contacto</Link>
		</li>
		<li>
		  <Link to="/about" >Sobre Mi</Link>
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
