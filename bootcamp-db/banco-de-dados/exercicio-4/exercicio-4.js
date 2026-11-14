
db.posts.updateOne(
  { titulo: "Modelagem Flexível no Mongo" },
  {
    $set: {
      comentarios: [
        { autor: "Daniel Silva", texto: "Excelente explicação sobre NoSQL!" },
        { autor: "Rose Costa", texto: "Muito prático e flexível." }
      ]
    }
  }
);


db.posts.find({ tags: "nosql" });


db.posts.find({ autor: "Amanda Crystina" });