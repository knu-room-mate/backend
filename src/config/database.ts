import { DataSource } from "typeorm";

export const Entities = [];

export const dataSource = new DataSource({
    type: "sqlite",
    database: "src/config/database.db",
    entities: Entities,
    synchronize: true,
});
