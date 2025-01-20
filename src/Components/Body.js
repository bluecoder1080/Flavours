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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setfiltered(restaurants);
    setAllRestaurants(restaurants); // Save the original list
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks Like You Are Offline</h1>;
  }

  if (filterd.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex ">
        <div className="  m-4 p-4">
{/* ********************************************************Search Button *********************************** */}
        <form method="GET" action="">
  <div class="bg-white border-2 shadow p-2 relative rounded-xl flex">
    <span class="w-auto flex justify-end items-center text-gray-500 p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </span>
    <input
      name="episodequery"
      id="title"
      class="border-white outline-none border-0 w-full rounded-xl p-2"
      type="text"
      placeholder="What are you looking for?"
      value={searchtext}
      onChange={(e) => setsearchtext(e.target.value)}
    />
    <button
      type="button"
      class="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
      onClick={() => {
        const searchedRestaurants = allRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchtext.toLowerCase())
        );
        setfiltered(searchedRestaurants);
      }}
    >
      <p class="font-semibold text-xs">Search</p>
    </button>
  </div>
</form>
{/* **********************************************************Till Here*************************************** */}
          {/* <input
            type="text"
            className="  border border-solid border-black"
            value={searchtext}
            onChange={(e) => setsearchtext(e.target.value)}
          />
          <button 
            className="px-4 py-2 bg-green-200 m-4 rounded-xl"
            onClick={() => {
              const searchedRestaurants = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfiltered(searchedRestaurants);
            }}
          >
            Search
          </button> */}
        </div>
        <div className=" m-4 p-4 flex items-center rounded-xl">
        <button
          className="p-2 bg-gray-500 rounded-xl font-bold text-gray-100 hover:text-orange-400"
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
       

       
      </div>
      {/* http://localhost:1234/RestaurantInfo/82141http://localhost:1234/RestaurantInfo/82141 */}
      <div className="flex flex-wrap">
        {filterd.map((restaurant) => (
          <Link
            to={"/RestaurantInfo/" + restaurant.info.id}
            key={restaurant.info.id}
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
