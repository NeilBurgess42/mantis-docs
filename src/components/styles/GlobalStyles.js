import { injectGlobal } from 'emotion';

export const baseStyles = injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;600;700;0,900;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }
  ::-webkit-input-placeholder {
    /* Edge */
    color: #c2c2c2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #c2c2c2;
  }

  ::placeholder {
    color: #c2c2c2;
  }
  html,
  body {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    font-size: 14px;
  }
  a {
    transition: color 0.15s;
    /* color: #663399; */
  }
  .visibleMobile {
    display: none;
  }
  .visibleMobileView {
    display: none !important;
  }
  .video-responsive {
    position: relative;
    padding-bottom: 56.2%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  .displayInline {
    display: inline-block;
  }
  
  .mermaid svg {
    max-width:100%;
  }

  .navBarToggle {
    border: 0px solid #fff;
    border-radius: 4px;
    width: 36px;
    height: 33px;
    position: absolute;
    right: 20px;
    padding: 8px 5px;
    display: none;
  }
  .navBarToggle .iconBar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: #33ff99;
  }
  .navBarToggle .iconBar:first-child {
    margin-top: 0px;
  }
  .video-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diffNewLine {
    color: #22863a;
    background-color: #f0fff4;
  }

  .diffRemoveLine {
    color: red;
    background-color: #ffcccc;
  }
  .navBarParent {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
  }
  .divider {
    height: 30px;
    margin: 0 15px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }
  .navBarULRight {
    /* position: absolute;
  right: 30px; */
  }
  .githubIcon {
    width: 15px;
    margin-right: 5px;
  }

  .githubSection {
    display: flex;
    align-items: center;
    color: #000;
    opacity: 0.7;
  }

  .githubSection:hover {
    text-decoration: none;
    opacity: 1;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff !important;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: #001933;
  }

  .headerWrapper {
    border-bottom: 1px solid rgb(212, 218, 223);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    display: flex;
    align-items: center;
  }
  .formElement {
    background-color: transparent;
    padding: 4px;
    border-radius: 5px;
    position: relative;
  }
  .formElement:focus {
    outline: none;
    border: none;
  }
  .formElement svg path {
    fill: #33ff99;
  }
  .searchInput {
    width: 100%;
    background-color: rgba(51,255,153,.12) !important;
    border-width: 0 !important;
    color: #C2C2C2;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    opacity: .6;
    padding-left: 38px;
    max-width: 600px;
  }
  .searchInput:focus,
  .searchInput:visited,
  .searchInput:hover,
  .searchInput:focus-within {
    outline: none;
    border: 0;
  }
  .searchWrapper {
    padding-left: 0px;
    padding-right: 20px;
    flex: 1;
    position: relative;
  }
  .searchWrapper a {
    font-weight: 500;
  }
  .hitWrapper {
    background-color: #fff;
    padding: 0.7em 1em 0.4em;
    border-radius: 4px;
    position: absolute;
    width: 80vw;
    max-width: 30em;
    top: 40px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
    height: auto;
    max-height: 80vh;
    overflow: scroll;
    left: 0;
  }
  .hitWrapper ul li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid;
    list-style-type: none;
  }
  .hitWrapper ul li:first-child {
    border-top: 0px;
    margin-top: 0px;
    color: black !important;
    padding: 0px;
  }
  .showResults {
    display: block;
  }
  .hideResults {
    display: none;
  }
  .hitWrapper span {
    color: black;
    font-size: 14px;
  }
  .headerTitle {
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    color: #fff !important;
    text-transform: uppercase;
  }
  .headerTitle a {
    color: #fff;
  }

  .headerTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  .logoWrapper {
    padding: 21px 0;
    padding-left: 20px;
  }

  .logoContent {
    margin-left: 16px;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
    padding-right: 10px;
  }

  /* Header section starts here */
  .removePadd {
    padding: 0 !important;
  }
  .navBarDefault {
    border-radius: 0;
    border-top: 0;
    margin-bottom: 0;
    border: 0;
    display: flex;
    align-items: center;
    box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    -moz-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.8);
    -o-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    z-index: 1;
    padding: 15px;
    position: relative;
    height: 80px;
  }
  .navBarHeader {
    min-width: 335px;
    padding-right: 20px;
    display: flex;
    align-items: center;
  }
  .navBarBrand {
    padding: 0px 0px;
    display: flex;
    align-items: center;
  }

  .navBarBrand img {
    width: 120px;
    margin-right: 6px;
    display: inline-block;
  }
  .navBarUL li {
    list-style-type: none;
  }
  .navBarUL {
    -webkit-overflow-scrolling: touch;
  }
  .navBarUL li a {
    color: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
    opacity: 1;
    padding: 10px 15px;
  }
  .navBarNav {
    display: flex;
    align-items: center;
  }
  .navBarUL li a img,
  .navBarUL li a .shareIcon {
    width: 20px;
  }
  .navBarUL li a:hover {
    opacity: 0.7;
  }
  pre {
    border: 0 !important;
    background-color: rgb(245, 247, 249); /* !important; */
  }
  
  blockquote {
    color: rgb(116, 129, 141);
    margin: 0px 0px 24px;
    padding: 0px 0px 0px 12px;
    border-left: 4px solid rgb(230, 236, 241);
    border-color: rgb(230, 236, 241);
  }
  .socialWrapper {
    display: flex;
    align-items: center;
  }
  .socialWrapper li {
    display: inline-block;
  }
  .socialWrapper li a {
    display: contents;
  }

  .hp_callout {
    text-align: center;
    max-width:45rem;
    margin: 0 auto;
  }
  .btn {
    border-radius: 4px;
    padding-top: 2px;
    margin-left: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .twitterBtn img {
    width: 12px !important;
  }
  .discordBtn img {
    width: 10px !important;
  }
  .btn:hover {
    opacity: 0.8;
  }
  .discordBtn {
    img {
      width: 10px;
    }
  }
  /* Header section ends here */
  .sidebarTitle {
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); */
    color: inherit;
    padding: 18px 30px;
    font-size: 14px;
    font-weight: normal;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    a{
      color: inherit;
    }
  }

  .sideBarShow {
    display: none;
  }

  .accentCircle {
    width: 8px;
    height: 8px;
    background-color: #33ff99;
    border-radius: 50%;
    margin: 0 12px;
  }

  .headerNav {
    padding: 0px 24px;
    color: #001933;
    font-size: 16px;
    font-weight: 500;
    line-height: 1em;
  }

  .headerNav a {
    color: #001933;
    text-decoration: none;
  }

  .headerNav a:hover {
    text-decoration: none;
  }

  .logoWrapper img {
    width: 40px;
  }

  .sideBarUL {
  }

  .sideBarUL li {
    list-style-type: none;
    width: auto;
  }

  .sideBarUL li a, .sectionHeading {
    /* color: #fff; */
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;
    padding-left: 10px;
    padding-right: 25px;
    border-style: none none none solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  .sideBarUL li a {
    color: currentcolor
  }

  .sideBarUL li a:hover {
    color: currentcolor;
  }

  .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }

  a.doc-title {
    color: currentcolor;
  }

  .showFrontLine > .active {
    background: #000;
  }

  .showFrontLine .active > a {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary} !important;
  }
  .firstLevel ul li .collapser svg path {
    fill: #dcdcdc !important;
  }
  .active .collapser > svg > path {
    fill: #001933 !important;
  }

  .firstLevel ul .item ul .item {
    border-left: 1px solid #e6ecf1;
  }

  .sideBarUL .item {
    list-style: none;
    padding: 0;
  }

  .sideBarUL .item > a, .sectionHeading {
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 35px;
    padding-left: 15px;
  }


  .sideBarUL .item .item {
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .firstLevel ul .item a {
    padding-left: 30px !important;
  }

  .showFrontLine .item .item {
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
    padding: 0;
  }

  .showFrontLine .item .active > a {
    border:none;
    background-color: ${props => props.theme.colors.primary} !important;
    color: ${props => props.theme.colors.text};
    position: relative;
    z-index: 1;
  }

  .sideBarUL .showFrontLine ul .active > a:before {
    content: "";
    width: 12px;
    height: 24px;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMi4xIDI5LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyLjEgMjkuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzM0ZGOTk7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLDguMWw4LjcsMjEuMWwzLjQtOC4xTDMuNCwwTDAsOC4xeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=");
    background-repeat: no-repeat;
    position: absolute;
    display: inline-block;
    z-index: 0;
    top: 0.65rem;
    left: 0.37rem;
  }


  .sectionHeading:hover {
    cursor: pointer;
  }

  .sectionHeading, a.sectionHeading {
    text-transform: uppercase;
    font-weight: bold !important;
    letter-spacing:1px;
  }

  .sectionHeading ~ * .sectionHeading {
    text-transform: capitalize;
  }

  .titleWrapper {
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: 1px solid rgb(230, 236, 241);
    margin-bottom: 32px;
  }

  .gitBtn {
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .gitBtn img {
    width: 15px;
    display: inline-block;
    margin-right: 5px;
  }

  .addPaddTopBottom {
    padding: 50px 0;
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 16px;
    text-align: right;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
    color: #6e6e6e;
  }

  .smallContent span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 16px;
    flex: 1 1 0%;
  }

  /* tables.css */
  table {
    padding: 0;
  }

  table tr {
    border-top: 1px solid #cccccc;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }
  /* end - tables.css */

  /* Image styling */
  img {
    max-width: 100%;
  }
  /* end image */
  .githubBtn {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 10px 0px;
    padding-left: 15px;
    max-height: 40px;
  }
  .githubBtn span span {
    display: flex;
    align-items: center;
  }

  .communitySection {
    font-size: 24px;
    font-weight: 700;
  }
  .authorSection {
    padding: 20px 0;
  }
  .authorSection,
  .authorName {
    display: flex;
    align-items: center;
  }
  .authorImg img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    max-height: 75px;
  }
  .authorDetails {
    padding-left: 10px;
  }
  .authorDesc {
    padding-top: 5px;
    font-size: 14px;
  }
  .authorName img {
    margin-left: 10px;
    display: inline-block;
    width: 20px;
  }
  .authorName img:hover {
    opacity: 0.7;
  }

  .heading1 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
    letter-spacing: 0.62px
  }

  .heading2 {
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
    letter-spacing: 0.62px
  }

  .heading3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .heading6 {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  .paragraph {
    margin: 16px 0px 32px;
    line-height: 1.625;
  }

  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }
  .topnav {
    -webkit-transition: top 0.5s, bottom 0.5s;
    margin-left: auto;
  }

  @media (max-width: 767px) {
    .formElement svg path {
      fill: rgba(0, 51, 173, 1);
    }
    .visibleMobileView {
      display: block !important;
    }
    .searchInput {
      color: rgba(0, 51, 173, 1);
    }
    .socialWrapper {
      position: absolute;
      right: 10px;
      top: 29px;
    }
    .responsive {
      margin-top: 15px;
      position: relative;
      padding-bottom: 20px;
      border-top: 1px solid #fff;
    }
    .headerTitle {
      padding-right: 50px;
      font-size: 16px;
    }
    .navBarBrand {
      min-height: 40px;
    }
    .navBarBrand img {
      margin-right: 8px;
    }
    .topnav.responsive .visibleMobile {
      display: block;
    }
    .topnav .navBarUL {
      display: none;
    }
    .topnav.responsive .navBarUL {
      display: block;
      text-align: center;
      padding-top: 0.5rem;
    }
    .hiddenMobile {
      display: none !important;
    }
    hr {
      margin-top: 0;
      margin-bottom: 0;
    }
    .navBarParent {
      display: block;
    }
    .separator {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .navBarULRight {
      position: static;
      justify-content: flex-end;
    }
    .navBarUL {
      display: flex;
      align-items: center;
      margin: 7.5px 0px;
    }
    .navBarUL li {
      height: 37px;
    }
    .navBarUL li a {
      font-size: 14px;
      padding: 10px 15px;
    }

    .navBarDefault {
      display: block;
      height: auto;
    }

    .navBarToggle {
      margin-right: 0;
      display: block;
      position: absolute;
      left: 11px;
      top: 15px;
      background: #fff;
    }

    .navBarHeader {
      display: flex;
      min-width: auto;
      padding-right: 0;
      align-items: center;
    }

    .navBarBrand {
      font-size: 20px;
      padding: 0 0;
      padding-left: 0;
      flex: initial;
      padding-right: 15px;
    }

    .titleWrapper {
      padding: 0 15px;
      display: block;
    }

    .gitBtn {
      display: inline-block;
    }

    .mobileView {
      text-align: left !important;
      padding-left: 0 !important;
    }

    .searchWrapper {
      padding: 0px 0;
      padding-top: 0px;
      position: absolute;
      bottom: 0px;
      width: calc(100% - 70px);
      position: absolute;
      left: 40px;
      top: 8px;
    }
    .hitWrapper {
      width: 100%;
      right: 0;
      top: 35px;
      max-height: fit-content;
      position: static;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .navBarDefault {
      padding: 10px;
    }
    .navBarBrand {
      font-size: 22px;
    }
    .navBarHeader {
      min-width: 240px;
      flex: initial;
    }
    .githubBtn {
      padding: 10px 10px;
    }
    .divider {
      margin: 0 5px;
      height: 20px;
    }
    .hitWrapper {
      max-width: 500px;
    }
    .navBarUL li a {
      padding: 10px 5px;
    }
    .searchWrapper {
      padding-left: 0px;
    }
  }

  .item {
    border:none !important;
  }

  .gatsby-resp-image-background-image {
    opacity:0;
  }

  button.sectionHeading {
    cursor:default;
    background:none;
  }
  .accent {
    background-color: rgb(230,236,241);
    height: 1px;
    border-top: none;
  }
`;
