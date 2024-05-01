import app from "./app.js"
import { connectToDatabase } from "./db/connection.js"

//connections
const PORT=process.env.PORT || 5000

connectToDatabase()
  .then(()=>{
    app.listen(PORT, () => 
    console.log("Server Live And Connected To MongoDB"))
  })
  .catch((err)=>{
    console.log(err)
  })
