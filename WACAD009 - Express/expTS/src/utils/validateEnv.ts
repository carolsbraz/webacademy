import { cleanEnv, str, port } from "envalid";

function validateEnv(){
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
    })
}

export default validateEnv;