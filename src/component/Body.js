import React from "react";
import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockdata";

import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  //useState takes the function which takes the current value to change the
  const [listOfRestraunts, setListOfRestraunt] = useState(
    //   [
    //   {
    //     info: {
    //       id: "456986",
    //       name: "Domino's Pizza",
    //       cloudinaryImageId: "clcpnrfs8dz1xcrlbhwr",
    //       locality: "Somwar Peth",
    //       areaName: "Rasta Peth",
    //       costForTwo: "₹400 for two",
    //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    //       avgRating: 3.9,
    //       feeDetails: {
    //         restaurantId: "456986",
    //         fees: [
    //           {
    //             name: "BASE_DISTANCE",
    //             fee: 4200,
    //           },
    //           {
    //             name: "BASE_TIME",
    //           },
    //           {
    //             name: "ANCILLARY_SURGE_FEE",
    //           },
    //         ],
    //         totalFee: 4200,
    //       },
    //       parentId: "2456",
    //       avgRatingString: "3.9",
    //       totalRatingsString: "500+",
    //       sla: {
    //         deliveryTime: 25,
    //         serviceability: "SERVICEABLE",
    //         slaString: "25 mins",
    //         iconType: "ICON_TYPE_EMPTY",
    //       },
    //       availability: {
    //         nextCloseTime: "2023-12-03 23:55:00",
    //         opened: true,
    //       },
    //       badges: {},
    //       isOpen: true,
    //       type: "F",
    //       badgesV2: {
    //         entityBadges: {
    //           imageBased: {},
    //           textBased: {},
    //           textExtendedBadges: {},
    //         },
    //       },
    //       aggregatedDiscountInfoV3: {
    //         header: "25% OFF",
    //         discountTag: "FLAT DEAL",
    //       },
    //       orderabilityCommunication: {
    //         title: {},
    //         subTitle: {},
    //         message: {},
    //         customIcon: {},
    //       },
    //       differentiatedUi: {
    //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         differentiatedUiMediaDetails: {
    //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //           lottie: {},
    //           video: {},
    //         },
    //       },
    //       reviewsSummary: {},
    //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       restaurantOfferPresentationInfo: {},
    //     },
    //     analytics: {
    //       context: "seo-data-a57a1116-9f84-4cf2-b796-d442b85e1352",
    //     },
    //     cta: {
    //       link: "https://www.swiggy.com/restaurants/dominos-pizza-somwar-peth-rasta-peth-pune-456986",
    //       text: "RESTAURANT_MENU",
    //       type: "WEBLINK",
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    //   },
    //   {
    //     info: {
    //       id: "243625",
    //       name: "KFC",
    //       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    //       locality: "Deccan Gymkhana",
    //       areaName: "Deccan Gymkhana",
    //       costForTwo: "₹400 for two",
    //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //       avgRating: 4,
    //       feeDetails: {
    //         restaurantId: "243625",
    //         fees: [
    //           {
    //             name: "BASE_DISTANCE",
    //             fee: 4700,
    //           },
    //           {
    //             name: "BASE_TIME",
    //           },
    //           {
    //             name: "ANCILLARY_SURGE_FEE",
    //           },
    //         ],
    //         totalFee: 4700,
    //       },
    //       parentId: "547",
    //       avgRatingString: "4.0",
    //       totalRatingsString: "1K+",
    //       sla: {
    //         deliveryTime: 26,
    //         lastMileTravel: 2,
    //         serviceability: "SERVICEABLE",
    //         slaString: "26 mins",
    //         lastMileTravelString: "2.0 km",
    //         iconType: "ICON_TYPE_EMPTY",
    //       },
    //       availability: {
    //         nextCloseTime: "2023-12-04 02:00:00",
    //         opened: true,
    //       },
    //       badges: {},
    //       isOpen: true,
    //       type: "F",
    //       badgesV2: {
    //         entityBadges: {
    //           imageBased: {},
    //           textBased: {},
    //           textExtendedBadges: {},
    //         },
    //       },
    //       aggregatedDiscountInfoV3: {
    //         header: "40% OFF",
    //         subHeader: "UPTO ₹80",
    //       },
    //       orderabilityCommunication: {
    //         title: {},
    //         subTitle: {},
    //         message: {},
    //         customIcon: {},
    //       },
    //       differentiatedUi: {
    //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         differentiatedUiMediaDetails: {
    //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //           lottie: {},
    //           video: {},
    //         },
    //       },
    //       reviewsSummary: {},
    //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       restaurantOfferPresentationInfo: {},
    //     },
    //     analytics: {
    //       context: "seo-data-a57a1116-9f84-4cf2-b796-d442b85e1352",
    //     },
    //     cta: {
    //       link: "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
    //       text: "RESTAURANT_MENU",
    //       type: "WEBLINK",
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    //   },
    //   {
    //     info: {
    //       id: "774703",
    //       name: "McDonald's",
    //       cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
    //       locality: "FC Road",
    //       areaName: "Shivaji Nagar",
    //       costForTwo: "₹400 for two",
    //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    //       avgRating: 4.5,
    //       feeDetails: {
    //         restaurantId: "774703",
    //         fees: [
    //           {
    //             name: "BASE_DISTANCE",
    //             fee: 4200,
    //           },
    //           {
    //             name: "BASE_TIME",
    //           },
    //           {
    //             name: "ANCILLARY_SURGE_FEE",
    //           },
    //         ],
    //         totalFee: 4200,
    //       },
    //       parentId: "630",
    //       avgRatingString: "4.5",
    //       totalRatingsString: "100+",
    //       sla: {
    //         deliveryTime: 24,
    //         lastMileTravel: 1.8,
    //         serviceability: "SERVICEABLE",
    //         slaString: "24 mins",
    //         lastMileTravelString: "1.8 km",
    //         iconType: "ICON_TYPE_EMPTY",
    //       },
    //       availability: {
    //         nextCloseTime: "2023-12-04 00:00:00",
    //         opened: true,
    //       },
    //       badges: {},
    //       isOpen: true,
    //       aggregatedDiscountInfoV2: {},
    //       type: "F",
    //       badgesV2: {
    //         entityBadges: {
    //           imageBased: {},
    //           textBased: {},
    //           textExtendedBadges: {},
    //         },
    //       },
    //       orderabilityCommunication: {
    //         title: {},
    //         subTitle: {},
    //         message: {},
    //         customIcon: {},
    //       },
    //       differentiatedUi: {
    //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         differentiatedUiMediaDetails: {
    //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //           lottie: {},
    //           video: {},
    //         },
    //       },
    //       reviewsSummary: {},
    //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       isNewlyOnboarded: true,
    //       restaurantOfferPresentationInfo: {},
    //     },
    //     analytics: {
    //       context: "seo-data-a57a1116-9f84-4cf2-b796-d442b85e1352",
    //     },
    //     cta: {
    //       link: "https://www.swiggy.com/restaurants/mcdonalds-fc-road-shivaji-nagar-pune-774703",
    //       text: "RESTAURANT_MENU",
    //       type: "WEBLINK",
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    //   },
    //   {
    //     info: {
    //       id: "768373",
    //       name: "Samudra Veg",
    //       cloudinaryImageId: "e18e58b3bbd76ee7e61bd8b41f4c3d3e",
    //       locality: "Sarasbaug",
    //       areaName: "Swargate",
    //       costForTwo: "₹500 for two",
    //       cuisines: ["Indian"],
    //       avgRating: 4.3,
    //       veg: true,
    //       feeDetails: {
    //         restaurantId: "768373",
    //         fees: [
    //           {
    //             name: "BASE_DISTANCE",
    //             fee: 4200,
    //           },
    //           {
    //             name: "BASE_TIME",
    //           },
    //           {
    //             name: "ANCILLARY_SURGE_FEE",
    //           },
    //         ],
    //         totalFee: 4200,
    //       },
    //       parentId: "176775",
    //       avgRatingString: "4.3",
    //       totalRatingsString: "20+",
    //       sla: {
    //         deliveryTime: 27,
    //         lastMileTravel: 2.4,
    //         serviceability: "SERVICEABLE",
    //         slaString: "27 mins",
    //         lastMileTravelString: "2.4 km",
    //         iconType: "ICON_TYPE_EMPTY",
    //       },
    //       availability: {
    //         nextCloseTime: "2023-12-03 23:00:00",
    //         opened: true,
    //       },
    //       badges: {},
    //       isOpen: true,
    //       aggregatedDiscountInfoV2: {},
    //       type: "F",
    //       badgesV2: {
    //         entityBadges: {
    //           imageBased: {},
    //           textBased: {},
    //           textExtendedBadges: {},
    //         },
    //       },
    //       orderabilityCommunication: {
    //         title: {},
    //         subTitle: {},
    //         message: {},
    //         customIcon: {},
    //       },
    //       differentiatedUi: {
    //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //         differentiatedUiMediaDetails: {
    //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
    //           lottie: {},
    //           video: {},
    //         },
    //       },
    //       reviewsSummary: {},
    //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //       isNewlyOnboarded: true,
    //       restaurantOfferPresentationInfo: {},
    //     },
    //     analytics: {
    //       context: "seo-data-a57a1116-9f84-4cf2-b796-d442b85e1352",
    //     },
    //     cta: {
    //       link: "https://www.swiggy.com/restaurants/samudra-veg-sarasbaug-swargate-pune-768373",
    //       text: "RESTAURANT_MENU",
    //       type: "WEBLINK",
    //     },
    //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    //   },
    // ]
    resList
  );

  const [fileredRestraunt , setfileredRestraunt] = useState([])
  const [searchText, setSearchText] = useState(""); //as we dont have any default value
  //this function will call the component rendering is done
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestraunt(
      json?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants
    ); //updating the data from the api :) with the help of useState

    setfileredRestraunt(
      json?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering

  //so here the with the help of listOfRestraunts we are filtering the data of restraunts
  

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => {
          setSearchText(e.target.value)
        }}></input>
        <button
          onClick={() => {
            console.log(searchText);
          const  fileredRestraunt = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfileredRestraunt(fileredRestraunt)
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          filteredList = listOfRestraunts.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestraunt(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restraunt-container">
        {fileredRestraunt.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;

//there are two types of import named and default

//to import the named import we use curly brances {}

// to import the default impports we can directly import
