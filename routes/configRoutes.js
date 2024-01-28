const indexR = require("./index");
const usersR = require("./users");
const vipsR = require("./vips");
const prodsR = require("./prods");
const tvsR = require("./tvs");

exports.routesInit = (app) => {
  //מגדירים ראוטרים לאיזה ראוטר הם שייכים
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/vips", vipsR);
  app.use("/prods", prodsR);
  app.use("/tvs", tvsR);
};
