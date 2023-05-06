"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const course_schema_1 = __importDefault(require("./schema/course.schema"));
const createdatabase_mongo_1 = __importDefault(require("../createDatabase/createdatabase.mongo"));
const mongoose_1 = require("mongoose");
const findAllCourses = async () => {
    try {
        const dbConn = await (0, createdatabase_mongo_1.default)(mongoose_1.connect);
        const allTheCourses = await course_schema_1.default.find({});
        return allTheCourses;
    }
    catch (err) {
        return false;
    }
};
exports.default = findAllCourses;
//# sourceMappingURL=course.findAll.mongo.js.map