// Usage: ADMIN_EMAIL=you@company.com ADMIN_PASSWORD='long-passphrase' npm run admin:create
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD environment variables.");
  process.exit(1);
}
if (password.length < 12) {
  console.error("ADMIN_PASSWORD must be at least 12 characters.");
  process.exit(1);
}

const prisma = new PrismaClient();
const passwordHash = await bcrypt.hash(password, 12);
await prisma.adminUser.upsert({
  where: { email },
  update: { passwordHash },
  create: { email, passwordHash },
});
console.log(`Admin user ready: ${email}`);
await prisma.$disconnect();
