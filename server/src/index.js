import compression from "compression";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import loginRoute from "./routes/loginRoute.js";
import signupRoute from "./routes/signupRoute.js";
import profileRoute from "./routes/profileRoute.js";
import postsRoute from "./routes/postsRoute.js";

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
app.use(cors()) // allow cors
app.use(compression()); // compress all responses

// Routes
app.use("/login", loginRoute);
app.use("/signup", signupRoute)
app.use("/profile", profileRoute);
app.use("/posts", postsRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
