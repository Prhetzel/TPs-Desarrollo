const http = require("http");
const fs = require("fs");

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    if(req.method !== 'GET'){
        res.writeHead(405)
        res.write("Error 405- metodo")}
        else{
    res.writeHead(200, {'Content-Tipe': 'text/html'})
    fs.readFile(__dirname + "/static/index.html", (error, data)=> {
        if(error){
            res.writeHead(404)
            res.write("Error 404 -archivo no encontrado")
        }else{
            res.write(data)
        }
        res.end()
    })
        
   
}};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("servidor funcionando en", host, port);
});