#welcome to Fligts service

## project setup

-clone the project on your local
-execute npm install on the same path as of your root directory and add the following variable

-port = 3000

inside the "srtc/config" folder create  a new file "config.json" and then add te following piece of code 
{
  "development": {
    "username":  <YOUR_DB_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
- once you have added your db config as listed above, go to the src folder from your terminal and execute "npx sequelize db:create"

-src/
 index.js //server
 models/
 controllers/
 services/
 utils/
 config/
-tes