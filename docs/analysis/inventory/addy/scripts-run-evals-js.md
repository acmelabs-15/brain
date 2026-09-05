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
verified: 2026-09-04 quote-check+coverage
---

# scripts/run-evals.js

## Purpose — required, verbatim
> "run-evals.js — skill eval runner for agent-skills." — scripts/run-evals.js:3

## Design intent — required
Provides an automated evaluation runner for skills in the `agent-skills` repository. Implements Tier 2 deterministic evaluations (TF-IDF cosine similarity scoring for positive and negative trigger prompt routing, collision detection across skill descriptions to guard against catalog overlap, case file coverage and schema validation against the skill-creator `evals.json` format, and a rank-1 ratchet threshold) suitable for CI, as well as an opt-in Tier 3 behavioral evaluation mode using headless `claude` (`-p`, `--output-format stream-json`, `--permission-mode acceptEdits`) to execute agent tasks in isolated throwaway workspaces with test fixtures, grading transcripts against explicit expectations.

## Phase — required
none

## Inputs — required
Command-line options `--behavioral <skill>` (scripts/run-evals.js:565), `--min-rank1 <pct>` (scripts/run-evals.js:566), and `--dry-run` (scripts/run-evals.js:581). Reads skill metadata from `skills/<dir>/SKILL.md` (scripts/run-evals.js:156), test cases from `evals/cases/<skill>.json` (scripts/run-evals.js:174), test fixtures from `evals/fixtures/<rel>` (scripts/run-evals.js:394), optional fixture patches from `.eval/working-tree.patch` (scripts/run-evals.js:406), and stdin for headless `claude` commands and grading prompts (scripts/run-evals.js:521,541).

## Outputs — required
- Console test logs and pass/fail summary status to stdout/stderr (scripts/run-evals.js:380-383,551)
- Graded evaluation results written to `evals/results/`: `grading.json` — scripts/run-evals.js:550
- Raw unparsed grader output on JSON error: `grading.raw.txt` — scripts/run-evals.js:545
- Temporary directory workspaces `agent-skills-eval-*` or `agent-skills-dialogue-eval-*` in `os.tmpdir()` cleaned up upon completion — scripts/run-evals.js:391,505,556

## Invokes — required
- file SKILL.md — scripts/run-evals.js:156
- file CASES_DIR — scripts/run-evals.js:174
- file FIXTURES_DIR — scripts/run-evals.js:394
- command git — scripts/run-evals.js:413
- command claude — scripts/run-evals.js:516

## Invoked by — required
- doc README.md — evals/README.md:28
- config test-plugin-install.yml — .github/workflows/test-plugin-install.yml:35
- script run-evals-test.js — scripts/run-evals-test.js:13

## Concepts named — required, verbatim
- `run-evals.js` — scripts/run-evals.js:3 — defined here
- `Tier 2` — scripts/run-evals.js:6 — used here
- `Trigger evals` — scripts/run-evals.js:7 — defined here
- `top_k` — scripts/run-evals.js:8 — used here
- `Routing collisions` — scripts/run-evals.js:10 — defined here
- `cosine similarity` — scripts/run-evals.js:11 — used here
- `Coverage` — scripts/run-evals.js:13 — used here
- `schema` — scripts/run-evals.js:13 — used here
- `behavioral evals` — scripts/run-evals.js:14 — used here
- `skill-creator` — scripts/run-evals.js:14 — used here
- `evals.json` — scripts/run-evals.js:14 — used here
- `Execution evals` — scripts/run-evals.js:15 — defined here
- `dialogue evals` — scripts/run-evals.js:16 — defined here
- `Rank-1 ratchet` — scripts/run-evals.js:17 — defined here
- `--min-rank1` — scripts/run-evals.js:17 — defined here
- `Tier 3` — scripts/run-evals.js:19 — used here
- `--behavioral` — scripts/run-evals.js:20 — defined here
- `--dry-run` — scripts/run-evals.js:20 — defined here
- `stream-json` — scripts/run-evals.js:23 — used here
- `acceptEdits` — scripts/run-evals.js:46 — used here
- `EXECUTOR_TOOLS` — scripts/run-evals.js:49 — defined here
- `stem` — scripts/run-evals.js:69 — defined here
- `tokenize` — scripts/run-evals.js:89 — defined here
- `buildCorpus` — scripts/run-evals.js:104 — defined here
- `cosine` — scripts/run-evals.js:127 — defined here
- `rankSkills` — scripts/run-evals.js:141 — defined here
- `runDeterministic` — scripts/run-evals.js:198 — defined here
- `materializeWorkspace` — scripts/run-evals.js:388 — defined here
- `parseGrading` — scripts/run-evals.js:429 — defined here
- `runBehavioral` — scripts/run-evals.js:464 — defined here

## Structure
- // ---------- tiny text pipeline ---------- — scripts/run-evals.js:60
- // ---------- loading ---------- — scripts/run-evals.js:151
- // ---------- tier 2 ---------- — scripts/run-evals.js:196
- // ---------- tier 3 (opt-in, via claude -p) ---------- — scripts/run-evals.js:386
- // ---------- main ---------- — scripts/run-evals.js:562

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/run-evals.js`, JavaScript (Node.js CommonJS), 590 lines
- documented invocation: "node scripts/run-evals.js" — evals/README.md:28
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun scripts/run-evals.js`, stdout `Running skill evals across 25 skills, 25 case files\n\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`, actual exit code: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: "Exit code 1 on any error-level failure." — scripts/run-evals.js:26
  - Actual exit paths: `process.exit(errors ? 1 : 0);` (scripts/run-evals.js:383), `process.exit(1);` on invalid skill name (scripts/run-evals.js:467), `process.exit(1);` on missing eval case file (scripts/run-evals.js:472), `process.exit(1);` on no behavioral evals (scripts/run-evals.js:478), `process.exit(failures ? 1 : 0);` (scripts/run-evals.js:559), `process.exit(1);` on invalid --min-rank1 value (scripts/run-evals.js:573), `process.exit(1);` on --min-rank1 with --behavioral (scripts/run-evals.js:579).
- for validators/gates: can it exit non-zero? Yes, exits 1 on any trigger evaluation failure, schema violation, routing collision, missing fixture, or rank-1 rate below minimum. Does it fail on the source repo's own default branch? No, exits 0 (136 checks passed, 0 errors, 86% rank-1 rate).
- does the output match what the documentation claims? Yes, validates all 25 skills and case files with 136 checks passed and reports rank-1 rate matching documentation.

## Defects — required
- `script-bug` · `scripts/run-evals.js:31` · Uses CommonJS `require()` without a local `package.json` specifying `"type": "commonjs"`, failing with `ReferenceError: require is not defined in ES module scope` when executed under Node.js in parent directories configured with `"type": "module"`.

## Observations
Includes a lightweight custom text tokenizer and stemmer (`scripts/run-evals.js:69-96`) implementing suffix stripping and character normalization without third-party dependencies. Fences execution traces between `===TRACE START===` and `===TRACE END===` markers (`scripts/run-evals.js:536`) with untrusted data boundary instructions to guard the LLM grader against prompt injection during behavioral evaluations.

## Context cost
24129 bytes, ~5700 tokens.
