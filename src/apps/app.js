const express = require("express");
const bodyParser = require("body-parser");// lấy dữ liệu từ form

const session = require("express-session"); //sử dụng tạo session middleware
const cookieParser = require("cookie-parser");//
const flash = require("express-flash");//tạo thông báo thành công

const methodOverride = require("method-override");// để có method delete patch cho form html(vì nó có 2 phương thức thôi get và post)
const app = express();

const router = require("../routers/web");
const config = require("config"); //dùng để tạo 1 biến global để chỉnh sửa cho dễ
// -----------database---------------
const database = require("../common/database");
database.connect();

// -----------template engine EJS---------------

app.set("views", config.get("apps.VIEWS_FOLDER"));
app.set("view engine", config.get("apps.NAME_ENGINE"));

//------------session------------------------
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }))
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());


app.use(methodOverride("_method"));
app.use("/static", express.static(config.get("apps.STATIC_FOLDER")));
// -----------------------------------------------------
app.use(router);
module.exports = app;
