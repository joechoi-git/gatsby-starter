import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Homepage title" description="Homepage description" />
      <Header headerText="Hello Gatsby!" />
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}