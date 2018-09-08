import * as React from 'react';
import styled from 'styled-components';
import { getExclamationMarks } from '../res/utils';

interface ButtonProps {
  neg?: boolean;
  pos?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Button = styled.div<ButtonProps>`
  font-size: 14px;
  color: white;
  border-radius: 5px;
  width: 200px;
  padding: 12px;
  cursor: pointer;
  background: ${p => {
    if (p.neg) {
      return '#ff9e7c';
    } else if (p.pos) {
      return '#29eb7f';
    }
    return '#ffd55f';
  }};
`;

// Defining the type `Props`.
export interface Props {
  name: string; // Required
  enthusiasmLevel: number; // Required
  onIncrement?: () => void;
  onDecrement?: () => void;
  history: Array<string>;
}

export interface State {
  message: string;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: 'Woah, cheer up!',
    };
  }

  renderMessage(): React.ReactNode {
    const { enthusiasmLevel } = this.props;
    let message;

    if (enthusiasmLevel < 0) {
      message = `${this.state.message}${getExclamationMarks(
        Math.abs(enthusiasmLevel),
      )}`;
    } else {
      message = `${this.props.name}${getExclamationMarks(enthusiasmLevel)}`;
    }

    return <h1>{message}</h1>;
  }

  go = (): void => {
    this.props.history.push('doge');
  };

  render() {
    const { onIncrement, onDecrement } = this.props;

    return (
      <Container>
        {this.renderMessage()}
        <Button pos onClick={onIncrement}>
          much wow
        </Button>
        <div style={{ paddingTop: 20 }} />
        <Button neg onClick={onDecrement}>
          many sad
        </Button>
        <div style={{ paddingTop: 20 }} />
        <Button onClick={this.go}>doge</Button>
      </Container>
    );
  }
}

export default Hello;
