import { useLoaderData } from "@remix-run/react";
import type { AdminLoader } from "./loader.server";

export function Admin() {
  const data = useLoaderData<typeof AdminLoader>();

  return (
    <>
      <p>{data.message}</p>
      <pre>{data.env}</pre>
    </>
  );
}
