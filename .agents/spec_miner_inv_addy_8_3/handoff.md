# Handoff Report: Specification Mining for `inv-addy-8`

**Agent:** `spec_miner_inv_addy_8_3`  
**Parent Orchestrator:** `cfa5f317-38e0-4d2b-a249-3fb962dfa066`  
**Handoff Type:** Hard (task complete)  
**Date:** 2026-09-03  

---

## 1. Observation

1. **Assigned Files in `inv-addy-8` (`docs/analysis/manifest/addy.md:125-129`):**
   - `README.md` (25,223 bytes, lines 1–429)
   - `CONTRIBUTING.md` (7,179 bytes, lines 1–124)
   - `hooks/SIMPLIFY-IGNORE.md` (3,863 bytes, lines 1–91)
   - `hooks/simplify-ignore.sh` (12,173 bytes, lines 1–303)
   - `hooks/session-start-test.sh` (1,224 bytes, lines 1–47)
   - Total bytes: 49,662. Exactly matches `STATE.md:72` (`| inv-addy-8 | addy | 5 | 49662 | in-progress | 006 | — |`).

2. **Always-Failing Gate / Test Defect in `session-start-test.sh`:**
   - Command run: `cd sources/addy && bash hooks/session-start-test.sh`
   - Exit code: `1`
   - Stderr:
     ```
     [stdin]:8
         throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
         ^

     Error: expected IMPORTANT priority, got undefined
         at [stdin]:8:11
     ```
   - Verbatim claim in `CONTRIBUTING.md:87-90`:
     ```bash
     bash hooks/session-start-test.sh
     ```
     "Expected output: `session-start JSON payload OK`. The script exits non-zero on any assertion failure."
   - Verbatim implementation in `hooks/session-start.sh:21-25`:
     ```bash
     jq -cn \
       --arg context "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.

     $CONTENT" \
       '{hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $context}}'
     ```
   - Direct cause: `hooks/session-start.sh` emits Claude Code's standard `hookSpecificOutput` envelope. `hooks/session-start-test.sh:24` attempts to read top-level `payload.priority` (which is `undefined`), causing an assertion throw on the default repository branch.

3. **Crash Recovery & Testing of `simplify-ignore.sh`:**
   - Command run: `cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh` → Exit code `0`, empty stdout/stderr.
   - Command run: `cd sources/addy && bash hooks/simplify-ignore-test.sh` → Exit code `0`, output: `Results: 21 passed, 0 failed`.

4. **Addy Repository Baseline Validation:**
   - `bun scripts/validate-skills.js` → Exit code `0` (25 skills checked — 0 errors)
   - `bun scripts/validate-commands.js` → Exit code `0` (9 commands checked — 0 errors)
   - `bun scripts/validate-reference-links.js` → Exit code `0` (25 skills checked — 0 errors)
   - `bun scripts/validate-artifact-paths.js` → Exit code `0` (7 files checked — 0 errors)
   - `bun scripts/validate-versions.js` → Exit code `0` (all plugin manifests use version 0.6.8)
   - `bun test ./scripts/validate-artifact-paths-test.js ...` → Exit code `0` (43 passed, 0 failed)

5. **Internal Contradictions & Doc-Drift in `README.md`:**
   - `README.md:24`: "9 slash commands that map to the development lifecycle" and table lines 27–36 lists 9 commands (`/spec`, `/plan`, `/build`, `/test`, `/constraints`, `/review`, `/webperf`, `/code-simplify`, `/ship`).
   - `README.md:381-383`: Directory tree notes "8 slash commands (Claude Code)", "8 slash commands (Gemini CLI)", "8 slash commands (Antigravity CLI)".
   - `README.md:220`: Heading `## All 24 Skills` vs line 222: "The pack includes 25 skills total — 24 lifecycle skills plus the using-agent-skills meta-skill."
   - `README.md:268`: Lists review severity labels as `Nit/Optional/FYI`, drifting from `agents/code-reviewer.md:51-57` (`Critical`, `Required`, `Optional`, `Nit`) and `.claude/commands/review.md:15` (`Critical`, `Important`, `Suggestion`).

