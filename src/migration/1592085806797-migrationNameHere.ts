import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere1592085806797 implements MigrationInterface {
    name = 'migrationNameHere1592085806797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "city"`);
    }

}
