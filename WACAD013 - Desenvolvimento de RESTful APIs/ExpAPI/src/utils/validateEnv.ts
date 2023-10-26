import { cleanEnv, str, port } from "envalid";

export function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
}
