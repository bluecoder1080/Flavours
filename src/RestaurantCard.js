import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

     

    const { resdata } = props;
   
       const{
           cloudinaryImageId,
           name,
           cuisines,
           avgRatingString,
          sla,
           locality
   
       } = resdata?.info
   
       
     return (
       <div className="m-4 p-4 w-60 bg-gray-100 rounded-lg hover:bg-slate-200">
         <img className="rounded-lg" src={ CDN_URL + resdata.info.cloudinaryImageId}  />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <div>
         <h4 className="font-medium">⭐{avgRatingString} • {sla.deliveryTime} Minutes</h4> 
        
         </div>
        
         <h4 className="font-light truncate w-64 overflow-hidden w-full">{cuisines.join(" , ")}</h4>
         
         
         <h4 className="font-light">{locality}</h4>
       </div>
     );
   };

   export default RestaurantCard;