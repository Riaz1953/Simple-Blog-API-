import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns";
dotenv.config({ path: "./.env" });
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const connectDB = async () => {
  try {
    const connectionInstancce = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
    );
    console.log(
      `\nMogoDB Connection successfully !! Host ${connectionInstancce.connection.host}`,
    );
  } catch (error) {
    console.log("Failed to connect Mongo Db", error);

    process.exit(1);
  }
};
export { connectDB };
