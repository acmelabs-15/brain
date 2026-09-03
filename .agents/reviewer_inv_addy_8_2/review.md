# Review Report: `inv-addy-8`

**Reviewer:** `reviewer_inv_addy_8_2` (Reviewer 2)  
**Parent Orchestrator:** `cfa5f317-38e0-4d2b-a249-3fb962dfa066`  
**Target Unit:** `inv-addy-8`  
**Worker:** `worker_inv_addy_8_1`  
**Verdict:** **APPROVE**  
**Date:** 2026-09-03  

---

## 1. Executive Summary

This review assesses the deliverables produced for work unit `inv-addy-8` by `worker_inv_addy_8_1`. The scope includes:
1. `docs/analysis/inventory/addy/readme-md.md` (from `sources/addy/README.md`)
2. `docs/analysis/inventory/addy/contributing-md.md` (from `sources/addy/CONTRIBUTING.md`)
3. `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md` (from `sources/addy/hooks/SIMPLIFY-IGNORE.md`)
4. `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md` (from `sources/addy/hooks/simplify-ignore.sh`)
5. `docs/analysis/inventory/addy/hooks-session-start-test-sh.md` (from `sources/addy/hooks/session-start-test.sh`)
6. `docs/analysis/inventory/addy/_units/inv-addy-8.md` (Work Unit Report)
7. Manifest rows 125-129 in `docs/analysis/manifest/addy.md`
8. Status and inventory counts in `docs/plan/STATE.md`

All 5 inventory entries comply with `METHOD.md` rules R1–R6, the inventory entry template, and project conventions. Verification commands (`coverage.ts`, `glossary-lint.ts`, `bun test`, and standalone script executions in `sources/addy`) were executed independently and confirmed.

No integrity violations were detected. Specifically:
- No test results or expected outputs are hardcoded in source files.
- The worker did NOT patch or mask the failing `hooks/session-start-test.sh` script, but honestly documented its exit code 1 failure and traced the root cause to schema drift.
- No dummy/facade implementations or shortcuts bypassing requirements exist.

---

## 2. Verification Checks

### 2.1 Independent Reproduction of Script Executions

| Target Script / Command | Documented Claim | Independent Run Result | Verification |
|---|---|---|---|
| `echo '{}' \| bash hooks/simplify-ignore.sh` in `sources/addy` | Clean exit code `0`, empty stdout/stderr | Exit code `0`, empty stdout/stderr | **PASS** |
| `bash hooks/session-start-test.sh` in `sources/addy` | Exit code `1`, `Error: expected IMPORTANT priority, got undefined` at line 25 | Exit code `1`, verbatim error: `Error: expected IMPORTANT priority, got undefined` at `[stdin]:8:11` | **PASS** |
| `bash hooks/simplify-ignore-test.sh` in `sources/addy` | Exit code `0`, 21 passed across 10 tests | Exit code `0`, `Results: 21 passed, 0 failed` | **PASS** |

### 2.2 Project-Level Anti-Drift and Test Suites

| Command | Expected Output | Actual Output | Verification |
|---|---|---|---|
| `bun run scripts/synthesis/coverage.ts` | 0 empty required inventory fields | `Empty required inventory fields: 0` (1259 unchecked rows across remaining units) | **PASS** |
| `bun run scripts/synthesis/glossary-lint.ts` | Clean glossary lint | `Glossary lint: clean` | **PASS** |
| `bun test` | All tests pass | `89 pass, 0 fail, 155 expect() calls` (280.00ms) | **PASS** |

### 2.3 Verbatim Quotes and Line Attribution

Every verbatim quote in the 5 inventory entries was independently verified against `sources/addy`:
- `README.md`: Purpose quote from `README.md:3-5` verified verbatim. Section structure, commands list, and directory structure line citations verified.
- `CONTRIBUTING.md`: Purpose quote from `CONTRIBUTING.md:3-5` verified verbatim. Quality bar criteria (Specific, Verifiable, Battle-tested, Minimal) and hook testing instructions verified.
- `hooks/SIMPLIFY-IGNORE.md`: Purpose quote from `hooks/SIMPLIFY-IGNORE.md:3` verified verbatim. Hook settings and annotation syntax lines verified.
- `hooks/simplify-ignore.sh`: Purpose quote from `hooks/simplify-ignore.sh:2-10` verified verbatim. Exit paths and line citations verified.
- `hooks/session-start-test.sh`: Purpose quote from `hooks/session-start-test.sh:2` verified verbatim. Exit code paths and assertion lines verified.

### 2.4 Integrity and Method Compliance

