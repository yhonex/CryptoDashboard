import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const PriceContent = styled.div`
  display: flex;
  justify-content: "center";
  border: 1px solid white;
  text-align: center;
  border-radius: 8px;
  color: white;
  padding: 12px;
  margin: 15px;
  @media screen and (max-width: 1224px) {
    display: inline-block;
  }
`;
const ColoPricebit = styled.h3`
  color: #eebc1d;
  margin: 2px 5px 5px 10px;
`;
const ColoPriceeth = styled.h3`
  color: #a330ff;
  margin: 5px;
  margin: 2px 5px 5px 10px;
`;
const ColoPriceusd = styled.h5`
  color: #50e3c2;
  margin: 5px;
`;

const CryptoPrice = () => {
  const [etheur, setEtheur] = useState("");
  const [bitcoin, setBitcoin] = useState("");

  const price1 = () => {
    let wsEtheru = new WebSocket(
      "wss://stream.binance.com:9443/ws/etheur@trade"
    );
    wsEtheru.onmessage = (event) => {
      let DataPrice = JSON.parse(event.data);

      setEtheur(DataPrice.p);
    };
  };
  const price2 = () => {
    let wsBitcoin = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@trade"
    );
    wsBitcoin.onmessage = (event) => {
      let Databitcoin = JSON.parse(event.data);

      setBitcoin(Databitcoin.p);
    };
  };
  useEffect(() => {
    price2();
  }, []);

  useEffect(() => {
    price1();
  }, []);

  return (
    <Content>
      <PriceContent>
        <FontAwesomeIcon icon={faBitcoin} className="fa-2xl" />
        <ColoPricebit>Bitcoin</ColoPricebit>

        <ColoPriceusd>{etheur} USD</ColoPriceusd>
      </PriceContent>
      <PriceContent>
        <FontAwesomeIcon icon={faEthereum} className="fa-2xl" />
        <ColoPriceeth>Ethereum</ColoPriceeth>

        <ColoPriceusd>{bitcoin} USD</ColoPriceusd>
      </PriceContent>
    </Content>
  );
};

export default CryptoPrice;
