import { DataSource } from "typeorm";

const datasource = new DataSource({
    type: "postgres",
    host: "ignite_rentx_database",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: true,
    logging: true,
    migrations: [
        ".src/database/migrations"
    ]
});

const appDataSource = datasource.initialize()
    .then(async () => {
        datasource.runMigrations().then(() => {
            console.log("Migrations ok!");
        });
        // datasource.dropDatabase()
        // AppDataSource.undoLastMigration()
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.error("Connected fail!", error);
    });

export { datasource };