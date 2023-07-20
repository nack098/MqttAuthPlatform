"use client";

import { login } from "@/actions";
import React, { useState } from "react";

export interface LoginValue {
  id: string;
  pwd: string;
}

const Login: React.FC = () => {
  const [response, responseState] = useState<{
    success: undefined | boolean;
    user: any;
  }>({ success: undefined, user: {} });

  const action = async (formdata: FormData) => {
    const res = await login(formdata);
    responseState(res);
  };

  return (
    <form
      action={action}
      className="fixed flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-zinc-600 p-7 rounded-xl"
    >
      <h3 className="font-bold text-2xl">Login</h3>
      <label className="font-bold">ID</label>
      <input type="text" name="id" className="my-2 text-black" />
      <label className="font-bold">Password</label>
      <input type="password" name="pwd" className="my-2 text-black" />
      <input
        type="submit"
        className="text-white font-bold my-2 bg-sky-500 rounded-xl cursor-pointer duration-300 transition-colors hover:bg-red-500"
      />
      {typeof response.success !== "undefined" ? (
        !response.success ? (
          <label>There is an error please try again</label>
        ) : (
          <label>Success!</label>
        )
      ) : (
        ""
      )}
    </form>
  );
};

export default Login;
