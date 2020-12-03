import VisibilitySensor from "react-visibility-sensor";
import loadRealImage from "../../../utils/loadRealImage";
import { Spring } from "react-spring/renderprops";
import { Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";

function WrapperImg({ image }) {
  const [src, setSrc] = useState(image.placeholder);
  const [firstTimeVisible, setFTV] = useState(false);

  useEffect(() => {
    if (firstTimeVisible) {
      loadRealImage(image.src).then(() => setSrc(image.src));
    }
  }, [firstTimeVisible]);

  const onChangeVisible = (isVisible) => {
    if (!firstTimeVisible) {
      if (isVisible) setFTV(true);
    }
  };

  return (
    <VisibilitySensor once onChange={onChangeVisible}>
      {({ isVisible }) => (
        <Col md={4}>
          <Spring delay={100} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <Image
                src={src}
                alt={image.alt}
                style={{ opacity, width: "100%" }}
                className="img-fluid img-thumbnail mt-3"
              />
            )}
          </Spring>
        </Col>
      )}
    </VisibilitySensor>
  );
}

export default WrapperImg;
