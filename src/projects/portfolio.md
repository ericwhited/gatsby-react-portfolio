---
type: "Dev"
slug: "/projects/portfolio"
title: "Portfolio"
subtitle: "Portfolio site made with React & Gatsby"
featuredImage: icon-512x512.png
githubLink: "https://github.com/ericwhited/gatsby-react-portfolio"

---

The portfolio site you're currently viewing was developed with React and Gatsby. Gatsby is an open-source framework and static site generator that combines functionality from React, GraphQL and Webpack into a single tool for building static websites and apps. 

Each project page starts as a markdown file within the project filesystem. Inside of that file a slug, title, subtitle, featured image and link are provided with frontmatter. The content for the project is taken from the rest of the mark down file. I then use graphQL and Gatsby's other internal plugins to query each of those files and dynamically create pages for each one.

The projects you see listed on the Project Listing page are populated by using GraohQL. I query each markdown file within the projects folder and use that information to create a list of each project. Each project contains a title, subtitle, slig and featured image like its respective page. 
