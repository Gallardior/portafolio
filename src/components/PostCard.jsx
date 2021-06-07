import * as React from "react"
import { Link } from "gatsby"

export const PostCard = ({post}) => {
	console.log(post)
	return(
		<div className="rounded-md border border-gray-200 pb-[24px] overflow-hidden	shadow-md">
			<Link to={`/blog/${post.slug}`}>
				<img src={post.coverImage.url} alt={post.title} className="w-full h-[180px] max-h-[180px] object-cover mb-[18px]"/>
				<div className="px-4">
					<h3 className="mb-4 font-bold text-[20px]">{post.title}</h3>
					<p className="text-[14px] mb-[22px] text-[#2D3748]">{post.description}</p>
					<small className="text-[14px] text-[#2D3748]">{post.date}</small>
				</div>
			</Link>
		</div>
	)
}
