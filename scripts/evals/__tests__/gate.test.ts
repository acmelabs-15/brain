import { describe, expect, test } from "bun:test";

import { defaultThreshold, gate } from "../gate";

function result(cases: { name: string; score: number; delta?: number }[], partial = false) {
  return {
    schemaVersion: 1,
    partial,
    partialReason: partial ? "cost_ceiling" : undefined,
    aggregates: {
      overallScore: cases.reduce((a, c) => a + c.score, 0) / cases.length,
      casesPassed: 0,
      casesTotal: cases.length,
    },
    cases: cases.map((c) => ({ name: c.name, aggregates: { score: c.score, delta: c.delta } })),
  };
}

describe("gate", () => {
  test("passes when every case meets the threshold and the run is complete", () => {
    const g = gate(
      result([
        { name: "a", score: 1, delta: 0.5 },
        { name: "b", score: 1 },
      ]),
      1,
    );
    expect(g.ok).toBe(true);
    expect(g.lines).toEqual(["pass  a  score 1.00  delta +0.50", "pass  b  score 1.00  delta n/a"]);
  });

  test("fails and names each case under the threshold", () => {
    const g = gate(
      result([
        { name: "a", score: 0.67, delta: -0.1 },
        { name: "b", score: 1 },
      ]),
      1,
    );
    expect(g.ok).toBe(false);
    expect(g.lines[0]).toBe("FAIL  a  score 0.67  delta -0.10");
  });

  test("a lower threshold lets a case through", () => {
    expect(gate(result([{ name: "a", score: 0.8 }]), 0.8).ok).toBe(true);
  });

  test("a partial run fails with its reason", () => {
    const g = gate(result([{ name: "a", score: 1 }], true), 1);
    expect(g.ok).toBe(false);
    expect(g.lines.at(-1)).toBe("partial run: cost_ceiling; scores are not trusted");
  });

  test("a document without cases is an error naming the field", () => {
    expect(() => gate({ schemaVersion: 1 }, 1)).toThrow("result has no cases array");
  });
});

test("the default threshold lets one judge miss in three through on a three-grader case", () => {
  expect(defaultThreshold).toBe(0.85);
  expect(gate(result([{ name: "a", score: 0.89 }]), defaultThreshold).ok).toBe(true);
  expect(gate(result([{ name: "a", score: 0.67 }]), defaultThreshold).ok).toBe(false);
});
