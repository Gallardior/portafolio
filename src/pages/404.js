import * as React from "react"

import { Layout } from "../components"

const NotFoundPage = () => (
  <Layout>
    <div className="bg-gradient-to-r from-gray-500 to-gray-900 max-h-[80vh] min-h-[80vh] flex items-center justify-center">
		<div className="w-9/12 m-auto">
			<div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
				<div className="border-t border-gray-200 text-center pt-8">
					<h1 className="text-9xl font-bold text-gray-900">404</h1>
					<h1 className="text-4xl font-medium py-8">oops! Page not found</h1>
				</div>
			</div>
		</div>
	</div>
  </Layout>
)

export default NotFoundPage
