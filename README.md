
# BuyCars

BuyCars is a system designed to streamline the process of selling used cars for dealers. It provides a platform where dealers can easily list and sell their inventory, while allowing car companies like Honda and Maruti to set specific requirements for the original equipment of the cars.
## Tech Stacks Used

<p align = "center">
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>

**Server:** Node, Express , MongoDB Atlas, Cloudinary

**Client:** HTML, CSS ,React.js

<hr>

## Deployment

**Server side:** Render cloud https://abbtrybackend.onrender.com

**Client side:** Vercel https://buycar-snowy.vercel.app/signup

Note - Sorry due to time constraint frontend is not build perfectly,but i will improve it further.

## Features 
-  Cloudinary Image store
-  Authentication
-  API Validation
-  Signup/Login
-  Dealer can list old cars and OEM specification autometically will fetched for the model of the car 
-  Original equipment manufacturer can set the OEM specification
-  Serach,Filter,Sort

## Run Locally

### Clone this Project

```
https://github.com/deepakChourasiya-aj/Attryb-Assignment.git
```


### Install npm Packages

```javascript
npm i --global
```

### Go to Backend Folder
```javascript
cd Server
```

### Run Server
```javascript
npx nodemon index.js
```
### Runs the project in the development mode

[http://localhost:8080](http://localhost:8080)


### Environment Variables Required
`mongoURL`

`key`

`PORT`

`Cloudinary configuration`

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZRJJRPM1V6XKXBLn2fnsy5VwmLW1uO9ixCfCYiZRwWeLKe2ukB17uzxRRyhZElgzn_E&usqp=CAU" alt="twilio" width="70" height="50"/>
</p>
   
   
## API Endpoints
   #### Welcome
```javascript
GET  /
```
  #### User Signup
```javascript
POST  http/localhost:8080/register
```
  #### User Login
```javascript
POST  http/localhost:8080/login
```
  #### OEM Manufacturer can add new OEM specification
```javascript
POST  http://localhost:8080/specs
```
  #### Dealer can serach according to OEM specification
```javascript
GET  http://localhost:8080/specs/?modelName=Legacy
```
  #### Dealer can upload car specification
```javascript
POST  http://localhost:8080/upload
```
  #### Dealer can update,delete car specification
```javascript
PATCH  http://localhost:8080/vehicle/id
```
  #### Dealer can retrieve car listed cars
```javascript
PATCH  http://localhost:8080/vehicle
```


 ### USERS DATA

```javascript

    {
    "name":"Deepak chourasiya",
    "email":"deepak1812002@gmail.com",
    "password":"123892",
    "role":"dealer" }
```


#### OEM DATA

```javascript

  {"modelName": "Legacy",
  "yearOfModel": 2023,
  "listPrice": 29000,
  "availableColors": ["White", "Gray", "Brown"],
  "mileage": "10,500 miles",
  "power": 185,
  "maxSpeed": 140}
```



#### OLD CAR DATA

```javascript
{
  "modelName": "Honda City",
  "dealerId": "12345",
  "title": "Honda City VX",
  "description": "Excellent condition, low mileage",
  "kmsOnOdometer": 50000,
  "majorScratches": false,
  "originalPaint": true,
  "numAccidentsReported": 0,
  "numPreviousBuyers": 1,
  "registrationPlace": "Delhi"
}

```

 
| `Authors` |
| :-------: | 

 
 [@deepakChourasiya-aj](https://github.com/deepakChourasiya-aj) 
 
 
