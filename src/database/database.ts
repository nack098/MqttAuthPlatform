import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

export const prisma = new PrismaClient();

export async function getAccountDetail(username: string, password: string) {
  const allusers = await prisma.account.findMany({
    where: { username: { equals: username } },
  });
  for (const user of allusers) {
    if (await bcrypt.compare(password, user.hash_password)) {
      return {
        success: true,
        user: {
          username: user.username,
          userId: user.userId,
          superuser: user.superuser === 1 ? true : false,
        },
      };
    }
  }
  return {
    success: false,
    user: {
      username: "",
      userId: "",
      superuser: false,
    },
  };
}

export async function createAccount(username: string, password: string) {
  const hash_password = await bcrypt.hash(password, 10);
  const user = await prisma.account.create({
    data: {
      username,
      hash_password,
    },
  });
  if (user) {
    return {
      success: true,
      user,
    };
  } else {
    return {
      success: false,
      user: {},
    };
  }
}
