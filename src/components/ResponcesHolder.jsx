import React, { useEffect } from 'react';
import styled from 'styled-components';
import NoResponcesYet from './NoResponcesYet';
import ResponceCard from './ResponceCard';
import { useResponcesContext, useResponcesUpdateContext } from '../ResponcesContext';
import useLocalStorage from '../hooks/useLocalStorage';

export default function ResponcesHolder() {
	const responces = useResponcesContext();

	const [, addAllResponces] = useResponcesUpdateContext();
	const [responcesLocalStorage, ] = useLocalStorage('responces',[]);

	useEffect(() => {
		addAllResponces(responcesLocalStorage);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Wrapper>
			<h2>Responces</h2>
			<Content>
				{responces.length === 0 ? (
					<NoResponcesYet />
				) : (
					responces
					.sort((a, b) => b.timestamp - a.timestamp)
					.map((responce) => <ResponceCard 
						key={responce.timestamp}
						prompt={responce.prompt} 
						reply={responce.reply}
						timestamp={responce.timestamp}
						engine={responce.engine}
						 />)
				)}
			</Content>
		</Wrapper>
	);
}

//Styles

const Wrapper = styled.div`
	margin: 3%;
	height: 100%;
`;

const Content = styled.div`
	padding-top: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
`;
