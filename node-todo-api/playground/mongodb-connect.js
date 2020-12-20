const { MongoClient, ObjectID } = require("mongodb");

const newId = new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TaskApp", (err, client) => {
  if (err) return console.log("An error occurred connecting to the database");

  console.log("Connected successfully");

  const db = client.db("TaskApp");

  db.collection("tasks").insertOne(
    { title: "something", date: "something else" },
    (err, result) => {
      if (err)
        return console.log("Could not insert a new task to the database", err);

      // console.log(JSON.stringify(result.ops));
      console.log(result.ops[0]._id.getTimestamp());
    }
  );

  client.close();
});
