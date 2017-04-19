const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Testing_User')

mongoose.connection.on('connected',function(){
  console.log('database sudah terhubung');
})

mongoose.connection.on('error', function(err){
  console.log('ada yang error gan', err);
})

mongoose.connection.on('disconnected', function() {
  console.log('Database tidak terhubung');
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
