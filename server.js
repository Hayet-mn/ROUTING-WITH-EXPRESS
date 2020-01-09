express= require('express')
const app = express()

let hour = new Date().getHours()



  app.get('/', function(req, res) {
    if ( (hour>8)&&(hour<17) ) res.sendFile(__dirname + '/public/home.html');
    else res.sendFile(__dirname + '/public/out-of-services.html');
  })

// app.get('/', function(req, res) {

//     if ( (hour>17)&&(hour<22) ) res.sendFile(__dirname + '/public/home.html');

//     else res.sendFile(__dirname + '/public/out-of-services.html');
//   })


app.use(express.static(__dirname+'/public'))

app.listen(3000,(err)=>{
    if(err) console.log("server is not running")
    else console.log('serveur is running on port 3000')
})