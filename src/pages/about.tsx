import * as React from 'react'
import Layout from './components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      {/* <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p> */}
      <iframe src="https://embed.waze.com/iframe?
  zoom=12&lat=45.6906304&lon=-120.810983&pin=1"
  width="300" height="400"></iframe>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage