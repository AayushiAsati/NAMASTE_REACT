import React from "react";
import {CDN_URL} from "../utils/constant";
const RestrauntCard = (props) => {
    const {resData} = props 
    console.log(resData) //getting the data from props 
    return (
      <div className="restraunt-card">
        <img className="logo" src = {CDN_URL+resData.info.cloudinaryImageId} ></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(". ")}</h4>
        <h3>{resData.info.avgRating}</h3>
      </div>
    )
  }

  
  export default RestrauntCard;