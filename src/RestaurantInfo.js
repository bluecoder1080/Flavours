import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import Shimmer from "./Components/Shimmer";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3174112&lng=82.9738892&restaurantId=463019&catalog_qa=undefined&submitAction=ENTER#"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
  } = resInfo?.cards?.[2]?.card?.card?.info;

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards?.[2]?.card?.card?.info.sla;

  const { price, description } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card
      .itemCards[0].card.info;

  // const { aggregatedRating } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[5].card.card
  //     .itemCards[0].card.info.ratings;
  return (
    <div>
      <div className="resInfocard">
        <h1>{name}</h1>
        <h3>
          ⭐{avgRatingString} ~ {costForTwoMessage}
        </h3>
        <h3>{cuisines.join(" , ")}</h3>

        <h3>{locality}</h3>
        <h3>
          {minDeliveryTime}-{maxDeliveryTime} mins
        </h3>
        <h3>{locality}</h3>
      </div>
    </div>
  );
};

export default RestaurantInfo;
