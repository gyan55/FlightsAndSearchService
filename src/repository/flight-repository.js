const {Flights} = require('../models/flights');

class FlightRepository {

async createFlight(data){

    try {
        const flight  = await Flights.create(data);
        return flight;
    } catch (error) {
        
        console.log("something went wrong in the repositry layer");
        throw{error};
    }
}

}

module.exports = FlightRepository;