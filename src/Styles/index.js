import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: Roboto, sans-serif;
    }
`;

export const defaultTheme = {
  // Colors:
  purple: "#A580FF",
  backgroundWhite: "#FFFFFF",
  black: "#000000",
  black05: "rgba(0, 0, 0, 0.05)",
  black10: "rgba(0, 0, 0, 0.1)",
  black20: "rgba(0, 0, 0, 0.2)",
  black50: "rgba(0, 0, 0, 0.5)",
  black60: "rgba(0, 0, 0, 0.6)",
  white20: "rgba(250, 250, 250, 0.2)",
  postsBackground: "#f2f2f2",

  // LINEAR GRADIENT
  linearGradientGradButton: "linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%)",

  // Box Shadows:
  boxShadowButton: "box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07)",
  boxShadowFriends: "box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05)",

  // Text Size
  textSizeL: "40px",
  textSizeM: "30px",
  textSizeUserName: "24px",
  textSizeTitle: "22px",
  textSizeDefault: "16px",
  textSizeS: "14px",
  textSizeXS: "12px",
  textSizeXXS: "10px",

  // Text Weight
  textWeightRegular: "400",
  textWeightMedium: "500"
};
