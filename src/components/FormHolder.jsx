import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

export default function FormHolder() {
	const promptTextRef = useRef();
	const [ isFetching, setIsFetching ] = useState(false);

	function fetchAiResponce(text) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
			}
		};
		const data = {
			prompt: text,
			temperature: 0.8,
			max_tokens: 64,
			top_p: 1.0,
			frequency_penalty: 0.0,
			presence_penalty: 0.0
		};

		async function fetchAsync() {
			// state set to loading
			setIsFetching(true);
			const responce = await axios.post(
				'https://api.openai.com/v1/engines/text-curie-001/completions',
				data,
				config
			);
			console.log(responce.data.choices[0].text);
			// state set to loaded
			setIsFetching(false);
			return responce;
		}
		fetchAsync();
	}

	return (
		<div>
			<h3>Form</h3>
			<FormWrapper>
				<label for="promptArea">Write your prompt here</label>
				<textarea ref={promptTextRef} name="promptArea" />
				<button
					onClick={() => {
						fetchAiResponce(promptTextRef.current.value);
					}}
				>
                    {isFetching ? <Spinner className='spinnerFineTune' animation="border" /> : 'Ask AI'}
				</button>
			</FormWrapper>
		</div>
	);
}

//Styles

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 10px;
	}

	textarea {
		color: var(--bs-white);
		background-color: var(--bs-gray-800);
	}

	button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 50px;
		margin-top: 30px;
		border-radius: 30px;
		border: none;
		background-color: #48d2e4;
		color: white;
		:hover {
			background-color: #42b5c5;
		}
		:active {
			background-color: #2e7386;
		}
	}
`;
