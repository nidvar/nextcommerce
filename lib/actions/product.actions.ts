'use server'

import { PrismaClient } from "@/lib/generated/prisma";
// import { convertToPlainObject } from "../constants/utils";

export async function getLatestProducts(){
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: 4,
        orderBy: { createdAt: 'desc' },
    });

    // console.log(convertToPlainObject);

    return data;
};