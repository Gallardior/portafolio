/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query Seo {
    site {
	  siteMetadata {
		title
		titleTemplate
		description
		url
		image
		author
	  }
	}
  }
`
// description, lang, meta, title  <--- Props de componente SEO original

export const Seo = (props) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
	    title,
		titleTemplate,
		description,
		url,
		image,
		author
	  } = site.siteMetadata
		 
  const SEO = {
	  title: props.title || title,
	  description: props.description || description,
	  image: props.image ? props.image : `${url}${image}`,
	  url: `${url}${pathname}` 
    }
		 
  return (
    <Helmet title={SEO.title} titleTemplate={titleTemplate} >
	  <meta name="description" content={SEO.description} />
	  <meta name="image" content={SEO.image} />
	  <meta name="author" content={author} />
	  <link rel="canonical" href={SEO.url} />
	  
	  
	  <meta property="og:type" content="website" />
	  <meta property="og:url" content={SEO.url} />
	  <meta property="og:title" content={SEO.title} />
	  <meta property="og:description" content={SEO.description} />
	  <meta property="og:image" content={SEO.image} />

	  
	  <meta property="twitter:card" content="summary_large_image" />
	  <meta property="twitter:url" content={SEO.url} />
	  <meta property="twitter:title" content={SEO.title} />
	  <meta property="twitter:description" content={SEO.description} />
	  <meta property="twitter:image" content={SEO.image} />
	</Helmet>
  ) 
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool
}

Seo.defaultProps = {
  title: '',
  description: null,
  image: null,
  article: false
}

