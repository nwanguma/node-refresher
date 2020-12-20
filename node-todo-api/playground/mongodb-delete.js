const { MongoClient, ObjectID } = require("mongodb");

const newId = new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TaskApp", (err, client) => {
  if (err) return console.log("An error occurred connecting to the database");

  console.log("Connected successfully");

  const db = client.db("TaskApp");
  const tasksCollection = db.collection("tasks");

  //calling deleteone without query deletes the first item in the tasks collection
  // tasksCollection
  //   .deleteOne()
  //   .then((res) => [console.log(result)]);

  // //calling deletemany with arguments deletes all documents that fit the bill
  tasksCollection
    .deleteMany({
      status: "to-do",
    })
    .then((result) => {
      console.log(JSON.stringify(result.result));
    });

  // //calling deletemany with the wrong args deletes no documents
  tasksCollection
    .deleteMany({
      status: "to-dos",
    })
    .then((result) => {
      console.log(JSON.stringify(result.result));
    });

  //calling deletemany without query deletes all documents in the collection
  tasksCollection
    .deleteMany()
    .then((result) => {
      console.log(JSON.stringify(result.result));
    })
    .catch((err) => console.log(err));

  //deleteone without query deletes the very first document in collection
  tasksCollection
    .deleteOne()
    .then((res) => console.log(res.result))
    .catch((err) => console.log(err));

  // deleteone with query deletes the specific document if document is found, if multiple similar documents exist it deletes the first one
  tasksCollection
    .deleteOne({ status: "to-do" })
    .then((res) => console.log(res.result))
    .catch((err) => console.log(err));

  //findoneanddelete with query deletes the very first document in collection and returns the removed document
  //this is important in use cases where we want to show the user the document that was deleted
  tasksCollection
    .findOneAndDelete({ description: "make landing page responsive" })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  client.close();
});
