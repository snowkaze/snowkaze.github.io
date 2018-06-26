var express =require('express')
var bodyParser =require('body-parser')
var fs =require('fs')
var app =express()
app.use(express.static('www'))
app.use(bodyParser.urlencoded({extended:true}))
app.listen(80,function(){
    console.log('服务器开启中')
})
app.post('/jd/loc',function(req,res){
    console.log(req.body.list);
    fs.writeFile("data.json", JSON.stringify(req.body.list),function(err) {
        err ? res.send("爬取数据失败") : res.send("爬取数据成功");
    });
    
})
app.post('/jd/reg',function(req,res){
    console.log(req.body);
    var fileName = 'users/' + req.body.tel + '.txt'
    fs.exists('users', function (exists) {
        if (exists) {
            fs.exists(fileName, function (exists2) {
                if (exists2) {
                    res.status(200).json({
                        info: '用户已存在',
                        code: 1
                    })
                } else {
                    writeFile()
                }
            })
        } else {
            fs.mkdir('users', function (err) {
                if (err) {
                    // 创建失败
                    res.status(200).json({
                        info: '创建users文件夹夹失败,系统',
                        code: 2
                    })
                } else {
                    // 创建成功
                    writeFile()
                }
            })
        }
    })
    function writeFile() {
        fs.writeFile(fileName, JSON.stringify(req.body), function (err) {
            if (err) {
                res.status(200).json({
                    info: '用户注册失败,系统错误',
                    code: 3
                })
            } else {
             
                
            }
        })
    }
})