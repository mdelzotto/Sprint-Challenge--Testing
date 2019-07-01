const api = require("./api");

api.listen(3000, () => {
  console.log("Server is running!");
});

module.exports = api;
