import React from 'react';
import GlebalHolder from './components/GlobalHolder';
import styled from 'styled-components';
import { ResponcesProvider } from './ResponcesContext';

function App() {
	return (
		<ResponcesProvider>
			<Wrapper>
				<GlebalHolder />
			</Wrapper>
		</ResponcesProvider>
	);
}

export default App;

//Styles

const Wrapper = styled.div`
	background-color: var(--bs-gray-900);
	color: var(--bs-white);
	height: 100vh;
`;
