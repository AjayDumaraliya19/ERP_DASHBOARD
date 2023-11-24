import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.route.js";
import generalRoutes from "./routes/general.route.js";
import managementRoutes from "./routes/management.route.js";
import salesRoutes from "./routes/sales.route.js";

/** Data import */
// import User from "./models/User.model.js";
// import { dataUser } from "./data/index.js";

/** CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/** ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/** MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on the port ${PORT}`);
    });

    /** Only data onetime */
    // User.insertMany(dataUser);
  })
  .catch((err) => {
    console.log(`${err} did not connect..!`);
  });

  // A:\My_all_project\Full Stack Project\ERP_Dashboard\server\node_modules\mongodb\lib\bulk\common.js:823
  