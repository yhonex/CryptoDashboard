import React from "react";

import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 25vw;
  height: 100vh;

  color: white;
  align-items: center;
  text-align: center;
  background-color: #201d50;
`;
const SidebarTitle = styled.h2`
  margin-top: 100px;
  font-weight: 400;
`;

const ListContainer = styled.ul`
  text-align: center;
  margin-top: 150px;
  list-style: none;
  font-weight: 400;
  color: #53b9ea;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>RecentHok</SidebarTitle>

      <ListContainer>
        <li>DashBoard</li>
      </ListContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
