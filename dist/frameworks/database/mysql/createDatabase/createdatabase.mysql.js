"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MysqlClass {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() { }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static async getMysqlConn(host = "localhost", user = "root", password = "", database = "high_school", port = "3306") {
        if (!MysqlClass.mysqlConn) {
            const conn = mysql_1.default.createConnection({
                host,
                user,
                password,
                database,
            });
            MysqlClass.mysqlConn = conn;
        }
        return MysqlClass.mysqlConn;
    }
}
exports.default = MysqlClass;
//# sourceMappingURL=createdatabase.mysql.js.map