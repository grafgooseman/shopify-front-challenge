import React, { useState, useRef, useEffect } from 'react';
import { useResponcesUpdateContext } from '../ResponcesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

export default function FormHolder() {
	const promptTextRef = useRef();
	const [ isFetching, setIsFetching ] = useState(false);

	//state with all the available engines
	const [ engines, setEngines ] = useState([]);
	const [ selectedEngine, setSelectedEngine ] = useState('text-curie-001');

	//context use (not in use at the moment)
	const [ addResponce ] = useResponcesUpdateContext();

	//local storage use
	const [ responces, setResponces ] = useLocalStorage('responces', []);

	//get the list of available AI engines
	useEffect(() => {
		fetchAvailableEngines();
	}, []);

	//all logic regarding implementing AI engines choices
	function engineLogic(responce) {
		setEngines([]);

		const engineObjects = responce.data.data;
		for (const engineObj of engineObjects) {
			if (engineObj.ready === true) {
				setEngines((prevEngArray) => [ ...prevEngArray, engineObj.id ]);
			}
		}
		console.log(engines);
	}

	function fetchAvailableEngines() {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
			}
		};
		async function fetchAsync() {
			const responce = await axios.get('https://api.openai.com/v1/engines', config);

			engineLogic(responce);
		}
		fetchAsync();
	}

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
			max_tokens: 128,
			top_p: 1.0,
			frequency_penalty: 0.0,
			presence_penalty: 0.0
		};

		async function fetchAsync() {
			// state set to loading
			setIsFetching(true);
			const responce = await axios.post(
				`https://api.openai.com/v1/engines/${selectedEngine}/completions`,
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
				timestamp: ts,
				engine: selectedEngine
			});

			// adding data to local storage
			setResponces([
				...responces,
				{
					prompt: text,
					reply: responce.data.choices[0].text,
					timestamp: ts,
					engine: selectedEngine
				}
			]);

			return responce;
		}
		fetchAsync();
	}

	return (
		<Wrapper>
			<h3>Form</h3>
			<FormWrapper>
				<label htmlFor="promptArea">Select AI model and ask it about anything</label>
				<textarea ref={promptTextRef} name="promptArea" />
				<ButtonWrapper>
					<DropdownWrapper>
						<Form.Select as="select" custom onChange={e=>setSelectedEngine(e.target.value)}>
							<option value="text-davinci-002">text-davinci-002</option>
							<option value="text-davinci-001">text-davinci-001</option>
							<option selected="selected" value="text-curie-001">
								text-curie-001
							</option>
							<option value="text-babbage-001">text-babbage-001</option>
							<option value="text-ada-001">text-ada-001</option>
						</Form.Select>
					</DropdownWrapper>

					<button
						onClick={() => {
							fetchAiResponce(promptTextRef.current.value);
						}}
					>
						{isFetching ? <Spinner className="spinnerFineTune" animation="border" /> : 'Ask AI'}
					</button>
				</ButtonWrapper>
			</FormWrapper>
		</Wrapper>
	);
}

//Styles

const Wrapper = styled.div`
	margin: 3%;
	h3 {
		
	}
	`;

const DropdownWrapper = styled.div`
	margin-top: 30px;
	align-self: center;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
`;

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
		padding-left: 20px;
		padding-right: 20px;
		:hover {
			background-color: #42b5c5;
		}
		:active {
			background-color: #2e7386;
		}
	}
`;
