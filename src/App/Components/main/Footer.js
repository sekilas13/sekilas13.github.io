import { Container, Row, Col } from "react-bootstrap";
import { InView } from "react-intersection-observer";
import { Transition } from "react-spring/renderprops";

const From = { transform: "translate3d(0,10px,0)", opacity: 0 };
const Enter = { transform: "translate3d(0,0px,0)", opacity: 1 };
const Leave = { opacity: 0 };

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="pt-3 justify-content-center text-center">
          <Col md={4}>
            <InView>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <Transition
                    items={inView}
                    from={From}
                    enter={Enter}
                    leave={Leave}
                  >
                    {(show) =>
                      show &&
                      ((props) => (
                        <p style={props}>
                          Ada pertanyaan ? Tanyakan lewat email{" "}
                          <a href="mailto:smpn13kir@gmail.com">
                            smpn13kir@gmail.com
                          </a>
                        </p>
                      ))
                    }
                  </Transition>
                </div>
              )}
            </InView>
          </Col>
          <Col md={4}>
            <InView>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <Transition
                    items={inView}
                    from={From}
                    enter={Enter}
                    leave={Leave}
                    config={{
                      duration: 1500,
                    }}
                  >
                    {(show) =>
                      show &&
                      ((props) => (
                        <p style={props}>
                          Dibuat oleh{" "}
                          <a
                            href="https://github.com/sekilas13"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Karya Ilmiah Remaja
                          </a>{" "}
                          SMP Negeri 13 Bekasi | {new Date().getFullYear()}
                        </p>
                      ))
                    }
                  </Transition>
                </div>
              )}
            </InView>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
