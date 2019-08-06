import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Cedar Rapids & Marion Resale" />
    <div
      class="container"
      style={{
        textAlign: "center",
        padding: "40px",
        minHeight: "650px",
      }}
    >
      <h1>
        An online community for Cedar Rapids residents to buy & sell used items,
        ask questions and get recommendations.
      </h1>
      <p>
        Cedar Rapids & Marion Resale is a semi-private community-driven project
        designed to connect local buyers and sellers in a safe and conventient
        way, through the Facebook Groups Platform.
      </p>
      <div class="row">
        <div class="col s12 l4">
          <p>30k Monthly Posts</p>
        </div>
        <div class="col s12 l4">
          <p>13K Daily Active Members</p>
        </div>
        <div class="col s12 l4">
          <p>43K Local Members</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
