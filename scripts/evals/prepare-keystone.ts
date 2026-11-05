/** Prepare reviewable sources, invented fixtures and unapproved options; this never calls a model. */
import { mkdir } from "node:fs/promises";
import path from "node:path";

import { keystoneCases, scaffoldKeystone } from "./keystone-cases";
import { prepareSnapshot, verifySnapshot } from "./keystone-snapshot";

export async function prepareKeystone(
  baselineSource: string,
  candidateSource: string,
  destination: string,
): Promise<void> {
  const root = path.resolve(destination);
  await mkdir(path.dirname(root), { recursive: true });
  await mkdir(root);
  const baseline = `${root}/baseline-plugin`;
  const candidate = `${root}/candidate-plugin`;
  await Promise.all([
    prepareSnapshot(baselineSource, baseline),
    prepareSnapshot(candidateSource, candidate),
  ]);
  await Promise.all([verifySnapshot(baseline), verifySnapshot(candidate)]);
  for (const c of keystoneCases) {
    await scaffoldKeystone(c, `${root}/preview-fixtures/${c.name}`, candidate);
  }
  await Bun.write(
    `${root}/evals.json`,
    JSON.stringify(
      {
        skill_name: "brain-keystones",
        evals: keystoneCases.map((c) => ({
          id: c.id,
          prompt: c.prompt,
          expected_output: c.expectations.join(" "),
          files: [],
          expectations: c.expectations,
        })),
      },
      null,
      2,
    ),
  );
  const common = {
    suite: "keystone",
    approved: false,
    baseline,
    candidate,
    candidateSource: path.resolve(candidateSource),
    output: `${root}/iteration-1`,
    budgetLedger: `${root}/budget-ledger.json`,
    timeoutSeconds: 480,
    maxCostUsd: 1.5,
    totalBudgetUsd: 32,
  };
  await Bun.write(
    `${root}/first-pair.options.json`,
    JSON.stringify({ ...common, cases: [keystoneCases[0]?.name] }, null, 2),
  );
  await Bun.write(
    `${root}/remaining.options.json`,
    JSON.stringify({ ...common, cases: keystoneCases.slice(1).map((c) => c.name) }, null, 2),
  );
}

if (import.meta.main) {
  const [baseline, candidate, output] = process.argv.slice(2);
  if (!baseline || !candidate || !output) {
    throw new Error(
      "usage: bun scripts/evals/prepare-keystone.ts <baseline-repo> <candidate-repo> <new-output-folder>",
    );
  }
  await prepareKeystone(baseline, candidate, output);
  console.log(
    "Prepared eight cases, two source snapshots and options with approved:false. No model ran.",
  );
}
