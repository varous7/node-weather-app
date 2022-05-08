const request = require('request')
const forcast =(latitude, longitude, cb)=>{
    const url ='http://api.weatherstack.com/current?access_key=c7740f754fd7f5de50e52137e36b3b8c&query='+latitude+','+longitude+'&units=f'

    request({url, json:true},(error,response)=>{
        // console.log(response)
        if(error){
            cb("Unable to call weather service",undefined)
        }else if(response.body.error){
            cb("Unable to find the location",undefined)
        }else{
            cb(undefined,response.body.current.weather_descriptions[0]+". This is currently "+response.body.current.temperature+ " degrees out. But it feels like "+response.body.current.feelslike+" degrees out there.")
        }
    })

}

module.exports =forcast