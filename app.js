const express = require("express");
//מבצע מינופלציה על נתיבים בכתובות יו אר אל
const path = require("path");
//מפעיל שרת
const http = require("http");

const {routesInit} = require("./routes/configRoutes");
//מגדירים משתנה שהוא מייצג את האקפרס והיכולות שלו
const app = express();
//מגדירים את תקיית פאבליק כתקייה סטטית שחשופה לצד הלקוח
app.use(express.static(path.join(__dirname, "public")));

//מגדיר את הראוטרים של האפליקציה שלנו
routesInit(app);

//מפעיל שרת
const server = http.createServer(app);
server.listen(3001);
