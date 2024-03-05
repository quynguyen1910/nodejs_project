const express = require("express");
const config = require("config"); //dùng để tạo 1 biến global để chỉnh sửa cho dễ
const bodyParser = require("body-parser"); // lấy dữ liệu từ form

const session = require("express-session"); //sử dụng tạo session middleware
const cookieParser = require("cookie-parser"); //
const flash = require("express-flash"); //tạo thông báo thành công

const methodOverride = require("method-override"); // để có method delete patch cho form html(vì nó có 2 phương thức thôi get và post)
const app = express();

const router = require(config.get("apps.URL_ROUTER"));

// -----------database---------------
const database = require(config.get("apps.URL_DATABASE"));
database.connect();

// -----------template engine EJS---------------

app.set("views", config.get("apps.VIEWS_FOLDER"));
app.set("view engine", config.get("apps.NAME_ENGINE"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use(methodOverride("_method"));
app.use("/static", express.static(config.get("apps.STATIC_FOLDER")));
// -----------------------------------------------------
app.use(router);
module.exports = app;
