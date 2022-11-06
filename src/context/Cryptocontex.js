import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  CoinList,
  HistoricalChart,
  Pricebitcoin,
  PriceEthereum,
} from "../config/api";

const Crypto = createContext();

const Cryptocontex = ({ children }) => {
  const currency = "USD";
  const bitcoin = "bitcoin";
  const ethereum = "ethereum";
  const [ethereumData, setEthereumData] = useState();
  const [hitoricalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const [pricebit, setPricebit] = useState();
  const [priceeth, setPriceeth] = useState();
  const [coins, setCoins] = useState([]);

  const fetchHistoryData = async () => {
    const { data } = await axios.get(HistoricalChart(bitcoin, days, currency));

    setHistoricalData(data.prices);
  };
  const fetchEthereum = async () => {
    const { data } = await axios.get(HistoricalChart(ethereum, days, currency));
    setEthereumData(data.prices);
  };

  const dataBit = async () => {
    const { data } = await axios.get(Pricebitcoin());

    setPricebit(data.bitcoin.usd);
  };

  const dataEth = async () => {
    const { data } = await axios.get(PriceEthereum());

    setPriceeth(data.ethereum.usd);
  };

  const fetchDataCoinList = async () => {
    const { data } = await axios.get(CoinList());
    setCoins(data);
  };

  useEffect(() => {
    fetchDataCoinList();
  }, []);
  useEffect(() => {
    dataEth();
  }, []);
  useEffect(() => {
    dataBit();
  }, []);

  useEffect(() => {
    fetchHistoryData();
  }, [days]);
  useEffect(() => {
    fetchEthereum();
  }, [days]);

  return (
    <Crypto.Provider
      value={{
        ethereumData,
        hitoricalData,
        days,
        currency,
        pricebit,
        priceeth,
        coins,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default Cryptocontex;

export const CryptosState = () => {
  return useContext(Crypto);
};
