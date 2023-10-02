import type { Config } from "@jest/types";
import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { resolve } from "path";

const getPackageDir = (...name: string[]): string =>
  resolve(".", "packages", ...name);
const toJestDir = (p: string): string => p.replace(resolve("."), "<rootDir>");

const getProjects = (): Config.InitialProjectOptions[] => {
  const packageDir = getPackageDir();
  return readdirSync(packageDir)
    .map((found) => ({
      name: found,
      dir: getPackageDir(found),
    }))
    .filter(({ dir }) => existsSync(dir))
    .filter(({ dir }) => statSync(dir).isDirectory())
    .map(({ name }) => {
      const packageJson = JSON.parse(
        readFileSync(getPackageDir(name, "package.json"), "utf-8"),
      );

      return {
        displayName: packageJson.name ?? name,
        testEnvironment: packageJson.jest?.testEnvironment ?? "node",
        transform: {
          "^.+\\.tsx?$": "ts-jest",
        },
        moduleNameMapper: {
          "\\.(css|less|scss|sss|styl)$":
            "<rootDir>/node_modules/jest-css-modules",
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
