import React from 'react';
import styled from 'styled-components';

export default function ResponceCard( {prompt, reply, timestamp, engine} ) {
	return (
		<Wrapper>
			<h3 className='humanHeader'>Meaty Human Prompt:</h3>
			<p>{prompt}</p>
			<h3 className='aiheader'><span>{engine}</span> reply:</h3>
			<p>{reply}</p>
		</Wrapper>
	);
}

//Styles

const Wrapper = styled.div`
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    /* overflow-wrap: break-word; */
    padding: calc(3% + 10px);
	margin: 5px;
	min-height: 150px;
	width: 100%;
	background-color: #343a40;
	border-radius: 30px;

	span {
		animation: colorChange 5s infinite;
	}
	@keyframes colorChange {
		from{
			filter: hue-rotate(360deg);
		}
		to{
			transform: rotate(0deg);
		}
	}

    .aiheader, .humanHeader {
        font-size: 0.7rem;
        color: #34a89c;
    }
	p {
		line-height: 1.7;
		font-size: 0.6rem;
	}
`;
