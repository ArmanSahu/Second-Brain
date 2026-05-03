import { app } from "./app/app.js";
import { PORT } from "./config/config.js";
import { connectToDb } from "./database/db.js";

const ACTUALPORT = PORT || 5000

connectToDb().then(()=>{
    app.listen(ACTUALPORT,()=>{
        console.log(`App is running on port ${ACTUALPORT}`);
    })
})