const jsonServer = require("json-server");
const cors       = require("cors");

const server  = jsonServer.create();
const router  = jsonServer.router("film.json");
const defaults = jsonServer.defaults();

server.use(cors());
server.use(defaults);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON-Server running on port ${PORT}`);
});