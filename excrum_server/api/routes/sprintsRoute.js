const checkAuth = require("../middleware/check-auth");
var sprintsController = require("../controllers/sprintsController");

module.exports = function(app) {
  app.post("/newsprint", checkAuth, sprintsController.sprint_add);
};
