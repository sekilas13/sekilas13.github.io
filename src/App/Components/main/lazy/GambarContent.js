import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Row, Col, Image, Container } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import gambar from "../../../assets/data/Gambar";

const GambarMap = () => (
  <SimpleReactLightbox>
    <SRLWrapper>
      <Container className="pt-4">
        <Row>
          {gambar.map((g, i) => (
            <VisibilitySensor once key={i}>
              {({ isVisible }) => (
                <Col md={4}>
                  <Spring delay={100} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <Image
                        src={g.src}
                        alt={g.alt}
                        style={{ opacity }}
                        className="img-thumbnail mt-3"
                      />
                    )}
                  </Spring>
                </Col>
              )}
            </VisibilitySensor>
          ))}
        </Row>
      </Container>
    </SRLWrapper>
  </SimpleReactLightbox>
);

export default GambarMap;
