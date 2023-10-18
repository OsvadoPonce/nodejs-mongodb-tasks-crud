import { connect } from "mongoose";
import {MONGODB_URI} from "./config";
(async () => {
  try {
    const db = await connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
