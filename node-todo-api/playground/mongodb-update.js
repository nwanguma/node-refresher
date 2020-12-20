const { MongoClient, ObjectID } = require("mongodb");

const newId = new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TaskApp", (err, client) => {
  if (err) return console.log("An error occurred connecting to the database");

  console.log("Connected successfully");

  const db = client.db("TaskApp");
  const tasksCollection = db.collection("tasks");

  //create a new property using updateone and set
  // tasksCollection
  //   .updateOne(
  //     { description: "learn nodejs" },
  //     {
  //       $set: {
  //         difficulty: 5,
  //       },
  //     }
  //   )
  //   .then((res) => console.log(res.result))
  //   .catch((err) => console.log(err));

  //alternate method for updating a document, this one return an object which contains the original data if returnoriginal
  //property is set to true or if not defined and the new value if returnoriginal is set to false
  tasksCollection
    .findOneAndUpdate(
      { description: "learn nodejs" },
      {
        $inc: {
          difficulty: 1,
        },
      },
      { returnOriginal: false }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  client.close();
});
