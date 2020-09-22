import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .jumbotron {
    background: ${({ theme }) => theme.jumbotron.bg} !important;
    color: ${({ theme }) => theme.jumbotron.color};
    transition: all 0.50s linear;
  }
  `;
