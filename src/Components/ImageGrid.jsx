import { useEffect, useState } from "react";
import Image from "./Image";
import "./ImageGrid.css";

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      await fetch(`${process.env.REACT_APP_NASA_API}&count=9&thumbs=true`)
        .then((res) => res.json())
        .then((data) => setImages(data))
        .catch((err) => console.log(err));
      setLoading(false);
    };
    getImages();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderContainer">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="cards">
          {images.map((image) => {
            return <Image image={image} key={image.date} />;
          })}
        </div>
      )}
    </>
  );
};

export default ImageGrid;
