import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function getAccountDetail(username: string, password: string) {
  const allusers = await prisma.account.findMany({
    where: { username: { equals: username } },
  });
  let currentUser = {};
  for (const user of allusers) {
    if (await bcrypt.compare(password, user.hash_password)) {
      currentUser = user;
      break;
    }
  }
  if (Object.keys(currentUser).length !== 0) {
    return {
      founded: true,
      user: currentUser,
    };
  } else {
    return {
      founded: false,
      user: {},
    };
  }
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
