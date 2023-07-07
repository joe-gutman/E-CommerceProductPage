import React from 'react';
import { render, within, waitFor, fireEvent, screen, getByTestId, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, {RelatedItems, getAvgRating} from '../client/src/index.jsx';
import RelatedProductsList from '../client/src/components/related-items/RelatedProductsList.jsx';

import OutfitCard from '../client/src/components/related-items/OutfitCard.jsx';
import ActionButtonRelated from '../client/src/components/related-items/ActionButtonRelated.jsx';
import ActionButtonOutfit from "../client/src/components/related-items/ActionButtonOutfit.jsx";
import YourOutfitList from '../client/src/components/related-items/YourOutfitList.jsx';
import RelatedCard from '../client/src/components/related-items/RelatedCard.jsx';
require('dotenv').config();


const fetchCurrentRelatedIds = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  var currentRelatedProducts = [
    40346,
    40350,
    40349,
    40348
  ]
  return currentRelatedProducts;
}

const fetchRelatedProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  var relatedProducts = [
    {
        "product_id": "40346",
        "results": [
            {
                "style_id": 240510,
                "name": "Black",
                "original_price": "40.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ],
                "skus": {
                    "1394805": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "1394806": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "1394807": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "1394808": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "1394809": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "1394810": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 240511,
                "name": "Grey",
                "original_price": "40.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1394811": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "1394812": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "1394813": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "1394814": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "1394815": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "1394816": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 240512,
                "name": "Goldenrod",
                "original_price": "40.00",
                "sale_price": "35.00",
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
                    }
                ],
                "skus": {
                    "1394817": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "1394818": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "1394819": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "1394820": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "1394821": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "1394822": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 240513,
                "name": "Maroon",
                "original_price": "40.00",
                "sale_price": "35.00",
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ],
                "skus": {
                    "1394823": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "1394824": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "1394825": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "1394826": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "1394827": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "1394828": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 240514,
                "name": "Chartreuse",
                "original_price": "40.00",
                "sale_price": "25.00",
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
                    }
                ],
                "skus": {
                    "1394829": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "1394830": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "1394831": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "1394832": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "1394833": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "1394834": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            },
            {
                "style_id": 240515,
                "name": "White",
                "original_price": "40.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    }
                ],
                "skus": {
                    "1394835": {
                        "quantity": 8,
                        "size": "XS"
                    },
                    "1394836": {
                        "quantity": 16,
                        "size": "S"
                    },
                    "1394837": {
                        "quantity": 17,
                        "size": "M"
                    },
                    "1394838": {
                        "quantity": 10,
                        "size": "L"
                    },
                    "1394839": {
                        "quantity": 15,
                        "size": "XL"
                    },
                    "1394840": {
                        "quantity": 6,
                        "size": "XXL"
                    }
                }
            }
        ],
        "id": 40346,
        "campus": "hr-rfp",
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40.00",
        "created_at": "2021-08-13T14:38:44.509Z",
        "updated_at": "2021-08-13T14:38:44.509Z",
        "features": [
            {
                "feature": "Fabric",
                "value": "100% Cotton"
            },
            {
                "feature": "Cut",
                "value": "Skinny"
            }
        ],
        "avgRating": 3.48
    },
    {
        "product_id": "40348",
        "results": [
            {
                "style_id": 240525,
                "name": "White & White",
                "original_price": "99.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ],
                "skus": {
                    "1394895": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394896": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394897": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394898": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394899": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394900": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394901": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394902": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394903": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394904": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394905": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240526,
                "name": "White & Red",
                "original_price": "99.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    }
                ],
                "skus": {
                    "1394906": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394907": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394908": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394909": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394910": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394911": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394912": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394913": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394914": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394915": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394916": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240527,
                "name": "White & Black",
                "original_price": "99.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                    }
                ],
                "skus": {
                    "1394917": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394918": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394919": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394920": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394921": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394922": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394923": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394924": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394925": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394926": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394927": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240528,
                "name": "White & Blue",
                "original_price": "99.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    }
                ],
                "skus": {
                    "1394928": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394929": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394930": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394931": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394932": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394933": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394934": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394935": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394936": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394937": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394938": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        ],
        "id": 40348,
        "campus": "hr-rfp",
        "name": "Heir Force Ones",
        "slogan": "A sneaker dynasty",
        "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
        "category": "Kicks",
        "default_price": "99.00",
        "created_at": "2021-08-13T14:38:44.509Z",
        "updated_at": "2021-08-13T14:38:44.509Z",
        "features": [
            {
                "feature": "Sole",
                "value": "Rubber"
            },
            {
                "feature": "Material",
                "value": "FullControlSkin"
            },
            {
                "feature": "Mid-Sole",
                "value": "ControlSupport Arch Bridge"
            },
            {
                "feature": "Stitching",
                "value": "Double Stitch"
            }
        ],
        "avgRating": 3.5
    },
    {
        "product_id": "40349",
        "results": [
            {
                "style_id": 240529,
                "name": "White",
                "original_price": "89.00",
                "sale_price": null,
                "default?": true,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
                    },
                    {
                        "thumbnail_url": "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1394939": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394940": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394941": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394942": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394943": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394944": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394945": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394946": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394947": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394948": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394949": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240530,
                "name": "Black",
                "original_price": "89.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
                    }
                ],
                "skus": {
                    "1394950": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394951": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394952": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394953": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394954": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394955": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394956": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394957": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394958": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394959": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394960": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        ],
        "id": 40349,
        "campus": "hr-rfp",
        "name": "Pumped Up Kicks",
        "slogan": "Faster than a just about anything",
        "description": "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
        "category": "Kicks",
        "default_price": "89.00",
        "created_at": "2021-08-13T14:38:44.509Z",
        "updated_at": "2021-08-13T14:38:44.509Z",
        "features": [
            {
                "feature": "Sole",
                "value": "Rubber"
            },
            {
                "feature": "Material",
                "value": "FullControlSkin"
            },
            {
                "feature": "Mid-Sole",
                "value": "ControlSupport Arch Bridge"
            },
            {
                "feature": "Stitching",
                "value": "Double Stitch"
            }
        ],
        "avgRating": 3.36
    },
    {
        "product_id": "40350",
        "results": [
            {
                "style_id": 240531,
                "name": "White Sole",
                "original_price": "120.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1394961": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394962": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394963": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394964": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394965": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394966": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394967": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394968": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394969": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394970": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394971": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240532,
                "name": "Black Sole",
                "original_price": "120.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1394972": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394973": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394974": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394975": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394976": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394977": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394978": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394979": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394980": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394981": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394982": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240533,
                "name": "Tan Sole",
                "original_price": "120.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1394983": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394984": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394985": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394986": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394987": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394988": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1394989": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1394990": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1394991": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1394992": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1394993": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240534,
                "name": "Red Sole",
                "original_price": "120.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1394994": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1394995": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1394996": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1394997": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1394998": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1394999": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1395000": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1395001": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1395002": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1395003": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1395004": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            },
            {
                "style_id": 240535,
                "name": "Yellow Sole",
                "original_price": "120.00",
                "sale_price": null,
                "default?": false,
                "photos": [
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                    },
                    {
                        "thumbnail_url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        "url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    }
                ],
                "skus": {
                    "1395005": {
                        "quantity": 14,
                        "size": "7"
                    },
                    "1395006": {
                        "quantity": 25,
                        "size": "7.5"
                    },
                    "1395007": {
                        "quantity": 9,
                        "size": "8"
                    },
                    "1395008": {
                        "quantity": 2,
                        "size": "8.5"
                    },
                    "1395009": {
                        "quantity": 18,
                        "size": "9"
                    },
                    "1395010": {
                        "quantity": 12,
                        "size": "9.5"
                    },
                    "1395011": {
                        "quantity": 10,
                        "size": "10"
                    },
                    "1395012": {
                        "quantity": 18,
                        "size": "10.5"
                    },
                    "1395013": {
                        "quantity": 11,
                        "size": "11"
                    },
                    "1395014": {
                        "quantity": 35,
                        "size": "11.5"
                    },
                    "1395015": {
                        "quantity": 25,
                        "size": "12"
                    }
                }
            }
        ],
        "id": 40350,
        "campus": "hr-rfp",
        "name": "Blues Suede Shoes",
        "slogan": "2019 Stanley Cup Limited Edition",
        "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
        "category": "Dress Shoes",
        "default_price": "120.00",
        "created_at": "2021-08-13T14:38:44.509Z",
        "updated_at": "2021-08-13T14:38:44.509Z",
        "features": [
            {
                "feature": "Sole",
                "value": "Rubber"
            },
            {
                "feature": "Material",
                "value": "FullControlSkin"
            },
            {
                "feature": "Stitching",
                "value": "Double Stitch"
            }
        ],
        "avgRating": 3.79
    }
  ]

  return relatedProducts;
}


