
import { useEffect, useState } from "react";

const ImageSizeChanger = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [scale, setScale] = useState(1);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImageUrl(URL.createObjectURL(file));

      setOriginalWidth(0);
      setOriginalHeight(0);
      setWidth(0);
      setHeight(0);
      setScale(1);
    }

    // Allows selecting the same file again.
    event.target.value = "";
  }

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  function handleImageLoad(event) {
    const img = event.target;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    setOriginalWidth(naturalWidth);
    setOriginalHeight(naturalHeight);

    setWidth(naturalWidth);
    setHeight(naturalHeight);
    setScale(1);
  }

  function increaseHeight() {
    setHeight((prev) => prev + 10);
  }

  function decreaseHeight() {
    setHeight((prev) => Math.max(10, prev - 10));
  }

  function increaseWidth() {
    setWidth((prev) => prev + 10);
  }

  function decreaseWidth() {
    setWidth((prev) => Math.max(10, prev - 10));
  }

  function increaseRatio() {
    if (!originalWidth || !originalHeight) return;

    const newScale = scale * 1.1;

    setScale(newScale);
    setWidth(Math.round(originalWidth * newScale));
    setHeight(Math.round(originalHeight * newScale));
  }

  function decreaseRatio() {
    if (!originalWidth || !originalHeight) return;

    const newScale = Math.max(0.1, scale / 1.1);

    setScale(newScale);
    setWidth(Math.round(originalWidth * newScale));
    setHeight(Math.round(originalHeight * newScale));
  }

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h2>Image Size Changer - V3</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      <br /><br />

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          onLoad={handleImageLoad}
          style={{
            height: height ? `${height}px` : "auto",
            width: width ? `${width}px` : "auto",
            objectFit: "fill",
            border: "1px solid black",
          }}
        />
      )}

      {originalWidth > 0 && originalHeight > 0 && (
        <>
          <p>
            Original dimensions: {originalWidth} × {originalHeight}px
          </p>

          <p>
            Current dimensions: {width} × {height}px
          </p>

          <p>Independent resizing</p>

          <button onClick={increaseHeight}>Height +</button>
          <button onClick={decreaseHeight}>Height -</button>

          <br /><br />

          <button onClick={increaseWidth}>Width +</button>
          <button onClick={decreaseWidth}>Width -</button>

          <p>Proportional resizing</p>

          <button onClick={increaseRatio}>
            Maintain Ratio +
          </button>

          <button onClick={decreaseRatio}>
            Maintain Ratio -
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSizeChanger;
