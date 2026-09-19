/**
 * Gate CI on an eval result.
 *
 *   bun run evals:gate <aggregate-result.json> [--threshold 1.0]
 *
 * Exit 0 when the run is complete and every case scores at or above the threshold.
 * Exit 1 otherwise, or exit 2 when the file cannot be read as a result document.
 */

export type CaseResult = { name: string; aggregates?: { score?: number; delta?: number } };
export type Gate = { ok: boolean; lines: string[] };

function fmt(n: number | undefined, signed = false): string {
  if (n === undefined) {
    return "n/a";
  }
  const fixed = n.toFixed(2);
  return signed && n >= 0 ? `+${fixed}` : fixed;
}

export function gate(doc: unknown, threshold: number): Gate {
  const result = doc as { partial?: boolean; partialReason?: string; cases?: CaseResult[] };
  if (!Array.isArray(result.cases)) {
    throw new TypeError("result has no cases array");
  }
  const lines: string[] = [];
  let ok = true;
  for (const c of result.cases) {
    const score = c.aggregates?.score;
    const pass = score !== undefined && score >= threshold;
    if (!pass) {
      ok = false;
    }
    lines.push(
      `${pass ? "pass" : "FAIL"}  ${c.name}  score ${fmt(score)}  delta ${fmt(c.aggregates?.delta, true)}`,
    );
  }
  if (result.partial === true) {
    ok = false;
    lines.push(`partial run: ${result.partialReason ?? "unknown"}; scores are not trusted`);
  }
  return { ok, lines };
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  const [path] = args;
  const at = args.indexOf("--threshold");
  const threshold = at === -1 ? 1 : Number(args[at + 1]);
  if (path === undefined || Number.isNaN(threshold)) {
    console.error("usage: gate.ts <aggregate-result.json> [--threshold <0..1>]");
    process.exit(2);
  }
  let doc: unknown;
  try {
    doc = await Bun.file(path).json();
  } catch (error) {
    console.error(`cannot read ${path}: ${(error as Error).message}`);
    process.exit(2);
  }
  const verdict = gate(doc, threshold);
  for (const line of verdict.lines) {
    console.log(line);
  }
  console.log(verdict.ok ? `every case meets ${threshold}` : `gate failed at ${threshold}`);
  process.exit(verdict.ok ? 0 : 1);
}
