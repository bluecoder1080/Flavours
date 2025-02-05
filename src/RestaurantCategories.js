import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {

  const[showData, setshowData] = useState(false);

  const handleClick =() => {
    setshowData(!showData);
  } 
  return (
    <div className=" w-6/12 mx-auto my-4   font-bold ">
        <div className="flex justify-between my-7 text-lg cursor-pointer " onClick={handleClick}>
      <span>
   
        {data.title}({data?.itemCards?.length}){" "}
      </span>
      <span>⤵️</span>
      </div>
      {/* Accordian Body */}
      { showData && <ItemList  items = {data?.itemCards}/>}
    </div>
  );
};

export default RestaurantCategories;
