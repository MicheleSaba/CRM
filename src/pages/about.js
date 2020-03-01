import React from "react"

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
        color: "#333",
      }}
    >
      <h2>Above all else, we are a community</h2>
      <h1>
        An online community for Cedar Rapids residents to buy & sell used items,
        ask community related questions and get recommendations for local
        products and services.
      </h1>
      <p>
        Cedar Rapids & Marion Resale is a invite-only community-driven project
        designed to connect local buyers and sellers in a safe and conventient
        way, through the Facebook Groups Platform.
      </p>
      <div class="row">
        <div class="col s12 l4">
          <p className="purple-text">30k </p>
          <p>Monthly Posts</p>
        </div>
        <div class="col s12 l4">
          <p className="purple-text">13K </p>
          <p>Daily Active Members</p>
        </div>
        <div class="col s12 l4">
          <p className="purple-text">43K </p>
          <p>Local Members</p>
        </div>
      </div>
      <div
        style={{
          margin: "auto",
        }}
        class="fb-group"
        data-href="https://www.facebook.com/groups/cedarrapidsforsale"
        data-width="300"
        data-show-social-context="true"
        data-show-metadata="false"
      ></div>
    </div>
  </Layout>
)

export default SecondPage
