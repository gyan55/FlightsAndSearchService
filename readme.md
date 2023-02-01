#welcome to Fligts service
````
## project setup
  -clone the project on your local
  -execute npm install on the same path as of your root directory and add the following variable
  -port = 3000
  -inside the "srtc/config" folder create  a new file "config.json" and then add te following piece of code

  ```
 
 ```
{
  "development": {
    "username":  <YOUR_DB_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
```
once you have added your db config as listed above, go to the src folder from your terminal and execute "npx sequelize db:create"
```

## DB DESIGN
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

  ## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    -Relationship -> City has many airports and -Airport belongs to a city (one to many)
    -npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
