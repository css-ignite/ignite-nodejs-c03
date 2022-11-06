
// -----------------------------
// TENTATIVA 3
// -----------------------------

// import { createConnection, getConnectionOptions } from 'typeorm';

// interface IOptions {
//     host: string;
// }

// getConnectionOptions().then(options => {
//     const newOptions = options as IOptions;
//     newOptions.host = 'ignite_rentx_database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//     createConnection({
//         ...options,
//     })
//         .then(() => {
//             console.log("- - - - - - - - - - - - - - - - - - - - - - -");
//             console.log("Connected to database!");
//             console.log("- - - - - - - - - - - - - - - - - - - - - - -");
//         })
//         .catch((error) => {
//             console.error("Connected fail!", error);
//         });
// });

// export { createConnection };


// -----------------------------
// TENTATIVA 2
// -----------------------------


// import { createConnection } from "typeorm";

// const datasource = createConnection()
//     .then(() => {
//         console.log("createConnection - Connected to database!");
//     })
//     .catch((error) => {
//         console.error("createConnection - Connected fail!", error);
//     });

// export { datasource };


// -----------------------------
// TENTATIVA 1
// -----------------------------


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