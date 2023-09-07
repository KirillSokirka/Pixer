import rnbImage from "../assets/images/image_01.png";
import wordPressImage from "../assets/images/image_02.png";
import htmlImage from "../assets/images/image_06.png";
import dashboardImage from "../assets/images/image_04.png";

import imagineco from "../assets/images/logo_02.png";
import bitronic from "../assets/images/logo_01.png";
import qubitron from "../assets/images/logo_03.png";

import { IAuthor, ILatestProduct, ITopProduct } from "../components/interfaces";

const AUTHOR_LIST: IAuthor[] = [
  {
    name: "Imagineco",
    folowers: 20,
    isVerified: true,
    logo: imagineco,
  },
  {
    name: "Bitronic",
    folowers: 20,
    isVerified: false,
    logo: bitronic,
  },
  {
    name: "Qubitron Solutions",
    folowers: 20,
    isVerified: true,
    logo: qubitron,
  },
];

const LATEST_PRODUCTS: ILatestProduct[] = [
  {
    title: "RNB Modern Laravel React Rental System",
    image: rnbImage,
    author: AUTHOR_LIST[0],
    date: "3",
  },
  {
    title: "Addingly Modern WordPress Theme",
    image: wordPressImage,
    author: AUTHOR_LIST[1],
    date: "3",
  },
  {
    title: "Businessify HTML Ecommerce Magazine Template",
    image: htmlImage,
    author: AUTHOR_LIST[2],
    date: "3",
  },
  {
    title: "Simplextic Simple Dashboard Template",
    image: dashboardImage,
    author: AUTHOR_LIST[2],
    date: "3",
  },
  {
    title: "RNB Modern Laravel React Rental System",
    image: rnbImage,
    author: AUTHOR_LIST[0],
    date: "3",
  },
  {
    title: "Businessify HTML Ecommerce Magazine Template",
    image: htmlImage,
    author: AUTHOR_LIST[2],
    date: "3",
  },
];

const TOP_PRODUCTS: ITopProduct[] = [
  {
    title: "RNB Modern Laravel React Rental System",
    image: rnbImage,
    author: AUTHOR_LIST[0].name,
  },
  {
    title: "Addingly Modern WordPress Theme",
    image: wordPressImage,
    author: AUTHOR_LIST[1].name,
  },
  {
    title: "Businessify HTML Ecommerce Magazine Template",
    image: htmlImage,
    author: AUTHOR_LIST[2].name,
  },
  {
    title: "Simplextic Simple Dashboard Template",
    image: dashboardImage,
    author: AUTHOR_LIST[2].name,
  },
  {
    title: "RNB Modern Laravel React Rental System",
    image: rnbImage,
    author: AUTHOR_LIST[0].name,
  },
];

const CATEGORY_TAGS = [
  "HTML",
  "FIGMA",
  "React JS",
  "CSS",
  "Next JS",
  "Tailwind",
  "Javascript",
  "Node JS",
];

export { LATEST_PRODUCTS, TOP_PRODUCTS, CATEGORY_TAGS };
