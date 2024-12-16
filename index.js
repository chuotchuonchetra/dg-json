const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const cors = require("cors");
server.use(cors());
server.use(middleware);
server.use(router);

const port = 1210;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
