import React from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { DiscussionEmbed } from 'disqus-react';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { title } = data.site.siteMetadata;
  const { previous, next, slug } = pageContext;
  console.log('process', process.env.GATSBY_DISQUS_NAME);
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: slug,
      title,
    },
  };
  console.log(disqusConfig);
  return (
    <Layout title={title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 className="text-5xl font-black mt-8 mb-0">
            {post.frontmatter.title}
          </h1>
          <p className="text-sm leading-loose mb-8 ">
            {post.frontmatter.date}
          </p>
        </header>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr className="h-px mb-8" />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul className="flex flex-wrap justify-between mb-8">
          <li>
            {previous && (
              <Link
                className="text-indigo-600"
                to={previous.fields.slug}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                className="text-indigo-600"
                to={next.fields.slug}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
