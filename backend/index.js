import express from "express";
import cors from "cors";
import MenuRoute from "./routes/MenuRoute.js";
import PlaceRoute from "./routes/PlaceRoute.js";
import RestaurantRoute from "./routes/RestaurantRoute.js";
import TomohonlokaRoute from "./routes/TomohonlokaRoute.js";
import FileUpload from "express-fileupload";
import db from "./config/database.js";

const app = express();

(async () => {
    await db.sync();
  })();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use (MenuRoute);
app.use (PlaceRoute);
app.use (RestaurantRoute);
app.use (TomohonlokaRoute);

app.listen(5000, () => console.log("server running on port 5002"));