6. **Coverage Baseline:**
   - `bun scripts/synthesis/coverage.ts`: Unchecked manifest rows: `1289`, Empty required inventory fields: `0`.
   - `bun scripts/synthesis/glossary-lint.ts`: `Glossary lint: clean`.

---

## 2. Logic Chain

1. From Observation 1, `inv-addy-8` is cleanly partitioned into 5 source files totaling 49,662 bytes, which maps to lines 125–129 in `docs/analysis/manifest/addy.md` and row `inv-addy-8` in `docs/plan/STATE.md`.
2. From Observation 2, executing `hooks/session-start-test.sh` as documented in `CONTRIBUTING.md:87` produces an immediate exit code 1 with `Error: expected IMPORTANT priority, got undefined`. Comparing `hooks/session-start.sh` against `hooks/session-start-test.sh` demonstrates that the hook was modernized to Claude Code's nested `hookSpecificOutput` envelope, while the test script and documentation were never updated. Per `METHOD.md` §4 and R5, this must be documented as an `always-failing-gate` / `script-bug` / `doc-drift` defect in both `contributing-md.md` and `hooks-session-start-test-sh.md`.
3. From Observation 3, `simplify-ignore.sh` correctly executes crash recovery and passes all 21 unit tests under `hooks/simplify-ignore-test.sh`. Its architecture (PreToolUse read filtering, PostToolUse write expansion, Stop cache recovery) is fully functional and cleanly documented.
4. From Observation 5, `README.md` contains three clear documentation drift defects (command counts, skill counts, and review severity taxonomy) that must be cataloged in `readme-md.md` for resolution during Phase 3/4 concordance.
5. Therefore, the exact targets, fields, scripts, defects, edge cases, and step-by-step instructions have been determined and fully synthesized into `report.md` to guide the worker subagent without ambiguity.

---

## 3. Caveats

- **Upstream Defect Preservation:** The failure of `session-start-test.sh` is an authentic upstream defect in `sources/addy/`. Per `METHOD.md` R5 ("Defect is not dismissal"), neither the Spec Miner nor the Worker should edit `sources/addy/` to fix the test. The defect must be accurately recorded in the inventory entries and unit report.
- **Concurrent Batch Execution:** Work units `inv-addy-6` through `inv-addy-10` were batched concurrently in session 006. When the Worker updates `STATE.md` row counts (`Rows inventoried`), it must read `STATE.md` dynamically to increment the existing tally by 5.

---

## 4. Conclusion

Specification extraction for work unit `inv-addy-8` is complete. 
- All 5 files were analyzed in full.
- Target paths and slugs are:
  - `docs/analysis/inventory/addy/readme-md.md`
  - `docs/analysis/inventory/addy/contributing-md.md`
  - `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md`
  - `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md`
  - `docs/analysis/inventory/addy/hooks-session-start-test-sh.md`
  - `docs/analysis/inventory/addy/_units/inv-addy-8.md`
- Key defects, commands, edge cases, and features are documented in detail in `.agents/spec_miner_inv_addy_8_3/report.md`.
- The Worker implementation plan is ready for immediate execution.

---

## 5. Verification Method

To independently verify the findings in this report:

1. **Verify source files exist and check byte counts:**
   ```bash
   wc -c sources/addy/README.md sources/addy/CONTRIBUTING.md sources/addy/hooks/SIMPLIFY-IGNORE.md sources/addy/hooks/simplify-ignore.sh sources/addy/hooks/session-start-test.sh
   ```
   Must yield exactly 25223, 7179, 3863, 12173, and 1224 bytes (total 49662).

2. **Verify the `session-start-test.sh` defect:**
   ```bash
   cd sources/addy && bash hooks/session-start-test.sh
   ```
   Must exit with code `1` and print `Error: expected IMPORTANT priority, got undefined`.

3. **Verify `simplify-ignore.sh` crash recovery:**
   ```bash
   cd sources/addy && echo '{}' | bash hooks/simplify-ignore.sh
   ```
   Must exit with code `0`.

4. **Verify specification report on disk:**
   ```bash
   test -f /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_8_3/report.md
   ```
