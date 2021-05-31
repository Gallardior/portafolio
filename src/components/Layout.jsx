import * as React from "react"

import { Header, Footer } from "../components"

export const Layout = ({ children }) => {
  return (
    <> 
      <Header />

      {children}
		
      <Footer />  
    </>
  )
}

//export default Layout