const fetchCurrentProduct = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  var currentProduct = {
    "id": 40345,
    "campus": "hr-rfp",
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z"
}
  return currentProduct;
}


// var expectElementByRole = (testMessage, role, getByRole) => {

//     try{
//       expect(getByRole(role)).toBeTruthy();
//     } catch {
//       throw Error(`Expected component with role= '${role}' to exist`)
//     }
//   }


// /* --------------------------------- Viewing Product in Related List --------------------------- */

var expectElementByRole = (testMessage, role) => {
  test(testMessage, async () => {
      // Render your component
      const currentRelatedProducts = await fetchCurrentRelatedIds();
      const relatedProducts = await fetchRelatedProducts();
      const currentProduct = await fetchCurrentProduct();


      const { getByRole } = render(<RelatedItems currentRelatedProducts = {currentRelatedProducts} currentProduct = {currentProduct} getAvgRating = {getAvgRating} />);

      await waitFor(() => {
        try{
          expect(getByRole(role)).toBeTruthy();
        } catch {
          throw Error(`Expected component with role= '${role}' to exist`)
        }
      })
  })

}

describe("Elements should exist for rendering list views with products", () => {

  expectElementByRole('Users should have way to see displayed related product info and list for outfits they created', "should-show-related-products-and-outfit-list")

  expectElementByRole('Users should have way to learn about related products that may interest them', 'show-related-products')
})


