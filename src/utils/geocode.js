const request = require('request')
const geocode =(location,cb)=>{
    const url ='http://api.positionstack.com/v1/forward?access_key=0a255eb7ea0cb5afa1114c857286bbfc&query='+encodeURI(location)
    request({url , json:true},(error, response)=>{
        if (error){
            cb("Unable to connect to the location",undefined)
        }else if (response.body.error){
            cb(response.body.error.context.query.message,undefined)
        }
        else if(response.body.data.length === 0){
            cb("Unable to find the location!",undefined)

        }
        else{
        cb(undefined,{
            latitude:   response.body.data[0].latitude,
            longitude:  response.body.data[0].longitude,
            label:      response.body.data[0].label
        }) 
        }
    })
}

module.exports=geocode