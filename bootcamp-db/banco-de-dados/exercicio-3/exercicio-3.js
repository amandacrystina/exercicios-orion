db.posts.insertOne({
  titulo: "Introdução ao NoSQL",
  autor: "Amanda Crystina",
  conteudo: "Aprendendo conceitos de bancos não relacionais e MongoDB."
});

db.posts.insertOne({
  titulo: "Modelagem Flexível no Mongo",
  autor: "Amanda Crystina",
  conteudo: "Documentos na mesma coleção podem ter estruturas diferentes.",
  tags: ["nosql", "flexivel", "mongodb"]
});

db.posts.find();