"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const course_findAll_mysql_1 = __importDefault(require("../course.findAll.mysql"));
const coursesDB = () => {
    return Object.freeze({
        findAllCourses: () => course_findAll_mysql_1.default
    });
};
exports.default = coursesDB;
//# sourceMappingURL=course.index.mysql.js.map