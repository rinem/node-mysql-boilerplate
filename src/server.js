import "dotenv/config";
import express from "express";
import helmet from "helmet";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/user", routes.user);

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(5000, () => {
  console.log(`App listening on PORT 5000`);
});
