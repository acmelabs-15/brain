# Handoff Report — Work Unit `inv-addy-10`

**Unit ID:** `inv-addy-10`  
**Package:** `addy` (`sources/addy/`)  
**Worker:** `worker_inv_addy_10_1`  
**Session:** 006  
**Status:** Hard Handoff (Complete)

---

## 1. Observation

1. **Source File Inventory & Verification:**
   - `sources/addy/scripts/run-evals.js` (24,129 bytes, 590 lines): Zero-dependency Node script implementing Tier 2 (deterministic TF-IDF lexical routing checks, description collision detection, and rank-1 ratchet floor enforcement) and Tier 3 (opt-in headless agent evaluation via `claude -p` in throwaway git workspaces with fixture materialization and prompt-injection-fenced LLM grading).
   - `sources/addy/scripts/validate-commands-test.js` (5,471 bytes, 151 lines): Unit and integration test suite using `node:test` verifying command parity across `.claude/commands/*.md`, `.gemini/commands/*.toml`, and `commands/*.toml`, including alias mapping (`plan` -> `planning`) and escaped quote handling in TOML.
   - `sources/addy/scripts/run-evals-test.js` (10,378 bytes, 290 lines): Test suite using `node:test` (15 passing tests) validating `scripts/run-evals.js` schema validation, grader output scorecard consistency (`parseGrading`), provisional eval gating, rank-1 floor enforcement, and git baseline fixture materialization.
   - `sources/addy/scripts/validate-skills.js` (2,401 bytes, 70 lines): Primary CLI entry point and CI gate for Tier 1 structural validation of all 25 skills in `skills/` against `docs/skill-anatomy.md` via `scripts/lib/skill-lint.js`.

2. **Empirical Execution Results:**
   - `bun scripts/run-evals.js` (in `sources/addy`): Exited with code `0`. Output: `Running skill evals across 25 skills, 25 case files\n\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`.
   - `bun scripts/run-evals.js --min-rank1 80`: Exited with code `0` (PASSED).
   - `bun scripts/run-evals.js --min-rank1 90`: Exited with code `1` (Output: `trigger rank-1 rate 86% is below required 90%`, FAILED). Verified non-zero gating path.
   - `bun scripts/run-evals.js --behavioral test-driven-development --dry-run`: Exited with code `0` (Output: printed 3 execution eval dry-run plans with `claude -p` invocation arguments).
   - `bun test ./scripts/run-evals-test.js`: Exited with code `0`. Ran 15 tests across 1 file in 390.00ms, `15 pass, 0 fail`.
   - `bun scripts/validate-skills.js`: Exited with code `0`. Checked 25 skills, 0 errors, 0 warnings, `PASSED`. Both `idea-refine` and `using-agent-skills` correctly tagged as `(section checks exempt)`.
   - `bun test ./scripts/validate-commands-test.js`: Exited with code `0`. Ran 6 tests across 1 file in 108.00ms, `6 pass, 0 fail`.

3. **Defects & Anomalies Discovered:**
   - **Environment Module Boundary Conflict (`other`):** All 4 scripts are CommonJS without the `.cjs` extension, and `sources/addy/` has no `package.json`. When run via `node` within an enclosing repository whose root `package.json` contains `"type": "module"` (such as `brain-v2`), Node treats them as ESM and throws `ReferenceError: require is not defined in ES module scope`. They execute cleanly under `bun` and in standalone checkouts.
   - **Documentation Drift (`doc-drift`):** `CLAUDE.md:43` asserts `- npm test — Not applicable (this is a documentation project)`. In reality, GitHub Actions CI (`.github/workflows/test-plugin-install.yml:32, 58`) runs automated test suites including `run-evals-test.js` and `validate-commands-test.js`.
   - **Missing Help Option (`other`):** `scripts/run-evals.js` does not handle `--help` or `-h`, falling through to `runDeterministic(null)` and silently running the full Tier 2 suite.
   - **Documentation Drift in Flags (`doc-drift`):** `CLAUDE.md:45` omits `--min-rank1` and `--dry-run` flags described in `evals/README.md:29, 33` and implemented in `scripts/run-evals.js:566, 581`.

