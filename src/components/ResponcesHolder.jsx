import React from 'react'
import styled from 'styled-components'
import NoResponcesYet from './NoResponcesYet';

export default function ResponcesHolder() {
  return (
    <Wrapper>
        <h3>Responces</h3>
        <Content>
            <NoResponcesYet/>
        </Content>
    </Wrapper>
  )
}

//Styles

const Wrapper = styled.div`
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
`;