import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Button from "./ui/Button";
import Input from "./ui/input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Just for a while</H1>
        <Button onClick={() => alert("when i got to heaven")}>Dear</Button>
        <Button onClick={() => alert("summertimes madness")}>Lord</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
