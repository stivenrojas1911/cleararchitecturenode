import mysql, { Connection } from "mysql";

class MysqlClass {
  private static mysqlConn: Connection;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static async getMysqlConn(
    host = "localhost",
    user = "root",
    password = "",
    database = "high_school",
    port = "3306"
  ): Promise<Connection> {
    if (!MysqlClass.mysqlConn) {

      const conn = mysql.createConnection({
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


export default MysqlClass
