import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Button from "./ui/Button";
import Input from "./ui/input";

import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Just for a while</Heading>
        <Heading as="h2">Just for a while</Heading>
        <Heading as="h3">Just for a while</Heading>
        <Button onClick={() => alert("when i got to heaven")}>Dear</Button>
        <Button onClick={() => alert("summertimes madness")}>Lord</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
