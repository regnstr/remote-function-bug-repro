import { query } from "$app/server";

export const getTheTime = query(async () => {
  return new Date();
})
