import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/Logo.jpeg";


const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}; // Step 2 Header Section

const restaurants = [
    {
      "info" : {
        "id": "112782",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/f0d437f9-9fa8-4e6c-a202-89b0058e7a15_112782.jpg",
        "locality": "Dampier Nagar",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "3.5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/pizza-hut-dampier-nagar-shankar-vihar-rest112782",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "104421",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/bf00fa5f-0c8c-47b4-a312-63808716c3bf_104421.jpg",
        "locality": "Dampier Nagar",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 02:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/dominos-pizza-dampier-nagar-shankar-vihar-rest104421",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "631701",
        "name": "Burger Budds",
        "cloudinaryImageId": "kl6bxuddumlkordb8rt9",
        "locality": "Geeta Enclave",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Beverages",
          "Pizzas",
          "Italian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "457202",
        "avgRatingString": "4.2",
        "totalRatingsString": "541",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹149",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/burger-budds-geeta-enclave-krishna-nagar-rest631701",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "815082",
        "name": "Barista Coffee",
        "cloudinaryImageId": "d8061a234209ddf1bbb00c588a25a478",
        "locality": "Nagar Palika",
        "areaName": "Ward No.10",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "416281",
        "avgRatingString": "4.2",
        "totalRatingsString": "103",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹2000",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/barista-coffee-nagar-palika-ward-no-10-rest815082",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "606344",
        "name": "Winni Cakes & More",
        "cloudinaryImageId": "w71vu4mnxqaye3mggtfr",
        "locality": "Govardhan Road\n",
        "areaName": "Krishna Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Pizzas",
          "Burgers",
          "Pastas"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "226144",
        "avgRatingString": "4.4",
        "totalRatingsString": "561",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/winni-cakes-and-more-govardhan-road-krishna-nagar-rest606344",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "861508",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/bdb0f427-9f62-4c0d-a0e1-db70fcc75d65_861508.jpg",
        "locality": "Dampier Nagar",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 4,
        "parentId": "306806",
        "avgRatingString": "4.0",
        "totalRatingsString": "31",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/pastas-by-pizza-hut-dampier-nagar-shankar-vihar-rest861508",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "676805",
        "name": "Hotel Taj",
        "cloudinaryImageId": "697f82a44ce19e4ef51c9c93dd38bdf3",
        "locality": "Sonkh Road",
        "areaName": "Sonkh road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Mughlai",
          "Afghani"
        ],
        "avgRating": 4,
        "parentId": "20795",
        "avgRatingString": "4.0",
        "totalRatingsString": "673",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/hotel-taj-sonkh-road-rest676805",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "580164",
        "name": "Vadilal Ice Creams",
        "cloudinaryImageId": "edf6aa61ed4cdfcda130897c5b3e5255",
        "locality": "Krishna Nagar \n",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Cakes",
          "Beverages",
          "Bakery"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "11745",
        "avgRatingString": "4.7",
        "totalRatingsString": "454",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 21:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/vadilal-ice-creams-krishna-nagar-shankar-vihar-rest580164",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "570252",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_570252.JPG",
        "locality": "Bhuteshwar Road",
        "areaName": "BSA Degree College",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "5.0K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/burger-king-bhuteshwar-road-bsa-degree-college-rest570252",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "726012",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "Bhuteswar Road",
        "areaName": "Dwarikapuri",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.5",
        "totalRatingsString": "146",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/the-belgian-waffle-co-bhuteswar-road-dwarikapuri-rest726012",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "113141",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Mahavidya Road",
        "areaName": "Shankar Vihar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.3",
        "totalRatingsString": "405",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 01:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/baskin-robbins-ice-cream-desserts-mahavidya-road-shankar-vihar-rest113141",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "111959",
        "name": "Wah Ji Wah",
        "cloudinaryImageId": "567d42e44367e1668be8ce741ee7a383",
        "locality": "Ward No.10",
        "areaName": "KRISHNA NAGAR MATHURA",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 3.5,
        "veg": true,
        "parentId": "966",
        "avgRatingString": "3.5",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "25% OFF",
          "subHeader": "ABOVE ₹1399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/wah-ji-wah-ward-no-10-krishna-nagar-mathura-rest111959",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "112706",
        "name": "Gianis - Ice Cream, Shakes & Sundaes",
        "cloudinaryImageId": "2365e2117e199c2b9a2cfa643c31b05c",
        "locality": "Govind Nagar \n",
        "areaName": "Shankar_Vihar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "427371",
        "avgRatingString": "4.6",
        "totalRatingsString": "706",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/gianis-ice-cream-shakes-and-sundaes-govind-nagar-shankar-vihar-rest112706",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "131568",
        "name": "Gola Patties & Bakers",
        "cloudinaryImageId": "cdpqpwwbylsqcs2yjuxd",
        "locality": "Dampier Nagar",
        "areaName": "BSA College",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Street Food",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "parentId": "453323",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.0K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/gola-patties-and-bakers-dampier-nagar-bsa-college-rest131568",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "111972",
        "name": "The Foodies Bar",
        "cloudinaryImageId": "e0820e6d68739110a44258ff13ad27f9",
        "locality": "Moti Manzil",
        "areaName": "Moti_Manzil",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Momos",
          "Fast Food",
          "Italian",
          "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "208595",
        "avgRatingString": "4.4",
        "totalRatingsString": "470",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-22 00:20:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/the-foodies-bar-moti-manzil-rest111972",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "514660",
        "name": "Yogiraj Hotel and Restaurant",
        "cloudinaryImageId": "pjg9qbdqls1t54mglwqp",
        "locality": "Junction Road\n",
        "areaName": "Dampier_Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "453999",
        "avgRatingString": "4.2",
        "totalRatingsString": "770",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/yogiraj-hotel-and-restaurant-junction-road-dampier-nagar-rest514660",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "559279",
        "name": "The Momo's Cafe",
        "cloudinaryImageId": "af1b9153dd66017bf271b75b0b9956ac",
        "locality": "Chaitanya Vihar",
        "areaName": "Vrindavan",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Italian",
          "Chinese",
          "Pizzas",
          "Burgers"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "336175",
        "avgRatingString": "4.3",
        "totalRatingsString": "758",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "8.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Momos.png",
              "description": "Delivery!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Akash/Listing%20badge.png",
              "shortDescription": "Price Match Promise",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Momos.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Akash/Listing%20badge.png",
                    "shortDescription": "Price Match Promise"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/the-momos-cafe-chaitanya-vihar-vrindavan-rest559279",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "460841",
        "name": "Vrinda Fast Food",
        "cloudinaryImageId": "ndokuymmchxv72j2nbep",
        "areaName": "Vrindavan Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Fast Food",
          "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "276634",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 51,
          "lastMileTravel": 9.5,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "9.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Akash/Listing%20badge.png",
              "shortDescription": "Price Match Promise",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Akash/Listing%20badge.png",
                    "shortDescription": "Price Match Promise"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/vrinda-fast-food-vrindavan-locality-rest460841",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "446389",
        "name": "Mittal Foods",
        "cloudinaryImageId": "09293a7d13978ad5f1217ac709324401",
        "locality": "Saraswatikund",
        "areaName": "Masani",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks",
          "Tandoor",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "268846",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.8K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-21 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-0e8c3008-8d31-4aea-ab50-b33a0335ca95"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/mathura/mittal-foods-saraswatikund-masani-rest446389",
        "type": "WEBLINK"
      }
    },
  ]


const RestaurantCard = (props) => {

   

 const { resdata } = props;

    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
       
        locality

    } = resdata?.info

    
  return (
    <div className="res-card">
      <img className="sf1" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}  />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{resdata.info.sla.deliveryTime} Minutes</h4>
      <h4>{locality}</h4>
    </div>
  );
};



const Body = () => {
  // Step 3 Body Section
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">

     { restaurants.map((restaurant) => 
    (<RestaurantCard key = {restaurant.info.id} resdata = {restaurant}/>))}
        {/* <RestaurantCard resdata={restaurants[0]} /> */}
       
        

    
        
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
