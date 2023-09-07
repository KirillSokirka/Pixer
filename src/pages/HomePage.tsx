import React, { useMemo, useState } from "react";
import CategoryTagList from "../components/CategoryTags";
import styled from "styled-components";
import LatestProductsSection from "../components/LatestProducts";
import TrendingProduct from "../components/TrendingProduct";
import TopProducts from "../components/TopProducts";
import { useResponsive } from "../contexts/hooks";
import { sizes } from "../styles/variables";
import ListSection from "../components/ListSection";

enum ActiveSection {
  TopProducts = "Top Products",
  LatestProducts = "Latest Products",
}

const HomePage = () => {
  const { mobileView } = useResponsive();
  const [activeSection, setActiveSection] = useState<ActiveSection>(
    ActiveSection.TopProducts
  );

  const commonView = useMemo(() => {
    return (
      <>
        <CategoryTagList />
        <TrendingProduct />
        <MobileButtonsSection>
          <MobileButton
            onClick={() => setActiveSection(ActiveSection.TopProducts)}
            active={activeSection === ActiveSection.TopProducts}
          >
            Top Products
          </MobileButton>
          <MobileButton
            onClick={() => setActiveSection(ActiveSection.LatestProducts)}
            active={activeSection === ActiveSection.LatestProducts}
          >
            Latest Products
          </MobileButton>
        </MobileButtonsSection>
      </>
    );
  }, [activeSection]);

  const activeSectionView = useMemo(() => {
    return activeSection === ActiveSection.TopProducts ? (
      <TopProducts />
    ) : (
      <LatestProductsSection />
    );
  }, [activeSection]);

  return (
    <SHomePage>
      {mobileView ? (
        <>
          {commonView}
          {activeSectionView}
        </>
      ) : (
        <>
          <div>
            <TrendingProduct />
            <ListSection title="Top Products">
              <TopProducts />
            </ListSection>
          </div>
          <div>
            {/* <CategoryTagList /> */}
            <ListSection title="Latest Products">
              <LatestProductsSection />
            </ListSection>
          </div>
        </>
      )}
    </SHomePage>
  );
};

const SHomePage = styled.div`
  margin-top: 31px;
  display: grid;
  grid-template-columns: 2.5fr 1.5fr;
  grid-column-gap: 33px;

  @media (max-width: ${sizes.smallScreen.width}) {
    display: flex;
    flex-direction: column;
    margin-top: -3px;
    gap: 20px;
  }

  @media (max-width: ${sizes.mobile.width}) {
    margin-top: -5px;
    gap: 15px;
  }
`;

const MobileButtonsSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 18px;
  margin-bottom: 10px;

  @media (min-width: ${sizes.mobile.width}) {
    font-size: 24px;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const MobileButton = styled.div<{ active: boolean }>`
  color: ${props => (props.active ? "#D5D5D5" : "#989898")};
  cursor: "pointer";
`;

export default HomePage;
