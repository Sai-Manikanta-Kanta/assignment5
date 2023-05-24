var http = require("http"); // http module imported and stored in http variable
// creating server
const httpServer = http.createServer(handleServer); // accessing creaye server method inside http object


function handleServer(req, res) {
    let data = {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    };
    let formattedData = JSON.stringify(data);
    if (req.url === '/welcome') {
        res.writeHead(200,
            {
                'content-type': 'text/plain',
            });
        res.end("Welocome to Dominos!")
    }
    else if (req.url === '/contact') {
        res.writeHead(200,
            {
                'content-type': 'application/json',
                'content-Disposition': 'inline'
            });
        res.end(formattedData);
    }
    else if (req.url !== '/contact' || req.url !== '/welcome') {
        res.writeHead(404,
            {
                'content-type': 'text/plain',
            });
        res.end("404 routes not found")
    }
}

httpServer.listen(8081, () => {
    console.log("Server listening at port 8081 ")
})

module.exports = httpServer;



