import React, { useState, useRef } from 'react';
import { useResponcesUpdateContext } from '../ResponcesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

export default function FormHolder() {
	const promptTextRef = useRef();
	const [ isFetching, setIsFetching ] = useState(false);

	//context use (not in use at the moment)
	const [addResponce, ] = useResponcesUpdateContext();

	//local storage use
	const [ responces, setResponces ] = useLocalStorage("responces", []);


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
			// state set to loaded
			setIsFetching(false);
            let ts = Date.now();
			
			//sending data throw context (not in use)
			addResponce({
                prompt: text,
                reply: responce.data.choices[0].text,
                timestamp: ts
            });

			// adding data to local storage
			setResponces([ ...responces, {
				prompt: text,
				reply: responce.data.choices[0].text,
				timestamp: ts
			} ]);

			return responce;
		}
		fetchAsync();
	}

	return (
		<Wrapper>
			<h3>Form</h3>
			<FormWrapper>
				<label htmlFor="promptArea">Write your prompt here</label>
				<textarea ref={promptTextRef} name="promptArea" />
				<button
					onClick={() => {
						fetchAiResponce(promptTextRef.current.value);
					}}
				>
					{isFetching ? <Spinner className="spinnerFineTune" animation="border" /> : 'Ask AI'}
				</button>
			</FormWrapper>
		</Wrapper>
	);
}

//Styles

const Wrapper = styled.div`margin: 3%;`;

const FormWrapper = styled.div`
	margin: 5%;
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 10px;
	}

	textarea {
		color: var(--bs-white);
		background-color: var(--bs-gray-800);
		min-height: 300px;
		padding: 10px;
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
