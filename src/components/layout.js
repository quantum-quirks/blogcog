import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Scalabli &bull; <a href="https://ko-fi.com/scalabli">Donate</a> &bull; Crafted with <span role="img" aria-label="love">❤️</span> by <a href="https://twitter.com/gerrishon_s">Gerrishon</a></p>
      </footer>
    </div>
  )
}
