import * as React from "react"
import { Link } from "gatsby"

export const PostCard = ({post}) => {
	// const image = post.miniatura ? post.miniatura.url : post.coverImage.url
	const image = post.coverImage.url
	return(
		<div className="rounded-md border border-gray-200 pb-[24px] overflow-hidden	shadow-md">
			<Link to={`/blog/${post.slug}`}>
				<img src={image} alt={post.title} className="w-full h-[180px] max-h-[180px] object-cover mb-[18px]" />
				<div className="px-4">
					<h3 className="mb-4 font-bold text-[20px]">{post.title}</h3>
					<p className="text-[14px] mb-[22px] text-[#2D3748]">{post.description}</p>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.date}</span>
				</div>
			</Link>
		</div>
	)
}
