import { json } from "@remix-run/node";

const env = process.env;

export const AdminLoader = () => {
  return json({
    message: "hello world",
    env: env.NODE_ENV,
  });
};
