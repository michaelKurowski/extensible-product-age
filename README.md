# Generic web app
This is a mockup for eCommerce product page.
## Assumptions
App mockup is structured in such way that core logic and view is separated, and communicates via standarised inner API. This allows for:
* ExtendingUse core components without having to think about view 
There's separated directory `src/server/frontEnd/plugins` to keep custom logic from core logic separated.
## How to use
Clone a repository, and run `npm run deploy-prod` from `src/server` in order to build the app, and then `npm start` to run a server locally.
## How to run dev environment
After the repository is cloned run `npm run deploy-dev`. It will prepare the software for the first run. Once it will be finished, run `npm run start-dev`. Once started it'll listen to changes made in files, and automatically transpile the code that you write. It will also serve your changes under port `8081`.

## Web app structure
* theme/ - directory for theme
* core/ - core files, that should not be edited by user
    * services/ - core AngularJS services
        * objectModels/ - models of structures in application that reccur in many places i.e. Product object
    * cart.js - service for managging shopping list
    * createModels.js - service for creating object models
    * getProducts.js - service that gets products from server
    * buildCore.js - file that builds core
    * productColors.js - list of availible product colors
    * productSizes.js - list of availible product sizes
* plugins/ - plugins folder that can be used by user to extend core
    * pluginsList.json - file where user can declare which plugins to load
    * (nameOfPlugin)/ - directory for user-made plugin, 
        * decorators.js - file where user can extend core functionalities by using AngularJS decorators, this file is obligatory

    

## Frontend components
* header
* product page
    * product
        * productSlideshow
        * productInfo
            * addToCompare
            * addToFavorite
            * productColorDialer
            * productSizeDialer
        * productDetails
    * sales - banner
    * other products
* footer
    * links
    * findUs
* leftPanel
    * categoryField
    * minorField
* rightPanel
    * cart
    * find
    * favourites
* subscribeNewsletter
* universalComponents
    * bigButton
    * productTiles
        * productTile
* acceptCookies
* membrane - dark screen that covers website when there's modal

