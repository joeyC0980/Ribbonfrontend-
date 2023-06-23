import React, { useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Ribbons from "../../pages/ribbons/Ribbons";
import "./products.css";


const Products = () => {
  const { data, loading, error } = useFetch(
    // "/hotels/countByCity?cities=New York,Tulum,Los Angeles"
  );


const navigate = useNavigate();

const handleClick = async () => {

    navigate("./ribbons");

};


  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i5.walmartimages.com/asr/0cf153d6-2a30-4984-8ee4-2fa46e4a981d.c2993d7a1f75d78a83f599b0a5365a73.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt=""
              className="featuredImg"
              onClick={handleClick}
           
            />
            <div className="featuredTitles">
              <h1>Aisle One</h1>
              <h2>{data[0]} products</h2>

            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://nsbseattle.files.wordpress.com/2015/09/nsb-rr-df-satin-and-petersham.jpg"
              alt=""
              className="featuredImg"
              onClick={handleClick}
            
            />
            <div className="featuredTitles">
              <h1>Aisle Two</h1>
              <h2>{data[1]} products</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.shopify.com/s/files/1/0146/7242/products/studio_carta_38mm_ribbon_shop5_04565dde-2680-4ba6-b8dc-23d29d4a6e3e_800x.jpg?v=1685049012"
              alt=""
              className="featuredImg"
              onClick={handleClick}
             
            />
            <div className="featuredTitles">
              <h1>Aisle Three</h1>
              <h2>{data[2]} products</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;