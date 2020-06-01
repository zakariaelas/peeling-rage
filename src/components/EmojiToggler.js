import React from "react"

const EmojiToggler = ({ theme, toggleTheme }) => {
  return (
    <li
      className="lg:text-2xl text-sm mb-0 mr-4 cursor-pointer"
      onClick={() => {
        toggleTheme(theme === "light" ? "dark" : "light")
      }}
    >
      {theme === "light" ? "🌚" : "🌝"}
    </li>
  )
}

export default EmojiToggler
