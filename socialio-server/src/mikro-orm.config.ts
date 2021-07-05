import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  dbName: "socialio",
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  debug: !__prod__,
  type: "postgresql",
  user: "postgres",
  password: "postgres",
  entities: [Post, User],
} as Parameters<typeof MikroORM.init>[0];