import React from "react";
import GlebalHolder from "./components/GlobalHolder";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <GlebalHolder/>
    </Wrapper>
  );
}

export default App;

//Styles

const Wrapper = styled.div`
  background-color: var(--bs-gray-900);
  color: var(--bs-white);
  height: 100vh;
`;
