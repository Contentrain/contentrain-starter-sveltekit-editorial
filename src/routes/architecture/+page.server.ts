import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { PageServerLoad } from "./$types";

type ModelField = {
  type?: string;
};

type ModelSchema = {
  id: string;
  kind: string;
  domain: string;
  fields?: Record<string, ModelField>;
};

export const load: PageServerLoad = async () => {
  const rootDir = process.cwd();
  const starterConfig = JSON.parse(
    await readFile(path.join(rootDir, "contentrain.starter.json"), "utf8"),
  ) as { domains: string[] };
  const modelDir = path.join(rootDir, ".contentrain", "models");
  const modelFiles = (await readdir(modelDir)).sort();
  const models = await Promise.all(
    modelFiles.map(async (file) =>
      JSON.parse(await readFile(path.join(modelDir, file), "utf8")) as ModelSchema,
    ),
  );

  return {
    groups: starterConfig.domains.map((domain) => ({
      domain,
      models: models.filter((model) => model.domain === domain),
    })),
  };
};
