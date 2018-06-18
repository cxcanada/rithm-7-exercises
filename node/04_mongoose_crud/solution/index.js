const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const db = require("./models");

app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", function(req, res, next) {
  res.sendFile("../public/index.html");
});

app.get("/items", async function(req, res, next) {
  const items = await db.Item.find();
  res.json(items);
});

app.post("/items", async function(req, res, next) {
  const newItem = await db.Item.create(req.body);
  res.json(newItem);
});

app.get("/items/:id", async function(req, res, next) {
  const foundItem = await db.Item.findById(req.params.id);
  res.json(foundItem);
});

app.patch("/items/:id", async function(req, res, next) {
  console.log(req.params);
  const updatedItem = await db.Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(updatedItem);
});

app.delete("/items/:id", async function(req, res, next) {
  await db.Item.findByIdAndRemove(req.params.id);
  res.json("Removed");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
