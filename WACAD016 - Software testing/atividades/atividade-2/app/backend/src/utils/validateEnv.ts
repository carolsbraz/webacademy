import { cleanEnv, port, str, num } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    HOST: str(),
    PORT: port(),
    NODE_ENV: str(),
    SALT_ROUNDS: num(),
    DATABASE_URL: str(),
  });
}

export default validateEnv;
