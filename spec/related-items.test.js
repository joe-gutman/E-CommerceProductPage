import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, {RelatedItems, getAvgRating} from '../client/src/index.jsx';
import RelatedProductsList from '../client/src/components/related-items/RelatedProductsList.jsx';
import ActionButtonRelated from '../client/src/components/related-items/ActionButtonRelated.jsx'
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

  expectElementByRole('Users should have way to see displayed related product info',  'related-product-info')

  expectElementByRole('Users should have way to learn about related products that may interest them', 'show-related-products')

  var currentRelatedProducts = [
    40346,
    40350,
    40349,
    40348
  ]

    expectElementByRole("Users should have way to see details of related products-3", "show-details-of-related-product-3")

     expectElementByRole("user-should-be-able-compare-products", "user-should-be-able-compare-products-3")
}

)


// test('renders component with async data and finds element by role', async () => {
//   // Render your component
//   const currentRelatedProducts = await fetchCurrentRelatedIds();
//   // const relatedProducts = await fetchRelatedProducts();
//   const currentProduct = await fetchCurrentProduct();

//   const { getByRole } = render(<RelatedProductsList currentRelatedProducts = {currentRelatedProducts} currentProduct = {currentProduct} getAvgRating = {getAvgRating} />);


//   // Wait for the async data to be fetched
//   await waitFor(() => {
//     currentRelatedProducts.map((relatedProduct, index) => {
//       var element = getByRole(`show-details-of-related-product-${index}`);
//       expect(element).toBeInTheDocument();
//   })
//     // Perform assertions after the data is available

//     // Additional assertions...
//   });
// });