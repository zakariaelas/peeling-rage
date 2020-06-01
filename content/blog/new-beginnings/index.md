---
title: New Beginnings
date: "2015-05-28T22:40:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
right at the coast of the Semantics, a large language ocean. A small river named
Duden flows by their place and supplies it with the necessary regelialia.

## On deer horse aboard tritely yikes and much

The Big Oxmox advised her not to do so, because there were thousands of bad
Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
didn’t listen. She packed her seven versalia, put her initial into the belt and
made herself on the way.

- This however showed weasel
- Well uncritical so misled
  - this is very interesting
- Goodness much until that fluid owl

When she reached the first hills of the **Italic Mountains**, she had a last
view back on the skyline of her hometown _Bookmarksgrove_, the headline of
[Alphabet Village](http://google.com) and the subline of her own road, the Line
Lane. Pityful a rhetoric question ran over her cheek, then she continued her
way. On her way she met a copy.

```jsx
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
```

### Overlaid the jeepers uselessly much excluding

But nothing the copy said could convince her and so it didn’t take long until a
few insidious Copy Writers ambushed her, made her drunk with
[Longe and Parole](http://google.com) and dragged her into their agency, where
they abused her for their projects again and again. And if she hasn’t been
rewritten, then they are still using her.

> Far far away, behind the word mountains, far from the countries Vokalia and
> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
> right at the coast of the Semantics, a large language ocean.

It is a paradisematic country, in which roasted parts of sentences fly into your
mouth. Even the all-powerful Pointing has no control about the blind texts it is
an almost unorthographic life One day however a small line of blind text by the
name of Lorem Ipsum decided to leave for the far World of Grammar.

### According a funnily until pre-set or arrogant well cheerful

The Big Oxmox advised her not to do so, because there were thousands of bad
Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
didn’t listen. She packed her seven versalia, put her initial into the belt and
made herself on the way.

1.  So baboon this
2.  Mounted militant weasel gregariously admonishingly straightly hey
3.  Dear foresaw hungry and much some overhung
4.  Rash opossum less because less some amid besides yikes jeepers frenetic
    impassive fruitlessly shut

When she reached the first hills of the Italic Mountains, she had a last view
back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet
Village and the subline of her own road, the Line Lane. Pityful a rhetoric
question ran over her cheek, then she continued her way. On her way she met a
copy.

> The copy warned the Little Blind Text, that where it came from it would have
> been rewritten a thousand times and everything that was left from its origin
> would be the word "and" and the Little Blind Text should turn around and
> return to its own, safe country.

But nothing the copy said could convince her and so it didn’t take long until a
few insidious Copy Writers ambushed her, made her drunk with Longe and Parole
and dragged her into their agency, where they abused her for their projects
again and again. And if she hasn’t been rewritten, then they are still using
her. Far far away, behind the word mountains, far from the countries Vokalia and
Consonantia, there live the blind texts.

#### Silent delightfully including because before one up barring chameleon

Separated they live in Bookmarksgrove right at the coast of the Semantics, a
large language ocean. A small river named Duden flows by their place and
supplies it with the necessary regelialia. It is a paradisematic country, in
which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an
almost unorthographic life One day however a small line of blind text by the
name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox
advised her not to do so, because there were thousands of bad Commas, wild
Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.

##### Wherever far wow thus a squirrel raccoon jeez jaguar this from along

She packed her seven versalia, put her initial into the belt and made herself on
the way. When she reached the first hills of the Italic Mountains, she had a
last view back on the skyline of her hometown Bookmarksgrove, the headline of
Alphabet Village and the subline of her own road, the Line Lane. Pityful a
rhetoric question ran over her cheek, then she continued her way. On her way she
met a copy.

###### Slapped cozy a that lightheartedly and far

The copy warned the Little Blind Text, that where it came from it would have
been rewritten a thousand times and everything that was left from its origin
would be the word "and" and the Little Blind Text should turn around and return
to its own, safe country. But nothing the copy said could convince her and so it
didn’t take long until a few insidious Copy Writers ambushed her, made her drunk
with Longe and Parole and dragged her into their agency, where they abused her
for their projects again and again.

```

```
