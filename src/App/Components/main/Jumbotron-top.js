import { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Row, Jumbotron, Container } from "react-bootstrap";

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
          <animated.img
            src={process.env.PUBLIC_URL + "/assets/real/KIR.png"}
            className="img-fluid text-center rounded"
            alt="Logo KIR"
            style={{
              transform: offset.interpolate(calc),
              overflow: "hidden",
            }}
          />
        </Row>
        <Row className="justify-content-center">
          <animated.h2
            style={{
              transform: offset.interpolate(calc2),
              overflow: "hidden",
            }}
            id="tsukilas"
          >
            Sekilas !
          </animated.h2>
        </Row>
        <Row className="justify-content-center">
          <animated.p
            style={{
              transform: offset.interpolate(calc3),
              overflow: "hidden",
            }}
          >
            Semangat KIR Tiga Belas !
          </animated.p>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronTop;
