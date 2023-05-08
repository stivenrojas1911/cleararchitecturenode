"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_mysql_1 = __importDefault(require("../../frameworks/database/mysql/index.mysql"));
const index_mongo_1 = __importDefault(require("../../frameworks/database/mongo/index.mongo"));
const databaseBuilder = () => {
    return Object.freeze({
        getDatabase: (type) => {
            if (type === "mongo") {
                return index_mongo_1.default;
            }
            return index_mysql_1.default;
        }
    });
};
;
exports.default = databaseBuilder;
//# sourceMappingURL=index.database.js.map