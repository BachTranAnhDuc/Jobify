import React from "react";
import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;
const ButtonSecond = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;

const App = () => {
  return (
    <div className="App">
      {/* <h1>Jobify</h1>
      <Button>Click me</Button> */}
      <Landing></Landing>
    </div>
  );
};

export default App;
