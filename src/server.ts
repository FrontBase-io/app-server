//@ts-ignore
var mongoose = require("mongoose");
var vhost = require("vhost");
const express = require("express");
const app = express();
const port = 8601;

// Models

app.use(
  vhost(
    "sample-site.vtvc.nl",
    express.static("/opt/frontbase/apps/frontbase-io")
  )
);

app.listen(port, () => {
  console.log(
    `App-Server is now listening for VHOST requests on http://localhost:${port}`
  );
});

console.log("App-Server initialising.");
