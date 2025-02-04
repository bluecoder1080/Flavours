import Shimmer from "./Components/Shimmer";
import { useParams } from "react-router";
import RestaurantMenuHook from "../utils/RestaurantMenuHook";

const RestaurantInfo = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();

  const resInfo = RestaurantMenuHook(resid);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resid);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json?.data);
  // };

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

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
      <div className="resInfocard">
        <h1 className=" font-bold text-center text-lg my-6 text-2xl">{name}</h1>
        
        <h3 className="font-bold text-lg">
          ⭐{avgRatingString} ~ {costForTwoMessage}
        </h3>
        <h3 className="font-medium text-red-600 underline">{cuisines?.join(" , ")}</h3>
        <span className="font-semibold">Outlet </span>
        <span className="font-light">{locality}</span>
        <h3 className="font-semibold">
          {minDeliveryTime}-{maxDeliveryTime} mins
        </h3>
  

      </div>
    </div>
  );
};

export default RestaurantInfo;
