import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
`;
const PriceContent = styled.div`
  border: 1px solid white;
  text-align: center;
  border-radius: 8px;
  color: white;
  padding: 12px;
  margin: 15px;
`;

const CryptoPrice = () => {
  const [etheur, setEtheur] = useState("");
  const [bitcoin, setBitcoin] = useState("");
  let wsEtheru = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
  let wsBitcoin = new WebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@trade"
  );

  wsEtheru.onmessage = (event) => {
    let DataPrice = JSON.parse(event.data);

    setEtheur(DataPrice.p);
  };

  wsBitcoin.onmessage = (event) => {
    let Databitcoin = JSON.parse(event.data);
    setBitcoin(Databitcoin.p);
  };
  return (
    <Content>
      <PriceContent>
        <h2>Etheur</h2>
        <br />
        <h3>{etheur} </h3>
      </PriceContent>
      <PriceContent>
        <h2>Bitcoin</h2>
        <br />
        <h3>{bitcoin} </h3>
      </PriceContent>
    </Content>
  );
};

export default CryptoPrice;
