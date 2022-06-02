import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

function AboutPage() {
  return (
    <Layout pageTitle="About me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202001/01/f86957cb-ee94-4611-bc81-a5478ca91f92.jpg"
      />
    </Layout>
  );
}

export default AboutPage;
