import MysqlClass from './createDatabase/createdatabase.mysql';



const mysqlDB = ()=>{

  return Object.freeze({
    connectDatabase:  () => MysqlClass,
    
    
  });


};

export default mysqlDB;









