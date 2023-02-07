const swaggerDocs = require("../swagger")
const app = require("./app")
require("dotenv").config()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port => ${process.env.URL}${PORT}/api/v1/docs => DB: ${process.env.DB_NAME}`);
  swaggerDocs(app, PORT);
})