import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCategories1641586076281 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name:"categories",
            colums: [
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true
                },
                {
                    name: "id",
                    type: "varchar",
                    isUnique:true

                }
            ]
        })
        ) 
    }
        public async down(queryRunner: QueryRunner): Promise<void>{
    }
}



