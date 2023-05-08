
import mysqlDB from "../../frameworks/database/mysql/index.mysql";
import mongoDB from "../../frameworks/database/mongo/index.mongo";

const databaseBuilder = () => {
  return Object.freeze({

    getDatabase:(type: "mongo" | "mysql")=>{

        if (type === "mongo"){
            return mongoDB
        } 
            return mysqlDB
        }

    }
  });
};



export default databaseBuilder;
