import { css } from 'lit-element';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local("OpenSans Regular"),
         url("/fonts/open_sans_regular.woff2") format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  .m-markdown p:not(:first-child) {
    margin-block-start:0.5em !important;
  }
  .main-content {
    scrollbar-width: auto;
  }
  .main-content-inner--focused-mode {
    max-width: 1200px;
  }
`;
