import { FaStar } from "react-icons/fa";

function FoodListingItem({
  image,
  title,
  description,
  price,
  rating,
  discount,
}) {
  return (
    <div className="food-card-wrapper">
      <div
        className="image-content-wrapper"
        style={{
          backgroundImage: `url(${image || "/image-placeholder.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {discount > 0 && (
          <p className="discount">{Math.trunc((discount / price) * 100)}%</p>
        )}
        {rating > 0 && (
          <div className="rating-wrapper">
            <FaStar className="star-icon" />
            <span>{Number(rating).toFixed(2)}</span>
          </div>
        )}
      </div>
      <div className="food-content-wrapper">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="price">
          ${(price - discount).toFixed(2) || Number(price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default FoodListingItem;
