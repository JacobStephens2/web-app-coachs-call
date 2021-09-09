import React from "react";

import * as style from "./single.module.css"
import "./style.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import AthleticVideo from "../videos/AdobeStock_athletic-video-montage.mp4"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const NamedPage = ({ data }) => {
  return (
	<Layout>
	  <Seo title="Home" />

		<video className={`${style.video}`} autoPlay playsInline muted loop>
			<source src={AthleticVideo} type="video/mp4" />
		</video>
		<div className={style.gridOverVideo}>
			<Container>
				<Row>
					<Col className="order-lg-2" lg={4}>
						<StaticImage
							alt="Coach's Call logo crest"
							placeholder="blurred"
							loading="eager"
							src="../images/CoachsCall-Crest-Logo-icon-square.png"
							height="320"
						/>
					</Col>
					<Col className="order-lg-1 introText" lg={8}>
						<h2>Deepening coach impact through one-on-one mentoring, consulting, and&nbsp;seminars.</h2>
						
						<p className="subhead">Founder and coach John Levis has 25 years experience in coaching, young life Ministry, and college&nbsp;administration.</p>
						<p className="subhead tagline">Glorifying God and Experiencing Joy Through Sports</p>
					</Col>
				</Row>
			</Container>
		</div>
			
		<Row>
			<Col className={style.workCard} lg={4}>
				<Container className="darkBackground">
					<h2><Link to="/work">Work</Link></h2>
					<p>The mission and vision of Coach’s Call will be performed in two different types of delivery- professional development seminars and one on one or small group&nbsp;sessions.</p>
				</Container>
			</Col>
			<Col className={style.aboutCard} lg={4}>
				<Container>
					<h2><Link to="/about">About</Link></h2>
					<p>The mission and vision of Coach’s Call will be performed in two different types of delivery- professional development seminars and one on one or small group&nbsp;sessions.</p>
				</Container>
			</Col>
			<Col className={style.contactCard} lg={4}>
				<Container>
					<h2><Link to="/contact">Contact</Link></h2>
					<p>The mission and vision of Coach’s Call will be performed in two different types of delivery- professional development seminars and one on one or small group&nbsp;sessions.</p>
				</Container>
			</Col>
		</Row>

	</Layout>
  )
}


export default NamedPage;
