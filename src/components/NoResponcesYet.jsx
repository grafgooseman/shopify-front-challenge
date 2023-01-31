import React from 'react'
import styled from 'styled-components'

export default function NoResponcesYet() {
  return (
    <Wrapper>
        <div>
            Ask AI to get your first response, see how different models respond to your questions.
        </div>
    </Wrapper>
  )
}

//Styles

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;
