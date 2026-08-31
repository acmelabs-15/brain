# 2026-08-31 14:54 · The merged implement skill — PLAN-005 Part 4

- Goal: PLAN-005 Part 4 — the merged `implement` (ADR-006 D4/D5): incremental-implementation's rules and increment cycle, Matt's working rhythm and TDD-at-seams hook, stack discovery with the no-redundant-rerun rule, the DoD tier gates at the tick, the plan/ticket consumption contract with the freshness dial, the slicing escape citing the planner; model-invocable (the old disable-model-invocation dropped — the description guards routing); incremental-implementation to a pointer stub; call-site citers retarget. Acceptance: the description measured against the incremental-implementation baseline (implement was typed-only — no measurable claim lost), a headless render, validators green.
- Status: done
- Plan: PLAN-005 · part 4
- Outcome: PLAN-005 Part 4 done in one commit (`7389aca`): implement carries both lineages' Build doctrine behind a measured, model-invocable description; incremental-implementation is a stub; the fixtures are quarantined from the suite at the cause. Next: Part 5, diagnosing-bugs, in a fresh session.

## Narrative

One push (`7389aca`). Two verification saves this part: the baseline sweep came back all-zero on positives — suspicious enough to probe rather than celebrate, and the probes showed the model consulting nothing at all for the weak phrasings (the no-consult class), which reframed five "failures" as a behavioral ceiling rather than a description defect; and bun's fixture collection was caught by a drifting test count (29→30), with the first bunfig key an empirically refuted guess before the real one landed. commands/build.md deliberately untouched — Part 6 rewrites it; the stub keeps it working meanwhile.

## Changes (one entry per commit, in order)

### 2026-08-31 · feat(implement): the merged Build skill — consumption contract with the freshness dial, stack discovery and the no-rerun rule, the increment cycle with TDD at pre-agreed seams, simplicity and scope rules, the DoD tier gates at the tick, the slicing escape to the planner; incremental-implementation retires to a stub, deprecation-and-migration retargets; description measured 15/20 vs an all-zero baseline with negatives 10/10 (five sub-threshold rows probe-verified as no-consult behavior, not routing losses), render quote-back green; bunfig gains pathIgnorePatterns so eval fixtures never join the repo suite (PLAN-005 Part 4) · 7389aca

- Summary: implement is the merged Build skill (PRD-002 requirement 5), model-invocable — Matt's typed-only 16-liner and Addy's 256-line doctrine in one 122-line body: the consumption contract (end-to-end behaviour, durable tickets explored fresh per the freshness dial, oversized tasks returned to the planner), stack discovery with the no-rerun rule, the increment cycle with TDD at the pre-agreed seams and Matt's test economy (focused tests in the loop, full suite once at the task's end), the simplicity/scope/one-thing rules with the noticed-but-not-touching offer, safe landing (flags, defaults, revertability), the DoD tiers as gates (Correctness+Quality at the tick; the part checkpoint and plan-close converge named), stop-the-line into diagnosing-bugs and doubt for high-risk. Measured 15/20 with negatives 10/10 against a baseline that scored zero on every positive; the five sub-threshold rows probe-verified as the no-consult class (the model just starts building — no competitor consulted), so no iteration could buy them and /build remains the primary, explicit path. Render quote-back green. The 30th-test discovery — bun collecting the fixture's reports.test.js — fixed at the cause with bunfig pathIgnorePatterns (the dead testPathIgnorePatterns key tried first, refuted empirically, replaced).
- Why: PLAN-005 Part 4 Task 1 (ADR-006 D4/D5; ANA-011's parts pool; the corpus-seeded eval set and fixtures).
- Files:
  - `bunfig.toml` (+2/−0) — pathIgnorePatterns excludes eval fixtures from the suite
  - `skills/deprecation-and-migration/SKILL.md` (+1/−1) — the see-also retargeted to implement
  - `skills/implement/SKILL.md` (+114/−8) — the merged body: contract, discovery, cycle, rules, gates, failure path
  - `skills/implement/evals/evals.json` (+32/−0) — two behavioral cases (reports slice; sunk-cost pressure) with provenance
  - `skills/implement/evals/fixtures/implement-pressure/draft-export.js` (+17/−0) — behavioral fixture, from the corpus
  - `skills/implement/evals/fixtures/implement-pressure/scenario.md` (+9/−0) — behavioral fixture, from the corpus
  - `skills/implement/evals/fixtures/implement/reports.js` (+7/−0) — behavioral fixture, from the corpus
  - `skills/implement/evals/fixtures/implement/reports.test.js` (+12/−0) — behavioral fixture, from the corpus
  - `skills/implement/evals/fixtures/implement/tasks/plan.md` (+8/−0) — behavioral fixture, from the corpus
  - `skills/implement/evals/results/trigger/merge-1/implement.sonnet.envelope.json` (+395/−0) — the sweeps of record (envelopes carry conditions)
  - `skills/implement/evals/results/trigger/merge-1/implement.sonnet.json` (+191/−0) — the sweeps of record (envelopes carry conditions)
  - `skills/implement/evals/results/trigger/merge-1/implement.sonnet.log` (+3/−0) — the sweeps of record (envelopes carry conditions)
  - `skills/implement/evals/results/trigger/merge-1/old-incremental.sonnet.envelope.json` (+395/−0) — the sweeps of record (envelopes carry conditions)
  - `skills/implement/evals/results/trigger/merge-1/old-incremental.sonnet.json` (+191/−0) — the sweeps of record (envelopes carry conditions)
  - `skills/implement/evals/results/trigger/merge-1/old-incremental.sonnet.log` (+3/−0) — the sweeps of record (envelopes carry conditions)
  - `skills/implement/evals/trigger-eval.json` (+82/−0) — 10 positives (both lineages' phrasings) + 10 hard negatives
  - `skills/incremental-implementation/SKILL.md` (+3/−247) — retired to a pointer stub
