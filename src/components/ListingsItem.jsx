import FoodListingItem from "./FoodListingsItem";
import foodListings from "../data/foodData";

function ListingItem() {
  return (
    <section className="listings-section">
      {foodListings.map((listing) => {
        return (
          <FoodListingItem
            image={listing.image}
            title={listing.title}
            description={listing.description}
            price={listing.price}
            rating={listing.rating}
            discount={listing.discount}
          />
        );
      })}
    </section>
  );
}

export default ListingItem;
