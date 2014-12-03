
var test = require('tape')

test("some random coordinates", function(t) {
  t.plan(1)

  var eta = require("../")({
    destination: "Seattle, WA"
  })
  var someLocation = {
    timestamp: 1417428507703,
    coords: {
      latitude: 47.6786514,
      longitude: -122.3176489
    }
  }

  eta.write(someLocation)

  eta.on("data", function(data) {
    t.ok(
      data.seconds > 400 && data.seconds < 1000 && 
      data.meters > 8000 && data.meters < 10000
    )
    t.end()
  })
})