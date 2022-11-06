import { createConnection } from "typeorm";

const datasource = createConnection()
    .then(() => {
        console.log("createConnection - Connected to database!");
    })
    .catch((error) => {
        console.error("createConnection - Connected fail!", error);
    });

export { datasource };

// import { DataSource } from "typeorm";

// const datasource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "docker",
//     password: "ignite",
//     database: "rentx",
//     synchronize: true,
//     logging: true,
// });

// const appDataSource = datasource.initialize()
//     .then(() => {
//         console.log("Connected to database!");
//     })
//     .catch((error) => {
//         console.error("Connected fail!", error);
//     });

// export { appDataSource };