import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between items-center border-gray-300 border-b p-4 m-2 shadow-lg"
        >
          {/* Left Section - Text Content */}
          <div className="w-9/12">
            <div className="font-bold text-gray-700">
              <span>{item?.card?.info?.name}</span>
            </div>
            <div className="text-gray-900">
              <span>₹ {item?.card?.info?.price / 100}</span>
            </div>
            <div className="text-green-900">
              <span>⭐</span>
              {item.card.info.ratings?.aggregatedRating?.rating ?? "No rating available"}
            </div>
            <p className="font-normal text-gray-700">{item?.card?.info?.description}</p>
          </div>

          {/* Right Section - Image with "ADD +" Button */}
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-24 h-24 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            {/* ADD + Button */}
            <button className="absolute bottom-0 right-0 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md hover:bg-gray-600">
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
