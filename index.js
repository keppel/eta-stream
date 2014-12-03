var through = require('through2')
var distance = require('map-distance')

var ETA = module.exports = function(args) {
  var args = typeof args === "object" ? args : {}
  var destination = args.destination || args.to;
  var mode = args.mode || "driving"
  var stream = through.obj(function(chunk, enc, cb) {
    if(typeof chunk !== "object"){
      return cb("eta-stream expected object")
    } 
    if(!chunk.coords){
      return cb("no coordinates supplied")
    }
    distance({
      from: chunk.coords,
      to: destination,
      mode: mode
    }, function(err, data) {
      if(data && !err){
        cb(null, data)
      }
    }.bind(this))
  })
  return stream;
}