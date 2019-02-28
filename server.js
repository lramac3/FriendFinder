let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("app/public"));

require("./app/public/routing/apiRoutes.js")(app);
require("./app/public/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});