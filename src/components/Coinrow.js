import React from "react";

const Coinrow = ({ coin, index }) => {
  return (
    <tr key={coin.id}>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          className="imgcoin me-4 img-fluid"
        />
        <span className="text-light ">{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol} </span>
      </td>
      <td className="text-light ">{coin.current_price} </td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}{" "}
      </td>
      <td className="text-light ">{coin.total_volume} </td>
    </tr>
  );
};

export default Coinrow;
