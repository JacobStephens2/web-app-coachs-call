import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image' // highlight-line
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoImages = (props) => {
	if (props.image === '') {
		return (
			''
		);
	} else {
		return (
			<span>
				<Row>
					<Col>
					<GatsbyImage
						className="drop-shadow"
						image={props.image}
						alt={props.imageAlt}
						/>
					</Col>
					<Col>
					<GatsbyImage
						className="drop-shadow"
						image={props.imageTwo}
						alt={props.imageAltTwo}
					/>
					</Col>
				</Row>
			</span>
		);
	}
}

export default TwoImages;