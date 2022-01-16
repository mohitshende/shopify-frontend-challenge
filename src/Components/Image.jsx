import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ImageGrid.css";

const Image = ({ image }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="card">
      <img
        className="card-image"
        src={image.thumbnail_url ? image.thumbnail_url : image.url}
        alt={image.title}
      />
      <div className="image-content">
        <h2 className="title">{image.title}</h2>
        <span className="date">{image.date}</span>
        <p className="explanation">{image.explanation}</p>
        {isLiked ? (
          <FavoriteIcon
            className="heart-icon heart"
            fontSize="large"
            color="error"
            onClick={() => setIsLiked(!isLiked)}
          />
        ) : (
          <FavoriteBorderIcon
            className="heart"
            fontSize="large"
            onClick={() => setIsLiked(!isLiked)}
          />
        )}
      </div>
    </article>
  );
};

export default Image;
