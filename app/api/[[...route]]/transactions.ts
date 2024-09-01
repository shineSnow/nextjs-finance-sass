import { Hono } from "hono";




const app = new Hono().get("/", async (c) => {
    c.json({ data: "demo" })
})

export default app;