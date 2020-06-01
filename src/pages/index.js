import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <div
      className="bg-fixed h-screen flex flex-col"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23313975' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundColor: "#181f58",
      }}
    >
      <ul class="flex pt-6 px-6 justify-end bg-transparent text-xl">
        <li class="mr-8 font-bold">
          <Link class="text-white text-gray-500 hover:text-white" to={"/blog"}>
            Blog
          </Link>
        </li>
        <li class="mr-8 font-bold">
          <Link
            class="text-white text-gray-500 hover:text-white"
            to={"#projects"}
          >
            Playground
          </Link>
        </li>
        <li class="mr-8 font-bold">
          <Link
            class="text-white text-gray-500 hover:text-white"
            to={"#contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex-initial w-full h-full px-8 lg:px-16 flex flex-col justify-center text-white">
        <h1 className="font-bold text-6xl lg:text-6xl">
          Hi, I'm Zakaria El Asri
        </h1>
        <p className="my-6 text-2xl lg:text-4xl">
          I enjoy building software and learning about different web
          technologies.
        </p>
      </div>
    </div>
    <div class="container mx-auto py-12 px-32">
      <h1 className="font-bold text-4xl text-center mb-6">About</h1>
      <p className="py-2">
        I'm a full-stack engineer and mobile tribe lead at Obytes. Currently
        working with Barmej team and helping my team produce good quality Apps.
      </p>
      <p className="py-2">
        I blog from time to time about my journey as a developer. My blog posts
        have had over 300k reads and have been featured on Dev’s top 7, Medium
        top 20 recommended stories.
      </p>
    </div>
  </div>
)

export default IndexPage
