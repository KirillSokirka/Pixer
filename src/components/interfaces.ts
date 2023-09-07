interface IOPenable {
  isOpen: boolean;
}

export interface IAuthor {
  logo: string;
  name: string;
  folowers: number;
  isVerified: boolean;
}

export interface ILatestProduct {
  image: string;
  title: string;
  author: IAuthor;
  date: string;
}

export interface ITopProduct {
  image: string;
  title: string;
  author: string;
}

export default IOPenable;
