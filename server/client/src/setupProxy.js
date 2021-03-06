const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/*',{target:'http://localhost:5000'}))
    app.use(proxy('/api/surveys',{target:'http://localhost:5000'}))
    app.use(proxy('/singin',{target:'http://localhost:5000'}))
    app.use(proxy('/singup',{target:'http://localhost:5000'}))
    app.use(proxy('/addCarToDatabase',{target:'http://localhost:5000'}))
    app.use(proxy('/car/showCars',{target:'http://localhost:5000'}))
    app.use(proxy('/car/findCar',{target:'http://localhost:5000'}))
    app.use(proxy('/car/deleteCar',{target:'http://localhost:5000'}))
    app.use(proxy('/addDriverToDatabase',{target:'http://localhost:5000'}))
    app.use(proxy('/driver/findDriver',{target:'http://localhost:5000'}))
    app.use(proxy('/driver/showDrivers',{target:'http://localhost:5000'}))
    app.use(proxy('/driver/deleteDriver',{target:'http://localhost:5000'}))
    app.use(proxy('/driver/showDriversCars',{target:'http://localhost:5000'}))
    app.use(proxy('/driver/driverToCar',{target:'http://localhost:5000'}))
    app.use(proxy('/salarycounter',{target:'http://localhost:5000'}))
    app.use(proxy('/rating',{target:'http://localhost:5000'}))
    app.use(proxy('/ratings',{target:'http://localhost:5000'}))
}