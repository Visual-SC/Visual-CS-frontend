export interface HeaderProps {
    link: string;
    text: string;
}

// Extendemos de HeaderProps pero omitimos 'text' para que no sea requerido
export interface HeaderImgProps extends Omit<HeaderProps, 'text'> {
    img: string;
}
