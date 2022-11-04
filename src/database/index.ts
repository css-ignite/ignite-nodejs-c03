import { DataSource } from "typeorm";

const appDataSource = new DataSource({
    type: "postgres",
    host: "ignite_rentx_database",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx"
});

appDataSource.initialize()
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((error) => {
        console.error("Connected fail!", error);
    });