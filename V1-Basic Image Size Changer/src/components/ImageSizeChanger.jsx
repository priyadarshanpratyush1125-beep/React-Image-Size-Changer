
import { useState } from "react";
import sampleImage from "../assets/sample.jpg";
const ImageSizeChanger = () => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);

  function increaseHeight() {
    setHeight((prevHeight) => prevHeight + 10);
  }

  function decreaseHeight() {
    setHeight((prevHeight) => Math.max(10, prevHeight - 10));
  }

  function increaseWidth() {
    setWidth((prevWidth) => prevWidth + 10);
  }

  function decreaseWidth() {
    setWidth((prevWidth) => Math.max(10, prevWidth - 10));
  }

  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h2>Image Size Changer - V1</h2>

      <img
        src={sampleImage}
        alt="Sample"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          objectFit: "fill",
          border: "1px solid black",
        }}
      />

      <p>Height: {height}px</p>
      <button onClick={increaseHeight}>Height +</button>
      <button onClick={decreaseHeight}>Height -</button>

      <p>Width: {width}px</p>
      <button onClick={increaseWidth}>Width +</button>
      <button onClick={decreaseWidth}>Width -</button>
    </div>
  );
};

export default ImageSizeChanger;
