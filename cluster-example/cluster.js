var cluster = require('cluster');
var http = require('http');
var os = require('os');

cluster.schedulingPolicy = cluster.SCHED_RR;

// Master
if (cluster.isMaster) {
    for (var i = 0; i < os.cpus().length; ++i) {
        cluster.fork();
    }
    return;
}

// Cluster
http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello I am cluster " + cluster.worker.id);
}).listen(8080);
