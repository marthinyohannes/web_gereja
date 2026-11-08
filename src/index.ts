import { Elysia } from "elysia";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

export const app = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Server is running smoothly",
  }))
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
