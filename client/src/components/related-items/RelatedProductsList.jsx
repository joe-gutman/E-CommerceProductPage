import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';

const axios = require('axios');
import { useSpring, animated } from '@react-spring/web'


const RelatedProductsList = ({currentRelatedProducts, getAvgRating}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [movementIncrement, setMovementIncrement] = useState(0);
  const [cardContainerWidth, setCardContainerWidth] = useState(0);

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },

  }))

  useEffect ( () => {
    var axiosHeaders = {headers:{"Authorization" : process.env.AUTH_SECRET}};

    var endpoints = [];

    currentRelatedProducts.map((relatedId) => {

      endpoints.push(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${relatedId}`,`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/products/${relatedId}/styles`, `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS}/reviews/meta?product_id=${relatedId}`);
    });

    axios.all(endpoints.map((endpoint) => axios.get(endpoint, axiosHeaders)))
    .then((results) => {

      var relatedItemData = {};
      for (var i = 2; i < results.length; i+=3) {
       relatedItemData[results[i].data.product_id]= ({...results[i-1].data, ...results[i-2].data, avgRating: getAvgRating(results[i].data.ratings)})
      }
      setRelatedProducts(Object.values(relatedItemData));
    })

    var boxWidth = document.getElementsByClassName("box")[0].offsetWidth;
    var cardMargin = Number(getComputedStyle(document.getElementsByClassName("card")[0]).marginLeft.replace(/px$/,"")) + Number(getComputedStyle(document.getElementsByClassName("card")[0]).marginRight.replace(/px$/,""));
    var cardWidth = cardMargin + document.getElementsByClassName("card")[0].offsetWidth;
    setMovementIncrement((boxWidth) - (boxWidth%cardWidth));
    setCardContainerWidth(cardWidth*productCount.length);

  }, [])

  var position = 0;


  const handleArrow = (e) => {

    var newPosition;
    if (e.target.id === "left-arrow") {
      newPosition = position + movementIncrement;
      if (Math.abs(position) > 0) {
        api.start({
          from: {
            x: position,
          },
          to: {
            x: newPosition,
          },
        })
        position += movementIncrement
      }
    } else if (e.target.id === "right-arrow") {
      newPosition = position - movementIncrement;
      if (Math.abs(position) <  cardContainerWidth-movementIncrement) {
        api.start({
          from: {
            x: position,
          },
          to: {
            x: newPosition,
          },
        })
        position -= movementIncrement
      }
    }

  }

  var productCount = [...Array(16).keys()];

  return (
    <>
    <div className = "wrapper" >
      <div className="box">
        <div className = "arrow" id= "left-arrow" onClick = {handleArrow}> ⬅️ </div>

          <animated.div className = "inner-box" style = {{...springs}}>

            {/* {relatedProducts.map((product, index) => (
              <RelatedCard key = {index} product = {product} id = {product.id} name = {product.name} category = {product.category} price = {product.default_price} avgRating = {product.avgRating} features = {product.features} image = {product.results[0].photos[0].url || "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"} />

            ))} */}

            {productCount.map(() => (
              <RelatedCard />
            ))}
          </animated.div>
        <div className = "arrow" id= "right-arrow" onClick = {handleArrow}> ➡️ </div>
      </div>
    </div>
    </>
  )
}




export default RelatedProductsList;