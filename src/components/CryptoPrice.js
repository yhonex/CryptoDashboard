import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { CryptosState } from "../context/Cryptocontex";

const Content = styled.div`
  display: flex;
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
`;
const ColoPricebit = styled.h2`
  color: #eebc1d;
  margin: 2px 5px 5px 10px;
`;
const ColoPriceeth = styled.h2`
  color: #a330ff;
  margin: 5px;
  margin: 2px 5px 5px 10px;
`;
const ColoPriceusd = styled.h3`
  color: #50e3c2;
  margin: 5px;
`;

const CryptoPrice = () => {
  const { pricebit, priceeth } = CryptosState();

  return (
    <Content>
      <PriceContent>
        <FontAwesomeIcon icon={faBitcoin} className="fa-2xl" />
        <ColoPricebit>Bitcoin</ColoPricebit>

        <ColoPriceusd>{pricebit} USD</ColoPriceusd>
      </PriceContent>
      <PriceContent>
      <FontAwesomeIcon icon={faEthereum} className="fa-2xl" />
        <ColoPriceeth>Ethereum</ColoPriceeth>

        <ColoPriceusd>{priceeth} USD</ColoPriceusd>
      </PriceContent>
    </Content>
  );
};

export default CryptoPrice;
/* const [etheur, setEtheur] = useState("");
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
  };*/
