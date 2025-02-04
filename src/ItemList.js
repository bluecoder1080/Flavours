const ItemList = ({ items }) => {
    return (
      <div className="">
        {items.map((item) => (
          <div key={item.card.info.id}
          className="border border-gray-600 p-2 m-2">
            <div>
              <span>{item.card.info.name}</span>
            </div>
            <div>
              <span>Rs. {item?.card?.info?.price/100}</span>
            </div>
            <div>
              <span>⭐</span>
              {item.card.info.ratings?.aggregatedRating?.rating ?? "No rating available"}
            </div>
            <p>{item?.card?.info?.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  
