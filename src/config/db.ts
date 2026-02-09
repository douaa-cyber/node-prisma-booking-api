// src/config/prisma.ts
import { PrismaClient } from "../generated/prisma/client"; // path to your generated client
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import "dotenv/config";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });
export default prisma;
