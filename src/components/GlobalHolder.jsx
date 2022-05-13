import React, { useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import FormHolder from './FormHolder';
import ResponcesHolder from './ResponcesHolder';
import styled from 'styled-components';

export default function GlobalHolder() {
	// const contentRowRef = useRef();

	// useEffect(() => {
	// 	console.log(contentRowRef.current);
    //     const el = contentRowRef.current;
    //     const rect = el.getBoundingClientRect();
    //     el.style.height = `${window.innerHeight - rect.x}px`;

	// }, );

	return (
		<Wrapper>
			<header>
				<h1>ASK AI</h1>
			</header>
			<div id='formHolder'>
				<FormHolder/>
			</div>
			<div id='responcesHolder'>
				<ResponcesHolder />
			</div>
			<footer>

			</footer>


			{/* <Container className="fullHeight">
				<Row>
					<Col>
						<h1>ASK AI</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormHolder />
					</Col>
					<Col>
						<ResponcesHolder />
					</Col>
				</Row>
			</Container> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	font-family: 'PublicPixel', Courier, monospace;

	display: grid;
	height: 100vh;
	gap: 2rem;
	grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
	grid-template-rows: 0.1fr 1fr 0.1fr;
	grid-template-areas:
		'header header header header'
		'. form responces .'
		'footer footer footer footer';

	header {
		display: flex;
		align-items: center;
		grid-area: header;
		background-color: var(--bs-gray-800);
		h1 {
			margin-left: 6%;
		}
	}
	footer {
		grid-area: footer;
	}
	#formHolder{
		grid-area: form;
	}
	#responcesHolder{
		grid-area: responces;
	}

	.fullHeight {
		height: 100vh;
	}
`;
