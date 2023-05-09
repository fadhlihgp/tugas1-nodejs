var biodata = require("./biodata");
var http = require("http");

function printConsole() {
  console.log(biodata.getName("Fadhlih Girindra Putra"));
  console.log(biodata.getBirthPlace("Bekasi"));
  console.log(biodata.getBirthDate("17 November 2000"));
  console.log(biodata.getAddress("Jl Bonjol No. 30"));
}

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<ul>
    <li>${biodata.getName("Fadhlih Girindra Putra")}</li>
    <li>${biodata.getBirthPlace("Bekasi")}</li>
    <li>${biodata.getBirthDate("17 November 2000")}</li>
    <li>${biodata.getAddress("Jl Bonjol No. 30")}</li>
    </ul>`);
  res.end();
});
server.listen(8080);

printConsole();
server;
