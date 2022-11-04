import React from "react";
import Sidebar from "../components/Sidebar";

import styled from "styled-components";
import Navheader from "../components/Navheader";
import CryptoPrice from "../components/CryptoPrice";
//import GCharts from "../components/GCharts";

const DashBoardContainer = styled.div`
  display: flex;
`;
const Content = styled.div``;

const DashBoard = () => {
  return (
    <>
      <DashBoardContainer>
        <Sidebar />
        <Content>
          <Navheader />
          <CryptoPrice />
        </Content>
      </DashBoardContainer>
    </>
  );
};

export default DashBoard;
