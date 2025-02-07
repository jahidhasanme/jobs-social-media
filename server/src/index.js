import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import interviewRoute from "./routes/interviewRoute.js";
import jobsRoute from "./routes/jobsRoute.js";
import loginRoute from "./routes/loginRoute.js";
import postsRoute from "./routes/postsRoute.js";
import signupRoute from "./routes/signupRoute.js";
import logoutRoute from "./routes/logoutRoute.js";
import editUserRoute from "./routes/editUserRoute.js";

const port = process.env.PORT || 3000;
const app = express();

try {
  mongoose.connect(process.env.DATABASE_URL);
  console.log(`Connected to database: ${process.env.DATABASE_URL}`);
} catch (error) {
  console.error(`Error connecting to database: ${error}`);
}

// Middlewares
app.use(express.static("public")); // serve static files
app.use(express.json()); // parse json
app.use(cookieParser(process.env.COOKIE_SECRET)); // parse cookies
app.use(helmet()); // secure express app
app.use(cors()); // allow cors
app.use(compression()); // compress all responses

// Routes
app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/logout", logoutRoute);
app.use("/posts", postsRoute);
app.use("/jobs", jobsRoute);
app.use("/interview", interviewRoute);
app.use("/edituser", editUserRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
