import { useState, useEffect } from "react";
import Shimmer from "./Components/Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  console.log(resid);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
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
    city,
  } = resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;

  // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[0].card.info.name

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards?.[2]?.card?.card?.info?.sla;
  console.log(itemCards);
  return (
    <div>
      <div className="resInfocard">
        <h1>{name}</h1>
        <h2>{city}</h2>
        <h3>
          ⭐{avgRatingString} ~ {costForTwoMessage}
        </h3>
        <h3>{cuisines?.join(" , ")}</h3>
        <h3>{locality}</h3>
        <h3>
          {minDeliveryTime}-{maxDeliveryTime} mins
        </h3>
        <h3>{areaName}</h3>

        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} ~ ₹ {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