describe("Related products should render in section for related products and allow comparisons", () => {

    var currentRelatedProducts = [
      40346,
      40350,
      40349,
      40348
    ]
      expectElementByRole("Users should have way to see details of related products-3", "show-details-of-related-product-3")

       expectElementByRole("user should be able to compare current product against related products", "Users-should-be-able-click-compare-products-3")

  })


  describe("User outfit list should render in section for adding products to outfit list for easy access", () => {


      expectElementByRole("Users should have way to access products added to outfit list", "show-outfit-products")

    //   expectElementByRole("Users should have way to remove product to outfit products", "user-remove-outfit-product")


    //   var outfitProducts = [
    //     [
    //         {
    //             "id": 40344,
    //             "campus": "hr-rfp",
    //             "name": "Camo Onesie",
    //             "slogan": "Blend in to your crowd",
    //             "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    //             "category": "Jackets",
    //             "default_price": "140.00",
    //             "created_at": "2021-08-13T14:38:44.509Z",
    //             "updated_at": "2021-08-13T14:38:44.509Z"
    //         },
    //         {
    //             "product_id": "40344",
    //             "results": [
    //                 {
    //                     "style_id": 240500,
    //                     "name": "Forest Green & Black",
    //                     "original_price": "140.00",
    //                     "sale_price": null,
    //                     "default?": true,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394769": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394770": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394771": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394772": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394773": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394774": {
    //                             "quantity": 4,
    //                             "size": "XL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240501,
    //                     "name": "Desert Brown & Tan",
    //                     "original_price": "140.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394775": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394776": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394777": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394778": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394779": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394780": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240502,
    //                     "name": "Ocean Blue & Grey",
    //                     "original_price": "140.00",
    //                     "sale_price": "100.00",
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394781": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394782": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394783": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394784": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394785": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394786": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240503,
    //                     "name": "Digital Red & Black",
    //                     "original_price": "140.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
    //                             "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394787": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394788": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394789": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394790": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394791": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394792": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240504,
    //                     "name": "Sky Blue & White",
    //                     "original_price": "140.00",
    //                     "sale_price": "100.00",
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394793": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394794": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394795": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394796": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394797": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394798": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240505,
    //                     "name": "Dark Grey & Black",
    //                     "original_price": "170.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394799": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394800": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394801": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394802": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394803": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394804": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             "avgRating": 3.71
    //         }
    //     ],
    //     [
    //         {
    //             "id": 40350,
    //             "campus": "hr-rfp",
    //             "name": "Blues Suede Shoes",
    //             "slogan": "2019 Stanley Cup Limited Edition",
    //             "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
    //             "category": "Dress Shoes",
    //             "default_price": "120.00",
    //             "created_at": "2021-08-13T14:38:44.509Z",
    //             "updated_at": "2021-08-13T14:38:44.509Z"
    //         },
    //         {
    //             "product_id": "40350",
    //             "results": [
    //                 {
    //                     "style_id": 240531,
    //                     "name": "White Sole",
    //                     "original_price": "120.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394961": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394962": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394963": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394964": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394965": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394966": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394967": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394968": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394969": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394970": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394971": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240532,
    //                     "name": "Black Sole",
    //                     "original_price": "120.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1454024183771-42d54053cd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394972": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394973": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394974": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394975": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394976": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394977": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394978": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394979": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394980": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394981": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394982": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240533,
    //                     "name": "Tan Sole",
    //                     "original_price": "120.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394983": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394984": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394985": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394986": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394987": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394988": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394989": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394990": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394991": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394992": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394993": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240534,
    //                     "name": "Red Sole",
    //                     "original_price": "120.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394994": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394995": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394996": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394997": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394998": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394999": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395000": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395001": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395002": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395003": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395004": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240535,
    //                     "name": "Yellow Sole",
    //                     "original_price": "120.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395005": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395006": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395007": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395008": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395009": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395010": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395011": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395012": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395013": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395014": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395015": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             "avgRating": 3.79
    //         }
    //     ],
    //     [
    //         {
    //             "id": 40346,
    //             "campus": "hr-rfp",
    //             "name": "Morning Joggers",
    //             "slogan": "Make yourself a morning person",
    //             "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    //             "category": "Pants",
    //             "default_price": "40.00",
    //             "created_at": "2021-08-13T14:38:44.509Z",
    //             "updated_at": "2021-08-13T14:38:44.509Z"
    //         },
    //         {
    //             "product_id": "40346",
    //             "results": [
    //                 {
    //                     "style_id": 240510,
    //                     "name": "Black",
    //                     "original_price": "40.00",
    //                     "sale_price": null,
    //                     "default?": true,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394805": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394806": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394807": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394808": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394809": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394810": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240511,
    //                     "name": "Grey",
    //                     "original_price": "40.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394811": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394812": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394813": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394814": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394815": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394816": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240512,
    //                     "name": "Goldenrod",
    //                     "original_price": "40.00",
    //                     "sale_price": "35.00",
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394817": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394818": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394819": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394820": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394821": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394822": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240513,
    //                     "name": "Maroon",
    //                     "original_price": "40.00",
    //                     "sale_price": "35.00",
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394823": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394824": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394825": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394826": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394827": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394828": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240514,
    //                     "name": "Chartreuse",
    //                     "original_price": "40.00",
    //                     "sale_price": "25.00",
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394829": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394830": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394831": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394832": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394833": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394834": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240515,
    //                     "name": "White",
    //                     "original_price": "40.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394835": {
    //                             "quantity": 8,
    //                             "size": "XS"
    //                         },
    //                         "1394836": {
    //                             "quantity": 16,
    //                             "size": "S"
    //                         },
    //                         "1394837": {
    //                             "quantity": 17,
    //                             "size": "M"
    //                         },
    //                         "1394838": {
    //                             "quantity": 10,
    //                             "size": "L"
    //                         },
    //                         "1394839": {
    //                             "quantity": 15,
    //                             "size": "XL"
    //                         },
    //                         "1394840": {
    //                             "quantity": 6,
    //                             "size": "XXL"
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             "avgRating": 3.48
    //         }
    //     ],
    //     [
    //         {
    //             "id": 40345,
    //             "campus": "hr-rfp",
    //             "name": "Bright Future Sunglasses",
    //             "slogan": "You've got to wear shades",
    //             "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    //             "category": "Accessories",
    //             "default_price": "69.00",
    //             "created_at": "2021-08-13T14:38:44.509Z",
    //             "updated_at": "2021-08-13T14:38:44.509Z"
    //         },
    //         {
    //             "product_id": "40345",
    //             "results": [
    //                 {
    //                     "style_id": 240506,
    //                     "name": "Black Lenses & Black Frame",
    //                     "original_price": "69.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": null,
    //                             "url": null
    //                         }
    //                     ],
    //                     "skus": {
    //                         "null": {
    //                             "quantity": null,
    //                             "size": null
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240507,
    //                     "name": "Black Lenses & Gold Frame",
    //                     "original_price": "69.00",
    //                     "sale_price": null,
    //                     "default?": true,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": null,
    //                             "url": null
    //                         }
    //                     ],
    //                     "skus": {
    //                         "null": {
    //                             "quantity": null,
    //                             "size": null
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240508,
    //                     "name": "Gold Lenses & Black Frame",
    //                     "original_price": "69.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": null,
    //                             "url": null
    //                         }
    //                     ],
    //                     "skus": {
    //                         "null": {
    //                             "quantity": null,
    //                             "size": null
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240509,
    //                     "name": "Gold Lenses & Gold Frame",
    //                     "original_price": "69.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": null,
    //                             "url": null
    //                         }
    //                     ],
    //                     "skus": {
    //                         "null": {
    //                             "quantity": null,
    //                             "size": null
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             "avgRating": 3.97
    //         }
    //     ],
    //     [
    //         {
    //             "id": 40351,
    //             "campus": "hr-rfp",
    //             "name": "YEasy 350",
    //             "slogan": "Just jumped over jumpman",
    //             "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
    //             "category": "Kicks",
    //             "default_price": "450.00",
    //             "created_at": "2021-08-13T14:38:44.509Z",
    //             "updated_at": "2021-08-13T14:38:44.509Z"
    //         },
    //         {
    //             "product_id": "40351",
    //             "results": [
    //                 {
    //                     "style_id": 240536,
    //                     "name": "Zebra Stripe",
    //                     "original_price": "900.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395016": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395017": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395018": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395019": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395020": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395021": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395022": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395023": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395024": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395025": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395026": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240537,
    //                     "name": "Oreo",
    //                     "original_price": "750.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395027": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395028": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395029": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395030": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395031": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395032": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395033": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395034": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395035": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395036": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395037": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240538,
    //                     "name": "Red Supply",
    //                     "original_price": "450.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395038": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395039": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395040": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395041": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395042": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395043": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395044": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395045": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395046": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395047": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395048": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240539,
    //                     "name": "White",
    //                     "original_price": "450.00",
    //                     "sale_price": null,
    //                     "default?": true,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395049": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395050": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395051": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395052": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395053": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395054": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395055": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395056": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395057": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395058": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395059": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240540,
    //                     "name": "Black",
    //                     "original_price": "950.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395060": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395061": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395062": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395063": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395064": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395065": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395066": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395067": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395068": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395069": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395070": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240541,
    //                     "name": "Pink",
    //                     "original_price": "450.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395071": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395072": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395073": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395074": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395075": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395076": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395077": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395078": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395079": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395080": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395081": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240542,
    //                     "name": "Green",
    //                     "original_price": "450.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395082": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395083": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395084": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395085": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395086": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395087": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395088": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395089": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395090": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395091": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395092": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240543,
    //                     "name": "Butter",
    //                     "original_price": "450.00",
    //                     "sale_price": "400.00",
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=977&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395093": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395094": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395095": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395096": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395097": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395098": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395099": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395100": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395101": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395102": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395103": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240544,
    //                     "name": "Grey",
    //                     "original_price": "450.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1395104": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1395105": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1395106": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1395107": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1395108": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1395109": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1395110": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1395111": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1395112": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1395113": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1395114": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             "avgRating": 3.81
    //         }
    //     ],
    //     [
    //         {
    //             "id": 40348,
    //             "campus": "hr-rfp",
    //             "name": "Heir Force Ones",
    //             "slogan": "A sneaker dynasty",
    //             "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    //             "category": "Kicks",
    //             "default_price": "99.00",
    //             "created_at": "2021-08-13T14:38:44.509Z",
    //             "updated_at": "2021-08-13T14:38:44.509Z"
    //         },
    //         {
    //             "product_id": "40348",
    //             "results": [
    //                 {
    //                     "style_id": 240525,
    //                     "name": "White & White",
    //                     "original_price": "99.00",
    //                     "sale_price": null,
    //                     "default?": true,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394895": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394896": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394897": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394898": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394899": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394900": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394901": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394902": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394903": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394904": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394905": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240526,
    //                     "name": "White & Red",
    //                     "original_price": "99.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394906": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394907": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394908": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394909": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394910": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394911": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394912": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394913": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394914": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394915": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394916": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240527,
    //                     "name": "White & Black",
    //                     "original_price": "99.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394917": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394918": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394919": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394920": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394921": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394922": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394923": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394924": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394925": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394926": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394927": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 },
    //                 {
    //                     "style_id": 240528,
    //                     "name": "White & Blue",
    //                     "original_price": "99.00",
    //                     "sale_price": null,
    //                     "default?": false,
    //                     "photos": [
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    //                         },
    //                         {
    //                             "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    //                             "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    //                         }
    //                     ],
    //                     "skus": {
    //                         "1394928": {
    //                             "quantity": 14,
    //                             "size": "7"
    //                         },
    //                         "1394929": {
    //                             "quantity": 25,
    //                             "size": "7.5"
    //                         },
    //                         "1394930": {
    //                             "quantity": 9,
    //                             "size": "8"
    //                         },
    //                         "1394931": {
    //                             "quantity": 2,
    //                             "size": "8.5"
    //                         },
    //                         "1394932": {
    //                             "quantity": 18,
    //                             "size": "9"
    //                         },
    //                         "1394933": {
    //                             "quantity": 12,
    //                             "size": "9.5"
    //                         },
    //                         "1394934": {
    //                             "quantity": 10,
    //                             "size": "10"
    //                         },
    //                         "1394935": {
    //                             "quantity": 18,
    //                             "size": "10.5"
    //                         },
    //                         "1394936": {
    //                             "quantity": 11,
    //                             "size": "11"
    //                         },
    //                         "1394937": {
    //                             "quantity": 35,
    //                             "size": "11.5"
    //                         },
    //                         "1394938": {
    //                             "quantity": 25,
    //                             "size": "12"
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             "avgRating": 3.5
    //         }
    //     ]
    // ]
      expectElementByRole("Users should have way to add product to outfit products", "show-details-of-outfit-products")


  })



