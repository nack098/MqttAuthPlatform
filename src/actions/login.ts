"use server";

import { getAccountDetail } from "@/database/database";

const formAction = async (data: FormData) => {
  const username = data.get("id")?.valueOf();
  const password = data.get("pwd")?.valueOf();
  if (
    username &&
    password &&
    typeof username === "string" &&
    typeof password === "string"
  ) {
    const res = await getAccountDetail(username, password);
    return res;
  } else {
    return {
      success: false,
      user: {},
    };
  }
};

export default formAction;
