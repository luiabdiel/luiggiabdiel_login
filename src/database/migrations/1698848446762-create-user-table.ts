import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1698848446762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE user (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        fullName VARCHAR(100) NOT NULL,
        userName VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL,
        isTeacher BOOLEAN NOT NULL,
        createdAt TIMESTAMP,
        updatedAt TIMESTAMP
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      DROP TABLE user
    `);
  }
}
