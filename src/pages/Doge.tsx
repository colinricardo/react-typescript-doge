import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import doge from '../assets/doge.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const FadeInFromRight = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
});

const FadeInFromLeft = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
});

interface Props {
  history: Array<string>;
}

const Doge = ({ history }: Props) => {
  const goHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <FadeInFromLeft>
        <h1>such transition</h1>
      </FadeInFromLeft>
      <FadeInFromRight>
        <img
          src={doge}
          height={100}
          width={100}
          style={{ cursor: 'pointer' }}
          onClick={goHome}
        />
      </FadeInFromRight>
    </Container>
  );
};

export default Doge;
