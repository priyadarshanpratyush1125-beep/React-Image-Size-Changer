import { useEffect, useState } from "react";

const ImageSizeChanger = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);

      setImageUrl((previousUrl) => {
        if (previousUrl) {
          URL.revokeObjectURL(previousUrl);
        }
        return url;
      });

      setHeight(100);
      setWidth(100);
    }
  }

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

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

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "600px",
        borderRadius: "10px",
      }}
    >
      <h2>Image Size Changer - V2</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      {imageUrl && (
        <>
          <div style={{ margin: "20px 0" }}>
            <img
              src={imageUrl}
              alt="Uploaded preview"
              style={{
                height: `${height}px`,
                width: `${width}px`,
                objectFit: "fill",
                border: "1px solid black",
                maxWidth: "100%",
              }}
            />
          </div>

          <p>Height: {height}px</p>

          <button onClick={increaseHeight}>
            Height +
          </button>{" "}
          <button onClick={decreaseHeight}>
            Height -
          </button>

          <p>Width: {width}px</p>

          <button onClick={increaseWidth}>
            Width +
          </button>{" "}
          <button onClick={decreaseWidth}>
            Width -
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSizeChanger;
