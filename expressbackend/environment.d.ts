export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      DB_USER: string;
      DB_CONNECT: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}