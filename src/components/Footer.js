import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between flex-col md:flex-row my-20">
      <div className="py-2 text-sm text-center">
        © 2020 •
        <a className="shadow-none" href="https://www.gatsbyjs.org">
          {' '}
          Built with Gatsby
        </a>
      </div>
      <div className="flex justify-center items-center text-xl">
        <a
          target="__blank"
          href="https://github.com/zakariaelas"
          className="shadow-none hover:text-indigo-600"
        >
          <FontAwesomeIcon className="ml-3" icon={faGithub} />
        </a>
        <a
          className="shadow-none hover:text-indigo-600"
          target="__blank"
          href="https://www.linkedin.com/in/zakaria-el-asri-850197169/"
        >
          <FontAwesomeIcon className="ml-3" icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
