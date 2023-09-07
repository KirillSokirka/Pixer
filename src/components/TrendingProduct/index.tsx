import { useMemo } from "react";
import {
  STitleSection,
  SContent,
  SImage,
  SAuthorSection,
  SAuthorButtons,
  SFolowButton,
  SMobileSection,
  SMobileView,
} from "./styles";

import { Bookmark, Link, Notification } from "../../assets/svg";
import qubitron from "../../assets/images/logo_03.png";
import image from "../../assets/images/trending_img.png";

import Author from "../Author";
import Button from "../Button";
import InteractionSection from "./InteractionSection";

import { useResponsive, useThemeContext } from "../../contexts/hooks";

const TrendingProduct = () => {
  const { isSideBarOpen } = useThemeContext();

  const { mobileView } = useResponsive();

  const author = useMemo(() => {
    return (
      <Author
        name={`Qubitron Solutions`}
        logo={qubitron}
        folowers={20}
        isVerified={true}
      />
    );
  }, []);

  const buttons = useMemo(() => {
    return (
      <SAuthorButtons>
        <Button logo={Bookmark} applyResponsive />
        <Button logo={Link} applyResponsive />
        <Button logo={Notification} applyResponsive />
        <SFolowButton>Follow</SFolowButton>
      </SAuthorButtons>
    );
  }, []);

  const view = useMemo(() => {
    if (mobileView) {
      return (
        <SMobileView>
          <STitleSection>
            <p>Reactify Ecommerce Theme with Dashboard</p>
          </STitleSection>
          {author}
          <SMobileSection>
            <InteractionSection likesNumber={"2.3k"} commentsNumber={"200"} />
            {buttons}
          </SMobileSection>
        </SMobileView>
      );
    } else {
      return (
        <>
          <STitleSection>
            <p>Reactify Ecommerce Theme with Dashboard</p>
            <InteractionSection likesNumber={"2.3"} commentsNumber={"200"} />
          </STitleSection>
          <SAuthorSection>
            {author}
            {buttons}
          </SAuthorSection>
        </>
      );
    }
  }, [mobileView]);

  return (
    <SContent>
      <SImage src={image} isOpen={isSideBarOpen} />
      {view}
    </SContent>
  );
};

export default TrendingProduct;
