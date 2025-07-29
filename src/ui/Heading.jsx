import styled, { css } from "styled-components";

const alignCenter = css`
  text-align: center;
`;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
    `} 
    
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 400;
    `}
    ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600
      text-align:center;
    `}
    
    line-height:1.4 /* font-size: 30px;
  font-weight: 600;
  background-color: var(--color-green-700);
  ${alignCenter} */
`;

export default Heading;
