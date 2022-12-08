import express from "express";
import cors from "cors";
import MenuRoute from "./routes/MenuRoute";
import FileUpload from "express-fileupload";

const app = express();

(async () => {
    await db.sync();
  })();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use (MenuRoute);

app.listen(6000, () => console.log("server running on port 6000"));