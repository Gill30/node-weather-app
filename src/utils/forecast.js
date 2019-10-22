const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/954943060fe368d0b633bc6e8f6d695c/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. High today is '+ body.daily.data[0].temperatureHigh +' and low today is '+ body.daily.data[0].temperatureLow+'. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast