# FEC-Saturn
This is Team Saturn's Front End Capstone project. It is a storefront website that displays images of and information about various products.
It also allows users to view and submit questions about the products, answers to others' questions, and reviews of the products, as well as
view related products and compare them.

HOW TO RUN:
- Run npm install
- You will need to create a '.env' file in the main directory that defines the PORT (3000), CAMPUS, and AUTH_SECRET (a github API key)
- Run npm run build
- Run npm run server-dev
- In a new terminal, run npm run client-dev
After running it this way the first time, only the last two steps should be necessary to run it in the future.

Overview (Joe Gutman)

Related Products (Darien Poon)

Questions and Answers (Yichen Lin)

Ratings and Reviews (Jack Pape)
- TODO: All review data used in my section is DUMMY DATA that I wrote so I could edit it freely myself! There are no API/axios calls implemented.
- TODO: The real data might be formatted slightly differently from my dummy data. For example, integers might actually come in string form.
- TODO: The button to mark a review as helpful should only be clickable once per user. This is already implemented in the QA section, but not here.
- TODO: Reviews with images attached should display those images as thumbnails that open the image, enlarged, in a modal when clicked.
- TODO: Users should be able to upload images with their reviews.
- TODO: Submitting a review should not work unless the required fields are filled out. This includes checking the validity of the email address.
- TODO (lower priority): There should be a searchbar and selectable filters to sort the reviews.
