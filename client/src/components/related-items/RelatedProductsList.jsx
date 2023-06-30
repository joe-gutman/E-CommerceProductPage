import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';

const axios = require('axios');
import { useSpring, animated } from '@react-spring/web'


const RelatedProductsList = ({currentRelatedProducts, getAvgRating}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [movementIncrement, setMovementIncrement] = useState(0);
  const [cardContainerWidth, setCardContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionLimit, setScrollPositionLimit] = useState(0);
  const [leftArrowDiv, setLeftArrowDiv] =useState(null)
  const [rightArrowDiv, setRightArrowDiv] =useState(null)

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
  }, [])

  useEffect ( () => {
    resizeObserver.unobserve(document.getElementById("related-products-box"))
    resizeObserver.observe(document.getElementById("related-products-box"))
  }, [relatedProducts])

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      var boxWidth = document.getElementsByClassName("box")[0].offsetWidth;
      var cardMargin = Number(getComputedStyle(document.getElementsByClassName("card")[0]).marginLeft.replace(/px$/,"")) + Number(getComputedStyle(document.getElementsByClassName("card")[0]).marginRight.replace(/px$/,""));
      var cardWidth = cardMargin + document.getElementsByClassName("card")[0].offsetWidth;
      setMovementIncrement((boxWidth) - (boxWidth%cardWidth));
      setCardContainerWidth(cardWidth*productCount.length); // Container for all cards, and not viewer
      setScrollPositionLimit(cardContainerWidth-movementIncrement);


    }
  })




  const handleArrow = (e) => {

    var newPosition;
    if (e.target.id === "left-arrow") {
      newPosition = scrollPosition + movementIncrement;
      if (Math.abs(scrollPosition) > 0) {
        api.start({
          from: {
            x: scrollPosition,
          },
          to: {
            x: newPosition,
          },
        })
        setScrollPosition(scrollPosition + movementIncrement)


      }
    } else if (e.target.id === "right-arrow") {
      newPosition = scrollPosition - movementIncrement;
      if (Math.abs(scrollPosition) <  scrollPositionLimit) {
        api.start({
          from: {
            x: scrollPosition,
          },
          to: {
            x: newPosition,
          },
        })
        setScrollPosition(scrollPosition - movementIncrement)

      }

    }

    // if (scrollPosition < 0) {
    //   setLeftArrowDiv(() => <div className = "arrow" id= "left-arrow" onClick = {handleArrow}> ⬅️ </div>)
    // } else {
    //   setLeftArrowDiv(() => <></>)
    // }
    // console.log('leftarrdiv', leftArrowDiv)

    console.log(Math.abs(scrollPosition));
    console.log((cardContainerWidth-movementIncrement))
  }


  var productCount = [...Array(18).keys()];

  return (
    <>
    <div className = "wrapper" >
      <div className="box" id= "related-products-box" >
        {/* {leftArrowDiv} */}
        {scrollPosition < 0 ? (
        <div className = "arrow" id= "left-arrow" onClick = {handleArrow}> ⬅️ </div> )
          : (<></>)
          }
          <animated.div className = "inner-box" style = {{...springs}}>

            {/* {relatedProducts.map((product, index) => (
              <RelatedCard key = {index} product = {product} id = {product.id} name = {product.name} category = {product.category} price = {product.default_price} avgRating = {product.avgRating} features = {product.features} image = {product.results[0].photos[0].url || "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png"} />
            ))} */}

            {productCount.map(() => (
              <RelatedCard />
            ))}
          </animated.div>
          {Math.abs(scrollPosition) >= scrollPositionLimit ? (<></>)
        : (
          <div className = "arrow" id= "right-arrow" onClick = {handleArrow}> ➡️ </div> )
         }
      </div>
    </div>
    </>
  )
}




export default RelatedProductsList;