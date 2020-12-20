const { MongoClient, ObjectID } = require("mongodb");

const newId = new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TaskApp", (err, client) => {
  if (err) return console.log("An error occurred connecting to the database");

  console.log("Connected successfully");

  const db = client.db("TaskApp");
  const tasksCollection = db.collection("tasks");

  //getting all records
  tasksCollection
    .find()
    .toArray()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  //getting specific records
  tasksCollection
    .find({ title: "something" })
    .toArray()
    .then((res) => {
      console.log("finding records that match this data", res);
    })
    .catch((err) => console.log(err));

  //getting an empty array if search param not found
  tasksCollection
    .find({ title: "somethings" })
    .toArray()
    .then((res) => {
      console.log("finding zero records that match this data", res);
    })
    .catch((err) => console.log(err));

  //getting record count
  tasksCollection
    .find()
    .count()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  //getting the first record of the collection
  tasksCollection
    .findOne()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  //getting the first record of the collection with search param
  tasksCollection
    .findOne({ title: "something" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  //getting record by unique id
  tasksCollection
    .findOne({
      _id: new ObjectID("5fde35af3a8ac02e68f898c3"),
    })
    .then((res) => {
      console.log("getting the first data with unique id", res);
    })
    .catch((err) => console.log(err));

  client.close();
});
