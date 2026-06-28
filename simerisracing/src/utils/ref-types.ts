 export type Heading       = HTMLHeadingElement   | null;
 export type HeadingRef    = React.RefObject<Heading>;

 export type P             = HTMLParagraphElement | null;
 export type PRef          = React.RefObject<P>;

 export type Btn           = HTMLButtonElement    | null;
 export type BtnRef        = React.RefObject<Btn>;
 
 export type AnyElement    = HTMLElement          | null;
 export type AnyElementRef = React.RefObject<AnyElement>;

 export type Div           = HTMLDivElement       | null;
 export type DivRef        = React.RefObject<Div>;

 export type Li            = HTMLLIElement        | null;
 export type LiRef         = React.RefObject<Li>;

 export type A             = HTMLAnchorElement    | null;
 export type ARef          = React.RefObject<A>;

 export interface Page {
    page    : AnyElementRef;
    h1?     : HeadingRef;
    h2?     : HeadingRef;
    h2s?    : Array<HeadingRef>;
    h3?     : HeadingRef;
    h3s?    : Array<HeadingRef>;
    h4?     : HeadingRef;
    h4s?    : Array<HeadingRef>;
    p?      : PRef;
    ps?     : Array<PRef>;
    lis?    : Array<LiRef>;
    strongs?: Array<AnyElementRef>;
    links?  : Array<ARef>;
 }