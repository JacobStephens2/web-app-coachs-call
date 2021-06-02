import React from "react";
import { graphql } from "gatsby"

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LocationsMap from "../components/locationsMap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import AthleticVideo from "../videos/AdobeStock_397213891_Video_HD_Preview-field-wide-low-gradient.mp4"

const NamedPage = ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <Seo title={page.title} />

      <div style={{ height: 80, background: `var(--white)` }}></div>

      <div className={style.hero__container}>

        <video className={`${style.video}`} autoPlay playsInline muted loop>
          <source src={AthleticVideo} type="video/mp4" />
        </video>

        <div className={style.crestContainer}>
          <StaticImage
              className={style.crest}
              alt="Coach's Call logo crest"
              placeholder="blurred"
              src="../images/CoachsCall-Crest-Logo-icon-square.png"
              height={250}
          />
        </div>

        <h2 className={style.hero__text}>Glorifying God and Experiencing Joy Through&nbsp;Sports</h2>

      </div>

      <h2 className={style.center__text}>Locations</h2>
      
      <LocationsMap />

      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-track-119954823_Preview.jpeg"
          alt="Track"
          placeholder="blurred"
        />
        <h2 className={style.centered}><Link to="/about">About</Link></h2>
      </div>
      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-baseball_batting_spot-13720898_Preview.jpeg"
          alt="Baseball batting spot"
          placeholder="blurred"
        />
        <h2 className={style.centered}><Link to="/work">Work</Link></h2>
      </div>
      <div className={style.container}>
        <StaticImage 
          className={style.dark__overlay}
          src="../images/AdobeStock-high_school_fields-296321889_Preview.jpeg"
          alt="Baseball batting spot"
          placeholder="blurred"
        />
        <h2 className={style.centered}><Link to="/contact">Contact</Link></h2>
      </div>
    </Layout>
  )
}


export default NamedPage;

export const query = graphql`
  query($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
      author {
        node {
          name
        }
      }
      date
    }
  }
`
