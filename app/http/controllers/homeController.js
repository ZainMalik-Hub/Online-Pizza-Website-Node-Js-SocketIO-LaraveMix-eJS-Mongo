const Menu = require("../../models/menu");
function homeController() {
  return {
    async index(req, res) {
      const pizzas = await Menu.find();
      return res.render("home", { pizzas });
      // Menu.find().then(function (pizzas) {
      //   console.log("pizzas", pizzas);
      //   return res.render("home", { pizzas });
      // });
    },
  };
}

module.exports = homeController;
