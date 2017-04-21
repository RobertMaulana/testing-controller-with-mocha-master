const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

mongoose.connection.on('connected',function(){
  console.log('connected to db');
})

mongoose.connection.on('error', function(err){
  console.log('error found', err);
})

mongoose.connection.on('disconnected', function() {
  console.log('db not connected');
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('disconncted');
    process.exit(0);
  });
});
