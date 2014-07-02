Deprecated warning
===

```javascript
"use strict"

const testConnection = require("testconnection")

testConnection(3333, "a", function (error, response) { 
    // Expect false because can not connect to host a at port 3333
    console.log(response)
})

testConnection(80, "google.com", function (error, response) {
    // Expect true because trying to connect to google.com.
    // Could be false if google is down
    console.log(response)  
})
```
