import { Row, Col, Image } from "react-bootstrap";
import gambar from "../../../assets/data/Gambar";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const GambarMap = () => (
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
);

export default GambarMap;
