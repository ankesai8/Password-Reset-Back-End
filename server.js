const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");
const mongo = require("./mongo/mongo");

(async () => {
    
    await mongo.connect(); //connection db
    app.use(cors());
    app.use(express.json()); //parsing string to json

    //routes
    app.use("/users", userRoute);
    app.use("/resetpassword", resetRoute);

    app.get("/", (req, res) =>
      res.send(`PASSWORD-RESET-TASK`)
     );

    const port = process.env.PORT || 6001;
    app.listen(port, () => console.log(`App listen on port ${port}`));
   
})();
const userRoute = require("./Router/users.routes");
const resetRoute = require("./Router/resetPass.routes");
