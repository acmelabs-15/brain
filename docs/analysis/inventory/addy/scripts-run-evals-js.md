---
package: addy
path: scripts/run-evals.js
type: script
bytes: 24129
unit: inv-addy-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/run-evals.js

## Purpose — required, verbatim
> "run-evals.js — skill eval runner for agent-skills." — scripts/run-evals.js:3

## Design intent — required
Provides the evaluation harness for the agent-skills catalog across Tier 2 (deterministic, fast, zero-token CI testing of trigger prompt ranking, catalog routing collisions, and fixture/schema validation) and Tier 3 (opt-in, token-spending headless Claude execution and dialogue trace grading). Without this script, skill descriptions could drift into routing collisions or fail to trigger when users supply natural language queries, and behavioral expectations could not be verified automatically against real workspace fixtures or dialogue transcripts.

## Phase — required
none

## Inputs — required
- Command line arguments: optional `--behavioral <skill>` — scripts/run-evals.js:20, `--dry-run` — scripts/run-evals.js:20, and `--min-rank1` — scripts/run-evals.js:17.
- Skill definitions: reads `skills/*/SKILL.md` files from `SKILLS_DIR` — scripts/run-evals.js:37 for frontmatter metadata (`name` and `description`).
- Eval case definitions: reads `evals/cases/*.json` from `CASES_DIR` — scripts/run-evals.js:38 for positive and negative trigger prompts and behavioral eval specifications.
- Eval fixtures: resolves and reads fixtures from `FIXTURES_DIR` — scripts/run-evals.js:39 into temporary workspaces during Tier 3 execution.
- Headless Claude agent: invokes `claude` CLI via child process in Tier 3 mode for both execution trace generation and LLM grading.

## Outputs — required
- Console reporting: prints per-skill validation status, trigger rank-1 rate, check totals, and overall `PASSED` or `FAILED` verdict — scripts/run-evals.js:380-383.
- Exit code: exits 0 on success, 1 on any error-level failure — scripts/run-evals.js:26.
- Eval grading artifacts: in Tier 3 non-dry-run mode, writes grading JSON results or raw grading responses to `RESULTS_DIR` — scripts/run-evals.js:40.

## Invokes — required
none

## Invoked by — required
- script scripts/run-evals-test.js — scripts/run-evals-test.js:13
- doc evals/README.md — evals/README.md:28
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:62
- doc CLAUDE.md — CLAUDE.md:45
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:35

## Concepts named — required, verbatim
- `Tier 2` — scripts/run-evals.js:6 — defined here
- `Trigger evals` — scripts/run-evals.js:7 — defined here
- `Routing collisions` — scripts/run-evals.js:10 — defined here
- `Rank-1 ratchet` — scripts/run-evals.js:17 — defined here
- `Tier 3` — scripts/run-evals.js:19 — defined here
- `Execution evals` — scripts/run-evals.js:22 — defined here
- `dialogue evals` — scripts/run-evals.js:23 — defined here
- `buildCorpus` — scripts/run-evals.js:104 — defined here
- `cosine` — scripts/run-evals.js:127 — defined here
- `rankSkills` — scripts/run-evals.js:141 — defined here
- `runDeterministic` — scripts/run-evals.js:198 — defined here
- `materializeWorkspace` — scripts/run-evals.js:388 — defined here
- `parseGrading` — scripts/run-evals.js:429 — defined here
- `runBehavioral` — scripts/run-evals.js:464 — defined here

## Structure
- `tiny text pipeline` — scripts/run-evals.js:60
- `loading` — scripts/run-evals.js:151
- `tier 2` — scripts/run-evals.js:196
- `tier 3 (opt-in, via claude -p)` — scripts/run-evals.js:386
- `main` — scripts/run-evals.js:562

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/run-evals.js`, language: JavaScript (Node.js/Bun CLI), lines: 590
- documented invocation: `node scripts/run-evals.js` — scripts/run-evals.js:20
- **executed:** yes
- actual command run: `bun scripts/run-evals.js` (in `sources/addy`), abridged stdout: `Running skill evals across 25 skills, 25 case files\n\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`, **actual exit code:** 0; also tested dry-run behavioral mode `bun scripts/run-evals.js --dry-run --behavioral spec-driven-development`, abridged stdout: `[dry-run] eval 1: execution trace in workspace + 1 fixture(s)...`, **actual exit code:** 0
- documented exit codes: `Exit code 1 on any error-level failure.` — scripts/run-evals.js:26 vs. actual exit paths in code:
  - `process.exit(errors ? 1 : 0);` — scripts/run-evals.js:383
  - `process.exit(failures ? 1 : 0);` — scripts/run-evals.js:559
  - `process.exit(1);` — scripts/run-evals.js:467
  - `process.exit(1);` — scripts/run-evals.js:472
  - `process.exit(1);` — scripts/run-evals.js:478
  - `process.exit(1);` — scripts/run-evals.js:573
  - `process.exit(1);` — scripts/run-evals.js:579
- for validators/gates: can it exit non-zero? Yes, exits 1 on schema errors, missing fixtures, trigger rank failures, collision threshold breaches, or ratchet drop below `--min-rank1`. Does it fail on the source repo's own default branch? No, exits 0 with 136 passed checks.
- does the output match what the documentation claims? Yes, runs deterministic Tier 2 evals across all 25 catalog skills and case files.

## Defects — required
none

## Observations
- Implements a self-contained, zero-dependency text processing pipeline (stemming, tokenization, stop-word filtering, TF-IDF vectorization, and cosine similarity) directly in ~90 lines of JavaScript.
- Distinguishes between `COLLISION_WARN` (0.5) and `COLLISION_ERROR` (0.75) for description overlap to prevent catalog bloat and routing confusion.
- Tier 3 behavioral evals isolate tests into temporary git repositories initialized with a local `Skill Eval` identity to enable clean inspection of commits and working tree patches.
- Passes traces to Claude via stdin to prevent `E2BIG` operating system argument length errors.

## Context cost
24,129 bytes (~6,032 tokens). In Tier 2 mode, reads all 25 `SKILL.md` files (~250 KB) and 25 `evals/cases/*.json` files (~100 KB), totaling ~374 KB (~93,500 tokens).
