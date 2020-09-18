import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function KataOrang() {
  const [index, setIndex] = useState(4);

  const [ukuran, setUkuran] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const item = [
    {
      alt: "Gambar 1",
      capt: [
        "Edwin",
        "Bagus, karna mereka slalu membuat penemuan yang mengejutkan",
      ],
    },
    {
      alt: "Gambar 2",
      capt: [
        "Luthfi Jatmiko",
        "Eskulnya santai sih, bercanda juga iya. Bukanya ga serius tapi biar nyaman aja",
      ],
    },
  ];

  useEffect(() => {
    const curr = document.querySelector("#KataOrang");
    const Ubah = { width: curr.offsetWidth, height: curr.offsetHeight };
    setUkuran(Object.assign({}, Ubah));

    window.addEventListener("resize", function () {
      const forUbah = { width: curr.offsetWidth, height: curr.offsetHeight };
      setUkuran(Object.assign({}, forUbah));
    });
  }, []);

  return (
    <section id="KataOrang">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {item.map((key, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={`https://dummyimage.com/${ukuran.width}x${ukuran.height}/373940/fff&text=+`}
              alt={key.alt}
            />
            <Carousel.Caption>
              <h3>{key.capt[0]}</h3>
              <p>{key.capt[1]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default KataOrang;
