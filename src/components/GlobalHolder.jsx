import React, { useState, useEffect } from 'react';

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

	// getting the reply from the FormHolder and passing it to the ResponcesHolder
	const [ replyData, setReplyData ] = useState({
		prompt: '',
		reply: '',
		timestamp: ''
	});
	const [ repliesArray, setRepliesArray ] = useState([]);

	useEffect(() => {
        //look throw replys array for the same timestamp
		//if so dont add it to the array
		//if not add it to the array (triggering the props to update)
		for(let oldReply of repliesArray) {
			if(oldReply.timestamp === replyData.timestamp) {
				return;
			}
		}
		setRepliesArray([ ...repliesArray, replyData ]);
    },[replyData]); // eslint-disable-line react-hooks/exhaustive-deps

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
						<FormHolder setReplyData={setReplyData} />
					</Col>
					<Col>
						<ResponcesHolder repliesArray={repliesArray}/>
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
