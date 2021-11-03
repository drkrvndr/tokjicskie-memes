import lowdb from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync.js";
const adapter = new FileAsync("./news.json");
export const db = await lowdb(adapter);
