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
    .then(() => {
        console.log("- - - - - - - - - - - - - - - - - - - - - - -");
        console.log("Connected to database!");
        console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    })
    .catch((error) => {
        console.log("- - - - - - - - - - - - - - - - - - - - - - -");
        console.error("Connected fail!", error);
        console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    });

export { datasource };