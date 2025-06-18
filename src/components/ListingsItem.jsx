import FoodListingItem from "./FoodListingsItem";

function ListingItem() {
  return (
    <section className="listings-section">
      <FoodListingItem
        image="/burger.jpg"
        title="Cheese Burger"
        description="Cheesy, juicy, tasty warm beef burger"
        price="40.00"
        rating="5"
        discount="10"
      />
    </section>
  );
}

export default ListingItem;
