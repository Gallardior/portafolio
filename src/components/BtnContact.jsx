import * as React from "react"
import { Link } from "gatsby"

export const BtnContact = ({url}) => {
	return(
		<Link to={url} className="w-[fit-content] cursor-pointer inline font-bold p-4 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 text-white rounded-md">
			CONTACTAME !
		</Link>
	)
}