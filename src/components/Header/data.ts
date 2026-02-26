import type { HeaderProps, HeaderImgProps } from "./types";

export const headerData: (HeaderImgProps | HeaderProps)[] = [
    {
        img: "/rodson-logo.png",
        link: "/",
        className: "h-full w-28 inline-flex items-center"
    },
    {
        link: "/",
        text: "MENÚ",
        className: "flex items-center ml-50 h-full"
    },
    {
        link: "/acerca-de",
        text: "ACERCA DE",
        className: "flex items-center ml-50 h-full"
    },
];