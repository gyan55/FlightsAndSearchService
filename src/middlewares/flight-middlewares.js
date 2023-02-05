const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price

    ) {
        //if any of the body params is  missing we come inside the middleware
        return res.status(400).json({
            data:{},
            success: false,
            message : 'invalid request body for the flight',
            err: 'MISSING MANDATORY PROPERTIES TO CREATE A FLIGHT'

        });
        
    }
    next();
}

module.exports = {
    validateCreateFlight
}