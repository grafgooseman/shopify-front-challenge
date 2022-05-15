import React from 'react';
import styled from 'styled-components';
import NoResponcesYet from './NoResponcesYet';
import ResponceCard from './ResponceCard';
import { useResponcesContext } from '../ResponcesContext';

export default function ResponcesHolder() {
	const responces = useResponcesContext();
	console.log(responces);
	return (
		<Wrapper>
			<h3>Responces</h3>
			<Content>
				{responces.length === 0 ? (
					<NoResponcesYet />
				) : (
					responces.map((responce, index) => <ResponceCard 
						key={responce.timestamp}
						prompt={responce.prompt} 
						reply={responce.reply}
						timestamp={responce.timestamp}
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
