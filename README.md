### FEC-Saturn (Front End Capstone Project) Store Product Page

&ensp;&ensp;&ensp;&ensp; This is a single product page for a storefront that displays images and information about various products.
It also allows users to view and submit questions about the products, answers to others' questions, and reviews of the products, as well as
view related products and compare them.

###### Table of Contents
- <font size=1> [Installation](#installation) </font>
- <font size=1> [Roadmap](#roadmap) </font>
- <font size=1> [Credits](#credits) </font>



### Installation
---

##### HOW TO RUN:
- Install Node (https://nodejs.org/en/download)
- Install dependences
```
npm install
```
- You will need to create a '.env' file in the main directory
```
PORT = 3000
CAMPUS = "API_ROOT_CAMPUS"
AUTH_SECRET = "GITHUB TOKEN"
```

- To build and start the server run these two commands in your terminal
```
npm run build // bundles the files for deployment
npm run server-dev // runs the server
```
<br></br>
*If you want to make changes and have the site auto update:*
- In a new terminal, seperate from server-dev run:
```
npm run client-dev
```


### Roadmap
---

1. Overview: (Joe Gutman)
    * Complete
<br></br>
1. Related Products & Outfit Creation: (Darien Poon)
    * **TODO:** Needs to reset position when clicking on new item and it's related item list is empty. Need to scroll left at this time to go back to "main scroll page".
    * **TODO:** Resize Stars in product card to be smaller
<br></br>
1. Questions and Answers: (Yichen Lin)
    * **TODO:** An user should be able to attach photos when adding an answer
    * **TODO:** Display photos on every answer
    * **TODO:** When using the search bar to filter questions, every questions should be filtered. (currently only the questions displayed on webpage will be filtered)
<br></br>
1. Ratings and Reviews: (Jack Pape)
    * **TODO:** All review data used in my section is DUMMY DATA that I wrote so I could edit it freely myself! There are no API/axios calls implemented.
    * **TODO:** The real data might be formatted slightly differently from my dummy data. For example, integers might actually come in string form.
    * **TODO:** The button to mark a review as helpful should only be clickable once per user. This is already implemented in the QA section, but not here.
    * **TODO:** Reviews with images attached should display those images as thumbnails that open the image, enlarged, in a modal when clicked.
    * **TODO:** Users should be able to upload images with their reviews.
    * **TODO:** Submitting a review should not work unless the required fields are filled out. This includes checking the validity of the email address.
    * **TODO:** (lower priority): There should be a searchbar and selectable filters to sort the reviews.
<br></br>

### Credits
---

- #### [Project Repo Link](https://github.com/FEC-Saturn/FEC-Saturn)

  - [Joe Gutman](https://github.com/jddg5wa)
  - [Darien Poon](https://github.com/darienpoon)
  - [Yichen Lin](https://github.com/echenlin)
  - [Jack Pape](https://github.com/RaccoonGem)


