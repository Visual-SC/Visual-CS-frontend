export interface HeaderLink {
  description: string;
  link: string;
  className: string;
}

export interface HeaderImageLink extends HeaderLink {
  image: string;
  alt: string;
}

