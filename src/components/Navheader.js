import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 120px;
  width: 75vw;
  color: white;
`;
const NavTitle = styled.h1`
  margin: 30px 0 0 70px;
  font-weight: 400;
`;
const NavText = styled.p`
  margin: 10px 0 0 70px;
  color: #5b5a99;
`;

const Navheader = () => {
  return (
    <NavContainer>
      <NavTitle>DashBoard</NavTitle>
      <NavText>
        This is the current market price of the crypto coins according to
        Binanca API
      </NavText>
    </NavContainer>
  );
};

export default Navheader;
