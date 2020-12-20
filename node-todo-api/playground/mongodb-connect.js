const { MongoClient, ObjectID } = require("mongodb");

const newId = new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TaskApp", (err, client) => {
  if (err) return console.log("An error occurred connecting to the database");

  console.log("Connected successfully");

  const db = client.db("TaskApp");
  const tasksCollection = db.collection("tasks");

  tasksCollection.insertOne(
    {
      title: "personal",
      description: "learn nodejs",
      completed: false,
      status: "inProgress",
      priority: 3,
    },
    (err, result) => {
      if (err)
        return console.log("Could not insert a new task to the database", err);

      console.log(result.ops[0]._id.getTimestamp());
    }
  );

  tasksCollection
    .insertMany([
      {
        title: "work",
        description: "configure forgot-password",
        completed: false,
        status: "to-do",
        priority: 3,
      },
      {
        title: "work",
        description: "configure password change",
        completed: false,
        status: "to-do",
        priority: 3,
      },
      {
        title: "work",
        description: "make landing page responsive",
        completed: false,
        status: "inProgress",
        priority: 3,
      },
    ])
    .then((result) => {
      console.log(JSON.stringify(result.ops));
    });

  client.close();
});
