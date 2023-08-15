import React from "react";
import CategoryTagList from "../components/CategoryTagList/CategoryTagList";
import styled from "styled-components";
import LatestProductsSection from "../components/LatestProducts";

const HomePage = () => {
  return (
    <SHomePage>
      <div>Main</div>
      <SecondColumn>
        <CategoryTagList />
        <LatestProductsSection />
      </SecondColumn>
    </SHomePage>
  );
};

const SHomePage = styled.div`
  margin-top: 31px;
  display: grid;
  height: 100vh;
  grid-template-columns: 4fr 2fr;
  grid-column-gap: 33px;
`;

const SecondColumn = styled.div`
  position: relative;
`;

export default HomePage;
