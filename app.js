const express = require("express");
const ApiRoutes = require("./src/routes/ApiRoutes");
const WebRoutes = require("./src/routes/WebRoutes");
const path = require("path");

class MyApp {
  static main() {
    const app = express();
    const PORT = 80;

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "src/views"));

    app.use("/api", ApiRoutes.init());   
    app.use("/", WebRoutes.init()); 

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

MyApp.main();