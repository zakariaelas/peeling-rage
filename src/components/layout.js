import React from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import EmojiToggler from './EmojiToggler';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div className="max-w-2xl mx-auto px-5 py-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-indigo-600 hover:text-indigo-500 dark:text-gray-100 lg:text-2xl text-lg font-black font-sans">
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
        <ul className="flex justify-end bg-transparent text-xl items-center">
          <li className="shadow-none lg:text-base text-sm text-indigo-600 hover:text-indigo-500 mb-0 mr-4">
            <Link
              className="shadow-none font-black font-sans"
              to={'/about'}
            >
              About
            </Link>
          </li>
          <ThemeToggler>{EmojiToggler}</ThemeToggler>
        </ul>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
