import { db } from "@/db/drizzle";
import { categories } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
import { Hono } from "hono";



const app = new Hono().get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c)

    if (!auth?.userId) {
        return c.json({ error: 'Unauthorized' }, 401)
    }

    const data = await db.select({ id: categories.id, name: categories.name }).from(categories).where(eq(categories.userId, auth.userId))

    return c.json({ data })
})

export default app;