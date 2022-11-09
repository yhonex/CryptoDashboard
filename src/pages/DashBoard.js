import React from "react";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import Navheader from "../components/Navheader";
import Cryptoline from "../components/Cryptoline";
import CryptoPrice from "../components/CryptoPrice";
import Cryptochart from "../components/Cryptochart";
import Coinslist from "../components/Coinslist";

const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1224px) {
    display: inline-block;
    align-items: "center";
    justify-content: "center";
  }
`;
const Content = styled.div`
  max-width: 50vw;
  @media screen and (max-width: 1224px) {
    max-width: 100vw;
  }
`;
const PriceContainer = styled.div`
  max-width: 50vw;
  margin-left: 20px;
  @media screen and (max-width: 1224px) {
    max-width: 100vw;
  }
`;

const DashBoard = () => {
  return (
    <>
      <Navheader />
      <DashBoardContainer>
        <Content>
          <CryptoPrice />
          <Cryptoline />
          <Cryptochart />
        </Content>
        <PriceContainer>
          <Coinslist />
        </PriceContainer>
      </DashBoardContainer>
    </>
  );
};

export default DashBoard;
