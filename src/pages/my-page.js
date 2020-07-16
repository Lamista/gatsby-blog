import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const myPage = () => (
    <Layout>
        <h1>Howdy</h1>
        <p>Welcome to my page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default myPage
