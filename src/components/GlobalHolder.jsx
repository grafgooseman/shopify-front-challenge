import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import FormHolder from './FormHolder';
import ResponcesHolder from './ResponcesHolder';
import styled from 'styled-components';

export default function GlobalHolder() {


	return (
		<Wrapper>
			<Container className="fullHeight">
				<Row>
					<Col>
						<h1>ASK AI</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormHolder/>
					</Col>
					<Col>
						<ResponcesHolder/>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	font-family: 'PublicPixel', Courier, monospace;

	h1 {
			margin-left: 3%;
			margin-top: 1%;
			margin-bottom: 1%;
			color: #34a89c;
			animation: colorChange 3s infinite;
	}
	@keyframes colorChange {
		from{
			filter: hue-rotate(360deg);
		}
		to{
			transform: rotate(0deg);
		}
	}

	.fullHeight {
		height: 100vh;
	}
`;
