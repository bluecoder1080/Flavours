import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  console.log(data);
  return (
    <div className=" w-6/12 mx-auto my-4   font-bold ">
        <div className="flex justify-between">
      <span>
   
        {data.title}({data.itemCards.length}){" "}
      </span>
      <span>⤵️</span>
      </div>
      {/* Accordian Body */}
      <ItemList  items = {data.itemCards}/>
    </div>
  );
};

export default RestaurantCategories;
