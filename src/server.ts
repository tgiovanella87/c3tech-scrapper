import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
import app from "./starters/app";

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
