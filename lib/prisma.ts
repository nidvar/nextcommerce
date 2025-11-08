import { PrismaClient } from "@prisma/client";

// Prevent multiple instances in development
declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma =
    globalThis.prisma ??
    new PrismaClient({
        log: ["query", "info", "warn", "error"], // optional logging
    });

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
