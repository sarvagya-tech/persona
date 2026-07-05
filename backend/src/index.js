import "./config/env.js";
import app from "./app.js";

const port = process.env.PORT || 7001;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
