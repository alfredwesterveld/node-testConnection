"use strict"

const net = require("net")
const assert = require("assert")
const Promise = require("bluebird")

module.exports = function (port, host, callback) {
    assert.ok(typeof port === "number", "port should be a number")
    assert.ok(typeof host === "string", "host should be a string")
        
    return new Promise(function (resolve, reject) {
        const connectParams = {
            port: port,
            host: host
        }
        
         //'connect' listener
        const onConnect = function() { 
            resolve(true)
            client.end()
        }
        
        const client = net.connect(connectParams, onConnect)            
    
        client.on('error', function (e) {
            resolve(false)
        })            
    }).nodeify(callback)
}

