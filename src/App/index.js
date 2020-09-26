import React, { Fragment, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";
import { GlobalStyles } from "./assets/GlobalStyles";
import {
  Navigasi,
  JumbotronTop,
  Deskripsi,
  KataOrang,
  Gambar,
  Footer,
} from "./Components";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  const [state, UNSAFE_setState] = useState({
    theme: "light",
    mountedComponent: false,
  });
  const setState = (data) => UNSAFE_setState({ ...state, ...data });

  useEffect(() => {
    setState({ mountedComponent: true });
    // eslint-disable-next-line
  }, []);

  const themeMode = state.theme === "light" ? lightTheme : darkTheme;

  if (!state.mountedComponent) {
    return (
      <div className="row justify-content-center mt-5">
        <div
          className="spinner-border text-primary mt-5"
          style={{
            fontSize: "2rem",
            width: "5rem",
            height: "5rem",
          }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <ThemeProvider theme={themeMode}>
        <Fragment>
          <GlobalStyles />
          <SimpleReactLightbox>
            <Navigasi tToggler={setState} />
            <JumbotronTop />
            <Deskripsi />
            <KataOrang theme={state.theme} />
            <Gambar />
            <Footer />
          </SimpleReactLightbox>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
