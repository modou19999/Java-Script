// importamos node
import process from 'node:process';

export const env = {
  PORT: process.env.PORT || '3000',
  NODE_ENV: process.env.NODE_ENV || 'dev',
  PROJECT_NAME: process.env.PROJECT_NAME || '15_Films',
  DEBUG: process.env.DEBUG || '15_Films*',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  PGUSER: process.env.PGUSER || 'postgres',
  PGPASSWORD: process.env.PGPASSWORD || 'postgres',
  PGHOST: process.env.PGHOST || 'localhost',
  PGPORT: process.env.PGPORT || '5433',
  PGDATABASE: process.env.PGDATABASE || 'films_db',
};
