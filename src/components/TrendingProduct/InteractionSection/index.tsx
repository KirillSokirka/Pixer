import React from "react";
import { SInteractionSection, SInteractionItem } from "./styles";

import { Comment, ThumbUp } from "../../../assets/svg";

interface InteractionSectionProps {
  likesNumber: string;
  commentsNumber: string;
}

const InteractionSection = ({
  likesNumber,
  commentsNumber,
}: InteractionSectionProps) => {
  return (
    <SInteractionSection>
      <SInteractionItem>
        <ThumbUp />
        <p>{likesNumber}</p>
      </SInteractionItem>
      <SInteractionItem>
        <Comment />
        <p>{commentsNumber}</p>
      </SInteractionItem>
    </SInteractionSection>
  );
};

export default InteractionSection;
