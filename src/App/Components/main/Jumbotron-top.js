import { useSpring } from "react-spring";
import { useRef, useEffect, Suspense, lazy } from "react";
import { Row, Jumbotron, Container } from "react-bootstrap";

const Gambar = lazy(() => import("./lazy/JumbonImg"));
const H2 = lazy(() => import("./lazy/JumbonH2"));
const P = lazy(() => import("./lazy/JumbonP"));

function JumbotronTop() {
  const ref = useRef();
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }));
  const calc = (o) => `translateY(${o * 0.17}px)`;
  const calc2 = (o) => `translateY(${o * 0.1}px)`;
  const calc3 = (o) => `translateY(${o * 0.08}px)`;

  const handleScroll = () => {
    if (ref.current) {
      const posY = ref.current.getBoundingClientRect().top;
      const offset = window.pageYOffset - posY;
      setOffset({ offset });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Jumbotron fluid ref={ref}>
      <Container>
        <Row className="justify-content-center">
          <Suspense
            fallback={
              <img
                src={process.env.PUBLIC_URL + "/assets/real/KIR.png"}
                className="img-fluid text-center rounded"
                alt="Logo KIR"
              />
            }
          >
            <Gambar offset={offset} calc={calc} />
          </Suspense>
        </Row>
        <Row className="justify-content-center">
          <Suspense fallback={<h2 id="tsukilas">Sekilas !</h2>}>
            <H2 offset={offset} calc2={calc2} />
          </Suspense>
        </Row>
        <Row className="justify-content-center">
          <Suspense fallback={<p>Semangat KIR Tiga Belas !</p>}>
            <P offset={offset} calc3={calc3} />
          </Suspense>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronTop;
