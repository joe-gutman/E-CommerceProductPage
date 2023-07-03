import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import NoImage from '../../assets/image-not-available.png';
import LeftArrow from '../../assets/icons8-arrow-left-black.png';
import RightArrow from '../../assets/icons8-arrow-right-black.png';
import ResizeObserver from 'resize-observer-polyfill';


const axios = require('axios');
import { useSpring, animated } from '@react-spring/web'


const RelatedProductsList = ({currentRelatedProducts, getAvgRating, currentProduct, handleProductCardClick }) => {

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
  }, [currentProduct])

  useEffect ( () => {
    resizeObserver.unobserve(document.getElementById("related-products-box"))
    resizeObserver.observe(document.getElementById("related-products-box"))
  }, [relatedProducts])

  useEffect(() => {
    setScrollPositionLimit(cardContainerWidth - movementIncrement);
  }, [cardContainerWidth, movementIncrement]);

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      var boxWidth = document.getElementsByClassName("box")[0].offsetWidth;
      var cardElements = document.getElementsByClassName("card");
      if (cardElements.length > 0) {
        var cardMargin = Number(getComputedStyle(document.getElementsByClassName("card")[0]).marginLeft.replace(/px$/,"")) + Number(getComputedStyle(document.getElementsByClassName("card")[0]).marginRight.replace(/px$/,""));
        var cardWidth = cardMargin + document.getElementsByClassName("card")[0].offsetWidth;
        setMovementIncrement((boxWidth) - (boxWidth%cardWidth));
        setCardContainerWidth(cardWidth*relatedProducts.length); // Container for all cards, and not viewer
        // setScrollPositionLimit(cardContainerWidth-movementIncrement);
      }
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

    console.log('postion',Math.abs(scrollPosition));
    console.log((cardContainerWidth-movementIncrement))
  }

// console.log(currentProduct)
  // var productCount = [...Array(4).keys()];


  return (
    <>
      <div className = "wrapper" >
        <div className="box" id= "related-products-box" >
          {scrollPosition < 0 ? (
          <div className = "arrow" id= "left-arrow" onClick = {handleArrow} style={{backgroundImage:`url(${LeftArrow})`}}>  </div> )
            : (<></>)
            }
            <animated.div className = "inner-box" style = {{...springs}}>
              {relatedProducts.map((product, index) => (
                <RelatedCard key = {index} product = {product} id = {product.id} name = {product.name} category = {product.category} price = {product.default_price} avgRating = {product.avgRating} features = {product.features} image = {product.results[0].photos[0].url || NoImage} currentProduct = {currentProduct} handleProductCardClick={handleProductCardClick} />
              ))}

              {/* {productCount.map(() => (
                <RelatedCard />
              ))} */}
            </animated.div>
            {Math.abs(scrollPosition) >= scrollPositionLimit ? (<></>)
          : (
            <div className = "arrow" id= "right-arrow" onClick = {handleArrow} style={{backgroundImage:`url(${RightArrow})`}}> </div> )
          }
        </div>
      </div>
    </>
  )
}




export default RelatedProductsList;