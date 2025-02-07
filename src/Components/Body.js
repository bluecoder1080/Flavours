import RestaurantCard from "../RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [filterd, setfiltered] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3174112&lng=82.9738892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      );
      const json = await data.json();
      
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      setfiltered(restaurants);
      setAllRestaurants(restaurants); 
    
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks Like You Are Offline</h1>;
  }

  if (!filterd || filterd.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button 
            className="px-4 py-2 bg-green-200 m-4 rounded-xl"
            onClick={() => {
              if (!allRestaurants) return;
              const searchedRestaurants = allRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfiltered(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center rounded-xl">
          <button
            className="p-2 bg-gray-500 rounded-xl font-bold text-gray-100 hover:text-orange-400"
            onClick={() => {
              if (!allRestaurants) return;
              const filterdList = allRestaurants.filter(
                (resdata) => parseFloat(resdata?.info?.avgRatingString || 0) > 4.2
              );
              setfiltered(filterdList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap">
        {filterd.map((restaurant) => (
          <Link
            to={"/RestaurantInfo/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <RestaurantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
