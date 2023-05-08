"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_mysql_1 = __importDefault(require("../index.mysql"));
const findAllCourses = async () => {
    try {
        const mySqlObj = (0, index_mysql_1.default)().connectDatabase();
        const objConn = await mySqlObj.getMysqlConn();
        const getAllTheCourses = async () => {
            return new Promise((resolve, reject) => {
                objConn.query("SELECT * FROM courses", function (err, result, fields) {
                    if (err)
                        throw err;
                    console.log("result: ", result);
                    resolve(result);
                });
            });
        };
        const allTheCourses = await getAllTheCourses();
        return allTheCourses;
    }
    catch (err) {
        return false;
    }
};
exports.default = findAllCourses;
//# sourceMappingURL=course.findAll.mysql.js.map