import type { Config } from "@jest/types"; // Sync object
import fs from "fs";
import path from "path";

const getPackageDir = (...name: string[]): string =>
  path.resolve(".", "packages", ...name);
const toJestDir = (p: string): string =>
  p.replace(path.resolve("."), "<rootDir>");

const getProjects = (): Config.InitialProjectOptions[] => {
  const packageDir = getPackageDir();
  return fs
    .readdirSync(packageDir)
    .map((found) => ({
      name: found,
      dir: getPackageDir(found),
    }))
    .filter(({ dir }) => fs.existsSync(dir))
    .filter(({ dir }) => fs.statSync(dir).isDirectory())
    .map(({ name }) => {
      const packageJson = JSON.parse(
        fs.readFileSync(getPackageDir(name, "package.json"), "utf-8"),
      );

      return {
        displayName: packageJson.name ?? name,
        testEnvironment: packageJson.jest?.testEnvironment ?? "node",
        transform: {
          "^.+\\.tsx?$": "ts-jest",
        },
        testMatch: [
          toJestDir(getPackageDir(name, "src", "**", "*.test.ts")),
          toJestDir(getPackageDir(name, "src", "**", "*.test.tsx")),
        ],
      };
    });
};

const config: Config.InitialOptions = {
  verbose: true,
  projects: getProjects(),
};
export default config;
