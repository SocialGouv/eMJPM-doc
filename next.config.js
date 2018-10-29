const withCSS = require("@zeit/next-css");

const remark = {
  images: require("remark-images"),
  toc: require("remark-toc"),
  frontmatter: require("remark-frontmatter"),
  emoji: require("remark-emoji"),
  slug: require("remark-slug"),
  autolinkHeadings: require("remark-autolink-headings"),
  imagesSrc: remarkImagesSrc
};

const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [
      remark.toc,
      remark.frontmatter,
      remark.emoji,
      remark.autolinkHeadings,
      remark.slug,
      remark.imagesSrc
    ],
    heading: "Sommaire",
    type: "yaml",
    marker: "-"
  }
});

module.exports = withMDX(
  withCSS({
    assetPrefix: process.env.BASE_HREF ? process.env.BASE_HREF : "",
    pageExtensions: ["js", "md", "mdx"]
  })
);

//

function remarkImagesSrc() {
  return remarkImagesSrcTransformer;
}

function remarkImagesSrcTransformer(tree, file, done) {
  const visit = require("unist-util-visit");
  const { BASE_HREF } = process.env;

  if (!BASE_HREF) {
    done();
    return;
  }

  visit(tree, "image", visitor);
  done();

  function visitor(node) {
    var url = node.url;

    if (url && url.startsWith("/static/")) {
      node.url = BASE_HREF + node.url;
    }
  }
}
