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
`;
const Content = styled.div`
  width: 50vw;
`;
const PriceContainer = styled.div`
  width: 50vw;
  margin-left: 20px;
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
