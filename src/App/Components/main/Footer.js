import LazyLoad from "react-lazyload";
import loadable from "@loadable/component";

const Container = loadable(() => import("./lazy/FooterContainer"));

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <LazyLoad once>
        <Container />
      </LazyLoad>
    </footer>
  );
}

export default Footer;
