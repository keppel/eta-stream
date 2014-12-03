# eta-stream

pipe in latitude/longitude from html5 geolocation api; get arrival time estimates.

works in the browser or node.

## example

using Max Ogden's geolocation-stream module:

`npm install geolocation-stream`
`npm install eta-stream`

```js
  var movement = require("geolocation-stream")()
  var eta = require("eta-stream")({destination: "Seattle, WA"})
  
  movement.pipe(eta).on("data", function(data){
    console.log(data)
    //=> { seconds: 597, meters: 8783 }
  })
```

## license
MIT