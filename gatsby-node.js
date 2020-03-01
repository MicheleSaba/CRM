const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const productPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  return graphql(
    `
      {
        allContentfulProduct {
          edges {
            node {
              slug
              companyName
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const products = result.data.allContentfulProduct.edges

    products.forEach((post, index) => {
      const previous =
        index === products.length - 1 ? null : products[index + 1].node
      const next = index === 0 ? null : products[index - 1].node

      createPage({
        path: post.node.slug,
        component: productPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })
  })
}
