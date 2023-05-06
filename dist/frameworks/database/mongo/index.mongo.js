"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createdatabase_mongo_1 = __importDefault(require("./createDatabase/createdatabase.mongo"));
const course_index_mongo_1 = __importDefault(require("./course/index/course.index.mongo"));
const mongoDB = () => {
    return Object.freeze({
        connectDatabase: () => createdatabase_mongo_1.default,
        courses: () => (0, course_index_mongo_1.default)()
    });
};
exports.default = mongoDB;
//# sourceMappingURL=index.mongo.js.map