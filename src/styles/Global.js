/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

  /* Document
    ========================================================================== */

  /**
  * 1. Correct the line height in all browsers.
  * 2. Prevent adjustments of font size after orientation changes in iOS.
  */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
    ========================================================================== */

  /**
  * Remove the margin in all browsers.
  */

  body {
    margin: 0;
  }

  /**
  * Correct the font size and margin on h1 elements within section and
  * article contexts in Chrome, Firefox, and Safari.
  */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
    ========================================================================== */

  /**
  * 1. Add the correct box sizing in Firefox.
  * 2. Show the overflow in Edge and IE.
  */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd em font sizing in all browsers.
  */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
    ========================================================================== */

  /**
  * Remove the gray background on active links in IE 10.
  */

  a {
    background-color: transparent;
  }

  /**
  * 1. Remove the bottom border in Chrome 57-
  * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
  * Add the correct font weight in Chrome, Edge, and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  * 1. Correct the inheritance and scaling of font size in all browsers.
  * 2. Correct the odd em font sizing in all browsers.
  */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  * Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  * Prevent sub and sup elements from affecting the line height in
  * all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
    ========================================================================== */

  /**
  * Remove the border on images inside links in IE 10.
  */

  img {
    border-style: none;
  }

  /* Forms
    ========================================================================== */

  /**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  * Show the overflow in IE.
  * 1. Show the overflow in Edge.
  */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
  * Remove the inheritance of text transform in Edge, Firefox, and IE.
  * 1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
  * Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
  * Remove the inner border and padding in Firefox.
  */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  * Restore the focus styles unset by the previous rule.
  */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  * Correct the padding in Firefox.
  */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
  * 1. Correct the text wrapping in Edge and IE.
  * 2. Correct the color inheritance from fieldset elements in IE.
  * 3. Remove the padding so developers are not caught out when they zero out
  *    fieldset elements in all browsers.
  */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
  * Add the correct vertical alignment in Chrome, Firefox, and Opera.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  * Remove the default vertical scrollbar in IE 10+.
  */

  textarea {
    overflow: auto;
  }

  /**
  * 1. Add the correct box sizing in IE 10.
  * 2. Remove the padding in IE 10.
  */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
  * Correct the cursor style of increment and decrement buttons in Chrome.
  */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  * 1. Correct the odd appearance in Chrome and Safari.
  * 2. Correct the outline style in Safari.
  */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  * Remove the inner padding in Chrome and Safari on macOS.
  */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  * 1. Correct the inability to style clickable types in iOS and Safari.
  * 2. Change font properties to inherit in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
    ========================================================================== */

  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */

  details {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */

  summary {
    display: list-item;
  }

  /* Misc
    ========================================================================== */

  /**
  * Add the correct display in IE 10+.
  */

  template {
    display: none;
  }

  /**
  * Add the correct display in IE 10.
  */

  [hidden] {
    display: none;
  }

  /*******************************
              Page
  *******************************/

  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 14px;
  }

  body {
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    min-width: 320px;
    background: #FFFFFF;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.4285em;
    color: rgba(0, 0, 0, 0.87);
    font-smoothing: antialiased;
  }

  /*******************************
              Headers
  *******************************/

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    line-height: 1.28571429em;
    margin: calc(2rem -  0.14285714em ) 0em 1rem;
    font-weight: bold;
    padding: 0em;
  }

  h1 {
    min-height: 1rem;
    font-size: 2rem;
  }

  h2 {
    font-size: 1.71428571rem;
  }

  h3 {
    font-size: 1.28571429rem;
  }

  h4 {
    font-size: 1.07142857rem;
  }

  h5 {
    font-size: 1rem;
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child {
    margin-top: 0em;
  }

  h1:last-child,
  h2:last-child,
  h3:last-child,
  h4:last-child,
  h5:last-child {
    margin-bottom: 0em;
  }

  /*******************************
              Text
  *******************************/

  p {
    margin: 0em 0em 1em;
    line-height: 1.4285em;
  }

  p:first-child {
    margin-top: 0em;
  }

  p:last-child {
    margin-bottom: 0em;
  }

  /*-------------------
          Links
  --------------------*/

  a {
    color: #4183C4;
    text-decoration: none;
  }

  a:hover {
    color: #1e70bf;
    text-decoration: none;
  }

  /*******************************
          Scrollbars
  *******************************/

  /*******************************
            Highlighting
  *******************************/

  /* Site */

  ::-webkit-selection {
    background-color: #CCE2FF;
    color: rgba(0, 0, 0, 0.87);
  }

  ::-moz-selection {
    background-color: #CCE2FF;
    color: rgba(0, 0, 0, 0.87);
  }

  ::selection {
    background-color: #CCE2FF;
    color: rgba(0, 0, 0, 0.87);
  }

  /* Form */

  textarea::-webkit-selection,
  input::-webkit-selection {
    background-color: rgba(100, 100, 100, 0.4);
    color: rgba(0, 0, 0, 0.87);
  }

  textarea::-moz-selection,
  input::-moz-selection {
    background-color: rgba(100, 100, 100, 0.4);
    color: rgba(0, 0, 0, 0.87);
  }

  textarea::selection,
  input::selection {
    background-color: rgba(100, 100, 100, 0.4);
    color: rgba(0, 0, 0, 0.87);
  }

  /* Force Simple Scrollbars */

  body ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
  }

  body ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0px;
  }

  body ::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.25);
    -webkit-transition: color 0.2s ease;
    transition: color 0.2s ease;
  }

  body ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0, 0, 0, 0.15);
  }

  body ::-webkit-scrollbar-thumb:hover {
    background: rgba(128, 135, 139, 0.8);
  }

  #root, #app {
    height: 100%;
    width: 100%;
  }
`;

export default Global;
