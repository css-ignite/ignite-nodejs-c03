import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: true,
    logging: true,
    entities: [
        "./src/database/entities/*.ts"
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
});

appDataSource.initialize()
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.error("Connected fail!", error);
    });

export { appDataSource };