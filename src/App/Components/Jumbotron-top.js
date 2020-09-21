import React, { useState, useRef, useEffect } from "react";
import LogoSakral from "../assets/Img/KIR.png";
import { useSpring, useTransition, animated } from "react-spring";
import { Row, Jumbotron, Container } from "react-bootstrap";

function JumbotronTop() {
  const ref = useRef();
  const [{ offset }, setOffset] = useSpring(() => ({ offset: 0 }));
  const calc = (o) => `translateY(${o * 0.17}px)`;
  const calc2 = (o) => `translateY(${o * 0.1}px)`;
  const calc3 = (o) => `translateY(${o * 0.08}px)`;

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    setOffset({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 675 });

  const [untukTransisi] = useState(true);
  const transisi = useTransition(untukTransisi, null, {
    from: { transform: "translate3d(0,200px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <Jumbotron fluid ref={ref}>
      <Container>
        {transisi.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <Row className="justify-content-center">
                  <animated.img
                    src={LogoSakral}
                    className="img-fluid text-center rounded"
                    alt="Logo KIR"
                    style={{
                      transform: offset.interpolate(calc),
                      overflow: "hidden",
                    }}
                  />
                </Row>
              </animated.div>
            )
        )}
        <animated.div style={fadeIn}>
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
        </animated.div>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronTop;
