# NODE JS REST API

### What you will find in this project
* Nodejs Rest Api
* Nodejs Server Setup
* Remote Mongodb integration
* Nodejs Routing
* HTTP request Body-parsing
* Nodejs logging by 'Morgan'
* Realtime erver update by 'nodemon'

### How to install
* Pull the project
* Run 'yarn install'
* Set your own mongodb connection properties in nodemon.js file
* start server by 'yarn start' (nodemon will start server automatically and updates after each code changes.) 
* Make http request to the server by browser or Postman.
* Default port is 3000

### Request Samples
* GET all products => http:localhost:3000/products/
* GET one specific product => http:localhost:3000/products/<productId>
* POST product to create new one
http:localhost:3000/products/
{
    "name" : "New Product",
    "price": 15.99
}
* For more url samples, please check router classes. (products.js and orders.js)