import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/blog`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1 className="text-indigo-800 dark:text-gray-100 text-5xl font-black font-sans">
            <Link className="shadow-none" to={`/blog`}>
              {title}
            </Link>
          </h1>
          <ThemeToggler>
            {({ theme, toggleTheme }) => {
              return (
                <button
                  className="text-4xl"
                  onClick={() => {
                    console.log(theme)
                    toggleTheme(theme === "light" ? "dark" : "light")
                  }}
                >
                  {theme === "light" ? "🌚" : "🌝"}
                </button>
              )
            }}
          </ThemeToggler>
        </>
      )
    } else {
      header = (
        <>
          <h3 className="text-indigo-800 text-2xl font-sans font-black">
            <Link className="shadow-none" to={`/blog`}>
              {title}
            </Link>
          </h3>
          <ThemeToggler>
            {({ theme, toggleTheme }) => {
              return (
                <button
                  className="text-3xl"
                  onClick={() => {
                    console.log(theme)
                    toggleTheme(theme === "light" ? "dark" : "light")
                  }}
                >
                  {theme === "light" ? "🌚" : "🌝"}
                </button>
              )
            }}
          </ThemeToggler>
        </>
      )
    }
    return (
      <div className="max-w-2xl mx-auto px-5 py-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-indigo-800 dark:text-gray-100 lg:text-2xl text-lg font-black font-sans">
            <Link className="shadow-none" to={`/blog`}>
              {title}
            </Link>
          </h1>
          <ul className="flex justify-end bg-transparent text-xl items-center">
            <li className="shadow-none lg:text-base text-sm text-indigo-800 hover:text-indigo-600 mb-0 mr-4">
              <Link className="shadow-none font-black font-sans" to={"/about"}>
                About
              </Link>
            </li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => {
                return (
                  <li
                    className="lg:text-2xl text-sm mb-0 mr-4 cursor-pointer"
                    onClick={() => {
                      console.log(theme)
                      toggleTheme(theme === "light" ? "dark" : "light")
                    }}
                  >
                    {theme === "light" ? "🌚" : "🌝"}
                  </li>
                )
              }}
            </ThemeToggler>
          </ul>
        </header>
        {/*<header className="flex justify-between items-center mb-10">
          {header}
    </header>*/}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className="text-indigo-600" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
