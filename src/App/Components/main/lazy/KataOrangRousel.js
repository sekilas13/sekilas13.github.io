import { memo, useMemo, useState } from "react";
import { Carousel } from "react-bootstrap";
import data from "../../../assets/data/Pandangan";

function KataOrangRousel({ ukuran, theme }) {
  const [index, setIndex] = useState(3);

  const handleSelect = useMemo(
    (selectedIndex) => void setIndex(selectedIndex),
    []
  );

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((key, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={`https://via.placeholder.com/${ukuran.width}x${
              ukuran.height
            }/${theme === "light" ? "f1faee" : "373940"}/fff&text=+`}
            alt={key.alt}
            width={ukuran.width}
            height={ukuran.height}
          />
          <Carousel.Caption>
            <h3 style={{ color: theme === "light" ? "000" : "fff" }}>
              {key.capt[0]}
            </h3>
            <p style={{ color: theme === "light" ? "000" : "fff" }}>
              {key.capt[1]}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default memo(KataOrangRousel);
