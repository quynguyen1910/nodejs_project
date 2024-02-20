# nodejs_project

my project for cv

-----------------1.xử lý github------------------
1.tạo nodejs_project trên repository của github
2.clone về máy mình bằng ssh:
"git clone url_ssh"

-----------------2.khởi tạo project------------------
1.thiết lập nodejs module
1.1:khởi tạo node_module: "npm init"
1.2:khởi tạo expressjs: "npm install express"
1.3:khởi tạo nodemon:thay đổi mà không cần chạy lại sever "npm install --save-dev nodemon"
1.3.1:vào package.json để tạo lệnh script với nodemon
-----------------3.đẩy code từ máy lên github lần 1------------------
1.git add .
2.git commit -m "my_message"
3.git push origin name_branch
-----------------4.xây dựng cấu trúc project------------------
tách các file với quy trình sau:
1.tạo router
1.1
const express = require('express')
const router = express.Router()
1.2
export router sang bên app để sử dụng
2.trong app.js
import router kia sang để sử dụng,app.use(router)
3.tạo file bin có www.js chỉ dụng để chạy server
import app.js vào
nhớ đổi đường dẫn start
+my_project
-src
--apps
--app.js(sử dụng để định các cấu hình server)
--bin
--www.js(dùng để chạy server)
--routers
--web.js
