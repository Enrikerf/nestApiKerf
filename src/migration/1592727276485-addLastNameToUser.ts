import {MigrationInterface, QueryRunner} from "typeorm";

export class addLastNameToUser1592727276485 implements MigrationInterface {
    name = 'addLastNameToUser1592727276485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
    }

}
