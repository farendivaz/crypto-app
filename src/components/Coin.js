import React from "react";

import styled from "styled-components";

const Coin = ({ icon, name, symbol, price, priceChange, marketCap, myKey }) => {
  return (
    <Wrapper myKey={myKey}>
      <img src={icon} alt={name} />
      <p>{name}</p>
      <p>{symbol}</p>
      <p>{price}</p>
      <p>{priceChange}</p>
      <p>{marketCap}</p>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  margin: 1em auto;
  padding: 0.8em;
  background-color: gainsboro;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-weight: 600;
  }
`;
export default Coin;
