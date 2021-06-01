import * as React from "react"

import { Header, Footer } from "../components"

export const Layout = ({ children }) => {
  return (
    <> 
      <Header />

      <div className="lg:container mx-auto px-4">
	    {children}
	  </div>
		
      <Footer />  
    </>
  )
}

//export default Layout
