import styled, { css } from "styled-components";
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";

export default function Descubra() {

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${(props) =>
      props.valor >= 1 &&
      css`
        color: green;
      `}

    ${(props) =>
      props.primary &&
      css`
        background: palevioletred;
      `}
  `;

  const Container = styled.div`
    text-align: center;
  `;

  const Span = styled.span`
    display: flex;
    align-itens: center;
    color: #66be54;

    ${(props) =>
      props.variacao < 0 &&
      css`
        color: #b9283d;
      `
    }      
  `;

  const priceChange1w = 1;

  return (
    <div>
      Descubra
      <Container>
        <Button>Normal Button</Button>
        <Button primary valor>
          Primary Button
        </Button>
      </Container>

      <Span variacao={Number(priceChange1w)}>
        {Number(priceChange1w) < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
        {priceChange1w}%
      </Span>


      <span
        variacao={Number(priceChange1w)}
        style={
          Number(priceChange1w) < 0
            ? { color: "#b9283d" }
            : { color: "#66be54" }
        }
      >
        {Number(priceChange1w) < 0 ? <RxTriangleDown /> : <RxTriangleUp />}
        {priceChange1w}%
      </span>
    </div>
  );
}
