"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createdatabase_mysql_1 = __importDefault(require("./createDatabase/createdatabase.mysql"));
const mysqlDB = () => {
    return Object.freeze({
        connectDatabase: () => createdatabase_mysql_1.default,
    });
};
exports.default = mysqlDB;
//# sourceMappingURL=index.mysql.js.map