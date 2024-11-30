import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mongodb",
  database: "Freya",
  url: "mongodb+srv://Uthiele:Ywm1pGemxnmxjKNq@cluster0.nafmy.mongodb.net/Freya?retryWrites=true&w=majority&appName=Cluster0",
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.ts"],
});