import styled from "styled-components";
import { Button, Segment } from 'semantic-ui-react'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledButton = styled(Button)({
    color: 'red!important',
    backgroundColor: 'green!important'
});

const StyledSegment = styled(Segment)({
    color: '#29abe0!important',
    backgroundColor: '#7a4370!important'
});

const Test = () => {
  return (
    <>
      <Title>Boton con Semantic UI</Title>
      <Button content='Boton 1' primary />
      <Title>Boton con Semantic UI + Styled Components</Title>
      <StyledButton content='Boton 2' primary />
      <Title>Segment con Semantic UI</Title>
      <Segment>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis ipsum modi dolorum tempore, saepe odit eius sequi rem consequatur, id hic iste porro dolore et, debitis eum nesciunt aperiam.</Segment>
      <Title>Segment con Semantic UI + Styled Components</Title>
      <StyledSegment>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nobis ipsum modi dolorum tempore, saepe odit eius sequi rem consequatur, id hic iste porro dolore et, debitis eum nesciunt aperiam.</StyledSegment>
    </>
  );
};

export default Test;
