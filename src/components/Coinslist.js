import React, { useState } from "react";
import { CryptosState } from "../context/Cryptocontex";
import Coinrow from "./Coinrow";

const titles = ["Coin", "Price", "Price Change", "24h Volume"];

const Coinslist = () => {
  const { coins } = CryptosState();
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="search a Coin"
        className="form-control  border-1 text-light mt-4 text-center"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table mt-4 table-hover ">
        <thead>
          <tr className="text-light">
            {titles.map((title, index) => {
              return <td key={index}>{title} </td>;
            })}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => {
            return <Coinrow coin={coin} key={index} index={index + 1} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Coinslist;
