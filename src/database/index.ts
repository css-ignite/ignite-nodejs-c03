import { createConnection, getConnectionOptions } from 'typeorm';
import log from "log";

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
            console.log(`Connected to database`);
        })
        .catch((error) => {
            console.log(`Connected fail`);
        });
});