describe('YourOutfitList should render products to outfit list and add outfits to the list ', () => {
    const currentProduct = {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      default_price: 10,
    };

    const currentProductStyles = {
      results: [
        {
          photos: [
            {
              url: 'image-url',
            },
          ],
        },
      ],
    };

    const currentProductAvgRating = 4.5;

    it('Outfit list should provide ability to store and add products without errors', () => {
        render(<YourOutfitList />);
        // No assertions needed. The test will fail if there are any rendering errors.
      });

      it('Outfit list initially renders with an empty outfit list', () => {
        render(<YourOutfitList />);
        const outfitCards = screen.queryAllByTestId((value, element) =>
          value.startsWith('outfit-card-')
        );
        expect(outfitCards.length).toBe(0);
      });

    beforeEach(() => {
      render(
        <YourOutfitList
          getAvgRating={() => {}}
          currentProduct={currentProduct}
          currentProductStyles={currentProductStyles}
          currentProductAvgRating={currentProductAvgRating}

        />
      );
    });

    it('User should be able to utilize Add to Outfit button', () => {
        const addButton = screen.getByTestId('add-button'); // Updated to use data-testid
        expect(addButton).toBeInTheDocument();
      });

    it('User should be able to generate products in outfit cards', () => {
        const outfitCards = screen.getAllByRole('show-details-of-outfit-products');
        expect(outfitCards.length).toBeGreaterThan(0);
    });

  });

  describe('OutfitCard should render correct product information and have button functionality when clicked', () => {
    const product = {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      price: 10,
    };
    const image = 'image-url';
    const avgRating = 4.5;
    const handleRemove = jest.fn();
    const handleProductCardClick = jest.fn();


    it('User can access product details on product card in list', () => {
      render(
        <OutfitCard
          product={product}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          avgRating={avgRating}
          image={image}
          handleRemove={handleRemove}
          handleProductCardClick={handleProductCardClick}
        />
      );

      const productImage = screen.getByAltText('product image');
      const cardDetails = screen.getByRole('show-details-of-outfit-products');

      expect(productImage).toBeInTheDocument();
      expect(productImage).toHaveAttribute('src', image);

      expect(cardDetails).toHaveTextContent(product.category);
      expect(cardDetails).toHaveTextContent(product.name);
      expect(cardDetails).toHaveTextContent(`$${product.price}`);
      expect(cardDetails).toHaveTextContent(`${avgRating} *`);
    });

    it('User can use remove button on outfit list', () => {
        render(
          <OutfitCard
            product={product}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            avgRating={avgRating}
            image={image}
            handleRemove={handleRemove}
            handleProductCardClick={handleProductCardClick}
          />
        );

        const removeButton = screen.getByTestId('remove-button');
        fireEvent.click(removeButton);

        expect(handleRemove).toHaveBeenCalledWith(product.id);
      });


      it('User will be able to access product when product card clicked', () => {
        render(
          <OutfitCard
            product={product}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            avgRating={avgRating}
            image={image}
            handleRemove={handleRemove}
            handleProductCardClick={handleProductCardClick}
          />
        );

        const productCard = screen.getByRole('User-can-select-product');
        fireEvent.click(productCard);

        expect(handleProductCardClick).toHaveBeenCalledWith(product.id);
      });


})


