var usersConstroller = require("../controllers/usersController");
const checkAuth = require("../middleware/check-auth");

module.exports = function(app) {
  app.post("/signup", usersConstroller.users_sign_up);

  app.delete("/user/:id", checkAuth, usersConstroller.users_delete);

  app.post("/login", usersConstroller.users_login);
};
