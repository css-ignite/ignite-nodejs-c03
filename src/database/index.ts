import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'ignite_rentx_database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
    createConnection({
        ...options,
    })
        .then(() => {
            console.log("- - - - - - - - - - - - - - - - - - - - - - -");
            console.log("Connected to database!");
            console.log("- - - - - - - - - - - - - - - - - - - - - - -");
        })
        .catch((error) => {
            console.error("Connected fail!", error);
        });
});