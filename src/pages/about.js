import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Image from "gatsby-image"

export const pageQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/prof-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          github
          linkedin
        }
      }
    }
  }
`

const About = ({ data, location }) => {
  const { author, social, title } = data.site.siteMetadata
  return (
    <Layout location={location} title={title}>
      <SEO tite="About me" />
      <div className="mb-8">
        <div className="flex flex-col justify-center items-center mb-16 pt-8">
          <Image
            className="mb-3 rounded-full"
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
          />
          <h3 className="lg:text-4xl text-3xl font-sans font-extrabold mb-3">
            Zakaria El Asri
          </h3>
          <p className="lg:text-xl text-base font-sans font-semibold mb-3">
            Senior computer science student
          </p>
          <div className="flex justify-center items-center">
            <a
              target="__blank"
              href="https://github.com/zakariaelas"
              className="shadow-none"
            >
              <FontAwesomeIcon className="ml-3 text-3xl" icon={faGithub} />
            </a>
            <a
              className="shadow-none hover:text-indigo-800"
              target="__blank"
              href="https://www.linkedin.com/in/zakaria-el-asri-850197169/"
            >
              <FontAwesomeIcon className="ml-3 text-3xl" icon={faLinkedin} />
            </a>
          </div>
        </div>
        <p className="mb-4">
          Hello, my name is Zakaria El Asri, and I am a senior computer science
          student.
        </p>
        <p className="mb-4">
          I enjoy building interfaces, architecting solutions, and building
          products. I like being exposed to different technologies and to read
          about different ways of solving problems. I also take pleasure in
          demistifying abstractions and understanding how things work under the
          hood. Although I usually fail at the latter taks, I enjoy trying.
        </p>
        <p className="mb-4">
          Through this personal blog/website/whatever, I want to document my
          understanding of different topics I come across when learning and
          building software. This project is motivated by the idea that the best
          way to understand something is to teach it. So long as procrastination
          does not get in the way ... this should be a fun challenge
        </p>
      </div>
    </Layout>
  )
}

export default About
