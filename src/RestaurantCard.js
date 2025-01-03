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
       <div className="res-card">
         <img className="sf1" src={ CDN_URL + resdata.info.cloudinaryImageId}  />
         <h3>{name}</h3>
         <h4>{cuisines.join(" , ")}</h4>
         <h4>{avgRatingString} Stars</h4>
         <h4>{sla.deliveryTime} Minutes</h4>
         <h4>{locality}</h4>
       </div>
     );
   };

   export default RestaurantCard;