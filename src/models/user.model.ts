import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/User';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: User): Promise<number> => {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute <ResultSetHeader>(`
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)
    `, [username, classe, level, password]);

    return insertId;
  };
}