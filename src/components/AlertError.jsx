import * as React from "react"

export const AlertError = ({text, display}) => {
	
	return(
		<div className={`${display} mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`} role="alert">
		  <span>{text}</span>
		</div>
	)
}