const { mongoose } = require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const querystring = require("querystring");

const { Task } = require("./models/task");

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post("/task", (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    status: req.body.status,
    completed: req.body.completed,
  });

  newTask
    .save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/task", (req, res, next) => {
  Task.find({ completed: req.query.completed })
    .then((docs) => {
      if (!docs) return res.status(404).send();

      res.send(docs);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/task/:id", (req, res, next) => {
  Task.findById(req.params.id)
    .then((doc) => {
      if (!doc) return res.status(404).send();

      res.send(doc);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete("/task/:id", (req, res) => {
  Task.findOneAndDelete({ _id: req.params.id })
    .then((doc) => {
      if (!doc) return res.status(404).send();

      res.send(doc);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.patch("/task/:id", (req, res) => {
  console.log(req.body);
  Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        status: req.body.status,
        completed: req.body.completed,
        updatedAt: Date.now(),
      },
    },
    {
      returnOriginal: false,
    }
  )
    .then((doc) => {
      if (!doc) return res.status(404).send();

      res.status(201).send(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
