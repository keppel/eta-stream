var movement = require("geolocation-stream")()
var eta = require("../")({destination: "Seattle, WA"})

movement.pipe(eta).on("data", function(data){
  console.log(data)
  //=> {seconds: 597, meters: 8783}
})