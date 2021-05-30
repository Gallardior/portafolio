import * as React from "react"

export const Layout = ({ children }) => {
  return (
    <> 
      <header className="bg-blue-500 text-white p-5">
        <h2>Este es mi header</h2>
      </header>

      {children}

      <footer className="bg-blue-500 text-white p-5">
        <h2>Este es mi footer</h2>
      </footer>
    </>
  )
}

//export default Layout