describe('RelatedCard should render product details in list for user accessibility', () => {
    const product = {
      id: 123,
      name: 'Product A',
      category: 'Category A',
      price: 9.99,
      avgRating: 4.5,
      features: ['Feature 1', 'Feature 2'],
      image: 'image-url',
    };

    const currentProduct = {
      id: 456,
      name: 'Current Product',
    };

    const handleProductCardClick = jest.fn();

    beforeEach(() => {
      render(
        <RelatedCard
          index={0}
          product={product}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          avgRating={product.avgRating}
          features={product.features}
          image={product.image}
          currentProduct={currentProduct}
          handleProductCardClick={handleProductCardClick}
          currentProductFeatures={[]}
          setCurrentProductFeatures={jest.fn()}
        />
      );
    });

    it('User Should be able to see rendered product details', () => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.category)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      expect(screen.getByText(`${product.avgRating} *`)).toBeInTheDocument();
    });

    it('User will calls handleProductCardClick when the image is clicked', () => {
      const image = screen.getByAltText('product image');
      image.click();
      expect(handleProductCardClick).toHaveBeenCalledWith(product.id);
    });

  });


  describe('ActionButtonRelated', () => {
    it('should have isModalOpen set to false initially', () => {
      const { container } = render(<ActionButtonRelated />);
      expect(container.querySelector('.action-button-div')).toBeInTheDocument();
      expect(container.querySelector('.action-button-click')).toBeInTheDocument();
    });

  });