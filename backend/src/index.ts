import { app } from "./app/app.js";
import { PORT } from "./config/config.js";
import { connectToDb } from "./database/db.js";


connectToDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running on port ${PORT}`);
    })
})