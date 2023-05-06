import { ConnectOptions } from "mongoose";

const connectDatabase = async (
    connect: (
      uri: string,
      options?: ConnectOptions | undefined
    ) => Promise<typeof import("mongoose")>,
    url = "mongodb://localhost:27017/ties"
  ): Promise<typeof import("mongoose")> => {
    const db = await connect(url);
    return db;
  };
  export default connectDatabase;