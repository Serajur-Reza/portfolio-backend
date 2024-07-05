import cors from "cors";
import express from "express";

import router from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
// import { authRouter } from "./modules/auth/auth.routes";
// import router from "./routes/index.js";

const app = express();
// dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-dashboard-rouge.vercel.app",
      "https://portfolio-ten-umber-39.vercel.app",
    ],

    credentials: true,
  })
);

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "App is running",
  });
});

app.use("/api", router);
app.use(globalErrorHandler);

app.use((req, res) => {
  res.json({
    success: false,
    message: "route does not exist",
  });
});

export default app;