- **R1 (Full reads, no sampling):** All 5 files were read in their entirety without omission.
- **R2 (Evidence and script execution):** All scripts were executed and compared with documented behavior.
- **R3 (Verbatim extraction):** Purpose, concepts, and structure headings are verbatim quotes with exact line numbers.
- **R4 (One vocabulary):** Package prefixes (`addy:Review`, `addy:Define`, etc.) were used consistently; `glossary-lint.ts` passed.
- **R5 (Defect vs. design intent):** Design intent is rigorously evaluated separately from implementation bugs. The worker highlighted the design utility of `session-start-test.sh` and `simplify-ignore.sh` while accurately detailing their defects.
- **R6 (Depth rule):** Over 120 named concepts were captured across the 5 files, formatted for Phase 2 concept cards.

---

## 3. Adversarial Challenges and Stress-Testing

### Challenge 1: The Failing Hook Gate (`hooks/session-start-test.sh`)
- **Assumption Challenged:** Could the test failure in `session-start-test.sh` be caused by an environmental discrepancy (e.g. missing `jq`, node version mismatch, or missing environment variables) rather than an upstream code defect?
- **Stress-Test & Inspection:**
  - `hooks/session-start.sh` was inspected across lines 1–29. Every execution path outputs Claude Code's standard envelope:
    `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`.
  - In contrast, `hooks/session-start-test.sh` (lines 24 and 36) checks `payload.priority !== 'IMPORTANT'` (with jq) and `payload.priority !== 'INFO'` (without jq), and lines 28, 32, 40 check `payload.message`.
  - Since `payload.priority` and `payload.message` are top-level properties that do not exist on the modern `hookSpecificOutput` envelope, `payload.priority` is unconditionally `undefined`.
  - Even under the no-jq fallback (`PATH=... bash hooks/session-start-test.sh`), `session-start.sh` line 14 emits `hookSpecificOutput`, causing line 36 of the test to fail with `Error: expected INFO priority when jq is missing, got undefined`.
- **Conclusion:** The failure is an immutable contract divergence caused by upstream upgrading `session-start.sh` without updating `session-start-test.sh` or `CONTRIBUTING.md`. The worker's defect categorization (`always-failing-gate`, `script-bug`, `doc-drift`) is 100% correct.

### Challenge 2: Concurrency Race Condition in `hooks/simplify-ignore.sh`
- **Assumption Challenged:** Does `hooks/simplify-ignore.sh` handle concurrent tool execution safely?
- **Analysis:**
  - Lines 190–198 handle lock acquisition via `mkdir "$CACHE/${ID}.lock"`.
  - If another process holds the lock and the lock is not stale (<60s old), line 197 executes `exit 0` immediately without blocking, retrying, or aborting the read tool.
  - If a concurrent Claude Code tool reads the file while it is in this intermediate unmasked state or while another tool is modifying it, Claude Code receives the unmasked source code directly, exposing protected blocks to the LLM.
- **Assessment:** The worker accurately surfaced this vulnerability in `hooks-simplify-ignore-sh.md` as a `script-bug`.

### Challenge 3: In-Place Disk Mutation Safety
- **Assumption Challenged:** Does in-place disk filtering risk permanent data loss during unexpected crashes or abrupt process terminations?
- **Analysis:**
  - `hooks/simplify-ignore.sh` stores the unmasked file in `$CACHE/${ID}.bak` and the file path in `$CACHE/${ID}.path`.
  - In `Stop` (lines 145–171), the hook restores `$orig` from `$bak`.
  - If a file was deleted or moved by the model, line 160 saves the original as `${orig}.recovered`.
  - However, if the process crashes mid-session without triggering `Stop`, the disk retains `BLOCK_<hash>` placeholders. `SIMPLIFY-IGNORE.md:73-77` documents manual crash recovery via `echo '{}' | bash hooks/simplify-ignore.sh`.
- **Assessment:** The worker accurately captured this mechanism and its operational risks.

---

## 4. Manifest and State Consistency

- **Manifest (`docs/analysis/manifest/addy.md`):** Rows 125–129 (`README.md`, `CONTRIBUTING.md`, `hooks/SIMPLIFY-IGNORE.md`, `hooks/simplify-ignore.sh`, `hooks/session-start-test.sh`) are correctly marked `[x]`.
- **Work Unit Report (`docs/analysis/inventory/addy/_units/inv-addy-8.md`):** Accurately enumerates all 5 assigned files, generated artifacts, scripts executed with actual exit codes, and cross-unit notes.
- **Project State (`docs/plan/STATE.md`):**
  - Row 72 records `inv-addy-8` as `complete` in session `006` with output `docs/analysis/inventory/addy/_units/inv-addy-8.md`.
  - Global inventoried count in line 434 reflects completed inventory progress across the batch.

---

## 5. Review Verdict

**APPROVE**

Work unit `inv-addy-8` fulfills all requirements of `METHOD.md` R1–R6, the inventory entry template, and project verification standards. No revisions are requested.
