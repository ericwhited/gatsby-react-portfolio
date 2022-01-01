import React from 'react'
import Layout from '../components/layout'
import ProjectListing from '../components/projectListing'



const DevProjects = () => (
    <Layout>
        {/* this is not the page name */}
        <ProjectListing type="Dev" />
    </Layout>
)

export default DevProjects;