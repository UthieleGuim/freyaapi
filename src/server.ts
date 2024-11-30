import { AppDataSource } from "@config/database";
import app from "./app";

const PORT = 3381;

app.listen(PORT, () => {
  // Inicializar o banco de dados
  AppDataSource.initialize()
    .then(() => {
      console.log("Server is running");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
});