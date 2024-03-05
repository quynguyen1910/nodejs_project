const express = require("express");
// const config = require("config"); //dùng để tạo 1 biến global để chỉnh sửa cho dễ
const bodyParser = require("body-parser"); // lấy dữ liệu từ form

const session = require("express-session"); //sử dụng tạo session middleware
const cookieParser = require("cookie-parser"); //
const flash = require("express-flash"); //tạo thông báo thành công

const methodOverride = require("method-override"); // để có method delete patch cho form html(vì nó có 2 phương thức thôi get và post)
const app = express();

const router = require(`${__dirname}/../routers/web.js`);

// -----------database---------------
const database = require(`${__dirname}/../common/database.js`);
database.connect();

// -----------template engine EJS---------------

app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
  
app.use(flash());

app.use(methodOverride("_method"));
app.use("/static", express.static(`${__dirname}/../public`));
// -----------------------------------------------------
app.use(router);
module.exports = app;