4. **Created Deliverables on Disk:**
   - `docs/analysis/inventory/addy/scripts-run-evals-js.md` (14,034 bytes)
   - `docs/analysis/inventory/addy/scripts-validate-commands-test-js.md` (7,240 bytes)
   - `docs/analysis/inventory/addy/scripts-run-evals-test-js.md` (8,414 bytes)
   - `docs/analysis/inventory/addy/scripts-validate-skills-js.md` (7,338 bytes)
   - `docs/analysis/inventory/addy/_units/inv-addy-10.md` (5,207 bytes)
   - Manifest updated: `docs/analysis/manifest/addy.md` rows 140–143 marked `[x]`
   - State updated: `docs/plan/STATE.md` row 74 set to `complete`, rows inventoried updated to `141 / 0 / 0`

---

## 2. Logic Chain

1. **Rule R1 & R2 Compliance:**
   - From Observation 1, all 4 assigned files were read line by line from beginning to end without sampling (R1).
   - From Observation 2, every script in scope was executed directly using its documented and test invocations under `bun`, with output and exit codes recorded against code exit paths (R2).
2. **Rule R3 & R4 Compliance:**
   - Every purpose string was extracted verbatim in quotes with line numbers (e.g. `scripts/run-evals.js:3-26`, `scripts/validate-skills.js:5-11`). Where test files lacked explicit purpose headers, the first substantive code block was quoted and noted `(no explicit purpose statement)` (R3).
   - All concept terms were prefixed with `addy:` before Phase 4 decisions (R4).
3. **Rule R5 & R6 Compliance:**
   - All defects (ESM/CJS resolution collision, missing `--help` handler, doc-drift in `CLAUDE.md`) were recorded on each inventory entry without dismissing the underlying architectural intent of the multi-tier evaluation system (R5).
   - All named techniques, frameworks, and mechanisms (e.g., `Tier 2`, `Tier 3`, `Rank-1 ratchet`, `cosine similarity`, `materializeWorkspace`, `parseGrading`, `command twins`) were cataloged verbatim with line citations to seed Phase 2 concept cards (R6).
4. **Consistency & Verification:**
   - Running `bun scripts/synthesis/coverage.ts` confirmed `Empty required inventory fields: 0` across all generated files.
   - Running `bun scripts/synthesis/glossary-lint.ts` verified clean glossary usage.
   - Manifest check confirmed 141 rows checked in `addy.md`.

---

## 3. Caveats

- Live behavioral evaluation with headless Claude Code (`claude -p` without `--dry-run`) was not executed because Tier 3 is documented as opt-in, token-spending, and disabled in CI (`evals/README.md:20, 26`). Behavioral evaluation was verified via `--dry-run` mode and via the 15 mock and subprocess unit tests in `scripts/run-evals-test.js`.
- Node execution inside the nested `brain-v2` workspace fails due to root `"type": "module"`; this is an environmental configuration behavior of Node.js and not an intrinsic defect of Addy's codebase when run in its native repository root or via `bun`.

---

## 4. Conclusion

Work unit `inv-addy-10` is 100% complete, fully conforming to METHOD.md rules R1 through R6, the inventory entry schema, and project verification tooling. All 4 target inventory entries, the unit report, manifest updates, and STATE.md updates are committed to disk.

---

## 5. Verification Method

To independently verify the deliverables:

1. **Manifest and Schema Verification:**
   ```bash
   bun scripts/synthesis/coverage.ts
   ```
   *Expected result:* `Empty required inventory fields: 0`.

2. **Glossary Compliance:**
   ```bash
   bun scripts/synthesis/glossary-lint.ts
   ```
   *Expected result:* `Glossary lint: clean`.

3. **Script Execution Verification:**
   ```bash
   cd sources/addy
   bun scripts/run-evals.js
   bun scripts/run-evals.js --min-rank1 80
   bun scripts/run-evals.js --min-rank1 90
   bun test ./scripts/run-evals-test.js
   bun scripts/validate-skills.js
   bun test ./scripts/validate-commands-test.js
   ```
   *Expected result:* All positive commands exit 0; `--min-rank1 90` exits 1.

4. **File Inspection:**
   Inspect the 4 inventory entries in `docs/analysis/inventory/addy/` and the work unit report in `docs/analysis/inventory/addy/_units/inv-addy-10.md`.
