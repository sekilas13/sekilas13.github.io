const loadRealImage = (src) =>
  new Promise((resolve) => {
    const image = new window.Image();
    image.onload = resolve;
    image.src = src;
  });

export default loadRealImage;
