const express = require("express") 

//express是一个函数,封装了服务器创建的方式,内部其实实现了http.createServer方法
const server = express()
server.listen(8895,()=>{
    console.log("server start success~!")
})

//解析get数据并获取get参数
//http://localhost:8895/
server.get( "/",(request,response)=>{
    //response.write("<h1>Hello Express</h1>")
    //response.write({"status":0,"message":"success"})
    //response.write([1,2,3,4,5])
    //response.end() 

    response.send("<h1>Hello Express~!!</h1>")
    response.send({"status":0,"message":"success"})
    response.send([1,2,3,4,5])
})

// ``是es6的语法(字符串模板)，可以运行在nodejs端也可以运行在浏览器端
server.get( "/user",(request,response)=>{
    response.send(`<h1>Hello ${request.query.username} ,age is ${request.query.age} ~!!</h1>`)
})



