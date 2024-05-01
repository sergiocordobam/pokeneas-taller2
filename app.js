const express = require("express");

class MyApp {
  static main() {
    const app = express();
    const PORT = 3000;

    app.set("view engine", "ejs");
    app.set("views", "./src/views");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

MyApp.main();
