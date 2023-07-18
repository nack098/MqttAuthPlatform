"use client";

import React, { useState } from "react";

export interface LoginValue {
  id: string;
  pwd: string;
}

const Login: React.FC = () => {
  const [form, formState] = useState<LoginValue>({ id: "", pwd: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formState({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    formState({ id: "", pwd: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed flex flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-zinc-600 p-7 rounded-xl"
    >
      <label className="font-bold">ID</label>
      <input
        type="text"
        name="id"
        onChange={(e) => {
          handleChange(e);
        }}
        value={form.id}
        className="my-2 text-black"
      />
      <label className="font-bold">Password</label>
      <input
        type="password"
        name="pwd"
        onChange={(e) => {
          handleChange(e);
        }}
        value={form.pwd}
        className="my-2 text-black"
      />
      <input
        type="submit"
        className="text-white font-bold mt-2 bg-sky-500 rounded-xl cursor-pointer duration-300 transition-colors hover:bg-red-500"
      />
    </form>
  );
};

export default Login;
