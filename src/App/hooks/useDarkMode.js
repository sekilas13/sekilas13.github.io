import { useEffect, useContext } from "react";
import { Context } from "../utils/stateProvider";

export const useDarkMode = () => {
  const store = useContext(Context);
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    store.setTheme(mode);
  };

  const themeToggler = () => {
    store.theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? store.setTheme(localTheme) : setMode("light");
    // eslint-disable-next-line
  }, []);

  return [themeToggler];
};
