"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectDatabase = async (connect, url = "mongodb://localhost:27017/ties") => {
    const db = await connect(url);
    return db;
};
exports.default = connectDatabase;
//# sourceMappingURL=createdatabase.mongo.js.map