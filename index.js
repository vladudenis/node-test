const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const port = 8080;

const server = http.createServer(function(req, res){
    const query = new URL(req.url);
    console.log(query);
    let filename = query.pathname === "/" ? "./index.html" : ("." + query.pathname + ".html");

    if(filename !== "./index.html" && filename !== "./about.html" && filename !== "./contact.html"){
        filename = "404.html";
    }

    fs.readFile(filename, function(err, data){
        if(err){
            console.log(err);
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
        }

        res.writeHead(200, { "content-Type": "text-html" });
        res.write(data);
        return res.end();
    });
});

server.listen(port, "localhost", function(){
    console.log(`Server running at port ${port}`)
});