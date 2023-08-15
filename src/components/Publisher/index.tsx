import React from "react";
import { SPublisher } from "./styles";

interface IPublisherStyles {
  logoSize: string;
  nameSize: string;
  folowersSize: string;
  startSize: string;
}

interface PublisherProps {
  logo: string;
  name: string;
  folowers: number;
  isVerified: boolean;
  styles?: IPublisherStyles | null;
}

const Publisher = ({
  logo,
  name,
  folowers,
  isVerified,
  styles,
}: PublisherProps) => {
  return <SPublisher>Publisher</SPublisher>;
};

export default Publisher;
