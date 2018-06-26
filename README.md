# Generic web app
This is a mockup for eCommerce product page. The main code of app is located in `src/server/frontEnd`. Website is partially working, the non working elements are defined in code as components with draft of code.
## Assumptions
App mockup is structured in such way that core logic and view is separated, and communicates via standarised inner API. This allows for:
* User can create his own theme froms cratch without worrying about changing logic. Logic is located in `src/server/frontEnd/core`, theme in `src/server/frontEnd/core`.
* User can extend core logic by creating plugins in `src/server/frontEnd/plugins`, under the hood they're basically AngularJS decorators.
* Core can be update by simply replacing `src/server/frontEnd/core` with new one. If API in new version is legacy-compatible, everything should still work.
## How to use
Below NPM scripts work only on Linux, as they use UNIX filesystem paths.
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
    * productsGetter.js - service that gets products from server
    * buildCore.js - file that builds core
    * productColors.js - list of availible product colors
    * productSizes.js - list of availible product sizes
    * favourites.js - service for managging favourites list
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
                * productColorCicle
            * productSizeDialer
                * productSizeSquare
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
    * bigButton (Add to Cart, Checkout etc.)
    * productTiles (used in similiar products section, and finding similiar products in search)
        * productTile 
* acceptCookies
* membrane - dark screen that covers website when there's modal
* modal
    * modalHeader
    * modalContent
        * authorization
        * availibleModalContentIDs.js
    * availibleModals.js - dictionary of availible types of modals
* popup
* popUpMessages.js - messages for small popup that appears in corner
* formatPrice.js - AngularJS filter for formatting prices
* mainAppCoreProvider.js - singleton that provides module for core
* mainAppCoreProvider.js - singleton that provides module for theme

