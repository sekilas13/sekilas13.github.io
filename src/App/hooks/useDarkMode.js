import { useEffect, useContext } from "react";
import { Context } from "../utils/stateProvider";

export const useDarkMode = () => {
  const store = useContext(Context);

  const themeColor = document.querySelector('meta[name="theme-color"]');
  const msApp = document.querySelector('meta[name="msapplication-TileColor"]');

  const light = "#f0efeb";
  const dark = "#323234";

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    store.setTheme(mode);
  };

  const themeToggler = () => {
    if (store.theme === "light") {
      setMode("dark");
      themeColor.content = dark;
      msApp.content = dark;
    } else {
      setMode("light");
      themeColor.content = light;
      msApp.content = light;
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? store.setTheme(localTheme) : setMode("light");
    if (localTheme && localTheme === "light") {
      themeColor.content = light;
      msApp.content = light;
    } else {
      themeColor.content = dark;
      msApp.content = dark;
    }
    // eslint-disable-next-line
  }, []);

  return [themeToggler];
};
