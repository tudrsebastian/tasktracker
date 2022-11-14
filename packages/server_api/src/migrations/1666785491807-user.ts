import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1666785491807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user"("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "full_name" character varying )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
