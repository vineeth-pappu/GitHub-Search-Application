import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';

export const loadEnv = () => {

    // Setup command line options
    const options = commandLineArgs([
        {
            name: 'env',
            alias: 'e',
            defaultValue: 'production',
            type: String,
        },
    ]);

    // Set the env file
    const result = dotenv.config({
        path: `./env/.env.${options.env}`,
    });
    if (result.error) {
        throw result.error;
    }

}