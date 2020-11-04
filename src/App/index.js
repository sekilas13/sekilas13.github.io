import { Fragment, useContext, useEffect, useState } from "react";
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
import { Context } from "./utils/stateProvider";
import { observer } from "mobx-react";

function App() {
  const store = useContext(Context);
  const [mountedComponent, SET_mountedComponent] = useState(false);

  useEffect(() => {
    SET_mountedComponent(true);
    // eslint-disable-next-line
  }, []);

  const themeMode = store.theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) {
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
            <Navigasi />
            <JumbotronTop />
            <Deskripsi />
            <KataOrang />
            <Gambar />
            <Footer />
          </SimpleReactLightbox>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default observer(App);
