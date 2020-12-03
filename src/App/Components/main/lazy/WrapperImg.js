import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import { Col, Image } from "react-bootstrap";

function WrapperImg({ image }) {
  return (
    <VisibilitySensor once>
      {({ isVisible }) => (
        <Col md={4}>
          <Spring delay={100} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <Image
                src={image.src}
                alt={image.alt}
                style={{ opacity }}
                className="img-thumbnail mt-3"
              />
            )}
          </Spring>
        </Col>
      )}
    </VisibilitySensor>
  );
}

export default WrapperImg;
