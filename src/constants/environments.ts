import "dotenv/config";

export const HOST = process.env.DATABASE_HOST;
export const DBPORT = Number(process.env.DATABASE_PORT);
export const USERNAME = process.env.DATABASE_NAME;
export const PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE = process.env.DATABASE_USERNAME;

export const PORT = process.env.PORT;
