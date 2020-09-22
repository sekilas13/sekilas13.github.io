import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.jumbotron.bg} !important;
    transition: all 0.2s linear;
  }

  .jumbotron {
    background: ${({ theme }) => theme.jumbotron.bg} !important;
    color: ${({ theme }) => theme.jumbotron.color};
    transition: all 0.50s linear;
  }

  #deskripsi {
    background: ${({ theme }) => theme.deskripsi.bg} !important;
    transition: all 0.50s linear;
  }

  #deskripsi h2 {
    color: ${({ theme }) => theme.deskripsi.h2};
    transition: all 0.50s linear;
  }

  #deskripsi p {
    color: ${({ theme }) => theme.deskripsi.p};
    transition: all 0.50s linear;
  }
  `;
