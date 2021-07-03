const express = require("express");
const express_app = express();
const server = require("http").Server(express_app);
const next = require("next");
const dev = process.env.NODE_ENV!='production';
const next_app = next({dev});
const handle_req = next_app.getRequestHandler();

// require("dotenv").config({ path: "./config.env" });
const PORT=process.env.PORT||3000;

next_app.prepare().then(()=>{
    express_app.all("*",(req,res) => {
        handle_req(req,res);
    })
    server.listen(PORT,(err) =>
    {
        if(err){
            throw err;
        }
        console.log("Server is running");
    })
})