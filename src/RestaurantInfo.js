import Shimmer from "./Components/Shimmer";
import { useParams } from "react-router";
import RestaurantMenuHook from "../utils/RestaurantMenuHook";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantInfo = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();

  const resInfo = RestaurantMenuHook(resid);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRatingString,
    areaName,
    city,
  } = resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card
      ?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards?.[2]?.card?.card?.info?.sla;
  // console.log(itemCards);
  return (
    <div>
      <div className="w-6/12 mx-auto  my-4 bg-gray-50 relative p-4 border-4 border-transparent rounded-lg bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-border shadow-md">
        <h1 className=" font-bold  text-2xl mt-6 m-5 ">{name}</h1>
        <div className="my-5 m-5 ">
          <h3 className="font-bold text-lg ">
            ⭐{avgRatingString} ~ {costForTwoMessage}
          </h3>
          <h3 className="font-medium text-red-600 underline">
            {cuisines?.join(" , ")}
          </h3>
          <span className="font-semibold">Outlet </span>
          <span className="font-light">{locality}</span>
          <h3 className="font-semibold">
            {minDeliveryTime}-{maxDeliveryTime} mins
          </h3>
        </div>
      </div>

      {/* Categories  */}

      {categories?.map((Category) => (
        <RestaurantCategories data={Category?.card?.card} />
      ))}

      {/* {categories.map((Category) => {
        <RestaurantCategories  />;
      })} */}
    </div>
  );
};

export default RestaurantInfo;
