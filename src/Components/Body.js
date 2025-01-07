import RestaurantCard from "../RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setfiltered(restaurants);
    setAllRestaurants(restaurants); // Save the original list
  };

  if (filterd.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedRestaurants = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfiltered(searchedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = allRestaurants.filter(
              (resdata) => resdata.info.avgRatingString > 4.2
            );
            setfiltered(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* http://localhost:1234/RestaurantInfo/82141http://localhost:1234/RestaurantInfo/82141 */}
      <div className="res-container">
        {filterd.map((restaurant) => (
          <Link to={"/RestaurantInfo/"+restaurant.info.id } style={{ textDecoration: 'none', color: 'inherit' }}>
          <RestaurantCard key={restaurant.info.id} resdata={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
