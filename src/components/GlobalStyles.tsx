import { COLORS } from '@/constants';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  /* GLOBAL */
  html, body, #__next {
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.45;
    font-family: 'firaCodeRegular', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  #__next {
    isolation: isolate;
  }
  :root {
    --toastify-toast-width: 420px;
    --toastify-color-progress-light: ${COLORS.primaryGradient};
  }
  /* FONTS */
  @font-face {
    font-family: 'firaCodeRegular';
    src: url('/fonts/FiraCode/FiraCode-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: fallback; // fix for SSR
  }
  @font-face {
    font-family: 'firaCodeBold';
    src: url('/fonts/FiraCode/FiraCode-Bold.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: fallback; // fix for SSR
  }
  @font-face {
    font-family: 'thunder';
    src: url('/fonts/Thunder/Thunder-BlackLC.ttf');
    font-display: fallback; // fix for SSR
  }
  /* PORTALS */
  #modal {
    position: relative;
    z-index: 999;
  }
`;

export default GlobalStyles;
