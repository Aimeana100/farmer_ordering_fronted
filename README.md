# Farmer Ordering  system

This is the simple a Web app that allow the user (farmer) to browse and order the Seeds as well as fertilizer.

Again this task a challenge resolved by the author Anathole, And It was submitted to the BKTechouse.

## How to Run this web, Manual testing.

There are varous way that can this application, be run.
 1. Run the application using Docker conatainers
    
    - ####!You will need to clone backend before that'd help to start both server and database container
    - Clone both this repo and [backend  here](https://github.com/Aimeana100/farmer-ordering-system.git) into the same directory so that they can be run by docker compose
    - Make sure you, have `.env` file in your backend working directory and has a copy and completed env variables.
    - After having both 2 repo into singel directory, change directory to the backend and run `docker compose up`
    - You will have both front and backed backend running and communivating on loacal IP
      - ie backend and front-erespectively : `0.0.0.0:8080` and `0.0.0.0:3000`
    - browse and exprience the functionalities

 2. An other way to run test
   
    - having both repo on local machine and env variables  configured
    - start both server by `npm start` and browse from respective port and endpoint

## What does this repo containts || Functionalities

- This web has a login and register functionalities
- User routes authenticated accordingly and serve 2 differnt kind of user *store-keeper* and *farmer*
- *STORE_KEEPER* will be able to :
    - `register`,
    - `login`
    - create fertilizer and seeds with associated fertilizer as well.
    - list the records including the orders of the farmers
- FARMER will be able to :
    - `register`, and `login`
    - `create order` to by providing the size of Land in Acres and the seed he/she wanna develop there too.
    - the sysytem will authomatically let a farmer know what the orde will contain including the fertilzer and the wieght of it that fit with the requested seed and land-size.

## Limitation || What to improve
 - Unit testing
 - EndPooint documentation `/docs`
 - imporove UI / UX 
 - implememnt CI/CD 

 ## Credited to

  Author:
  - GitHub [Aimeana100](https://github.com/Aimeana100)
  - LinkedIn [Anathole K](https://www.linkedin.com/in/karinganire-anathole-610979185/)

