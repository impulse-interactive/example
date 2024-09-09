import fs from "node:fs";

const json = JSON.parse(fs.readFileSync("./package.json", "utf8"));
export const name = json.name;
