# Handoff Report — Unit `inv-addy-9`

**Unit:** `inv-addy-9`  
**Package:** `addy` (`sources/addy`)  
**Investigator:** `explorer_inv_addy_9_1`  
**Working Directory:** `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_9_1`  
**Date:** `2026-09-03T05:20:00Z`  
**Status:** Hard Handoff (Task Complete)

---

## 1. Observation

### File Set Verification
All 10 assigned files exist on disk at the pinned SHA `d2c37ef6225dd8726cdd369a8030307f48592d26`, verified via `ls -la` and `git -C sources/addy rev-parse HEAD`:
1. `sources/addy/hooks/sdd-cache-post.sh` (4,567 bytes)
2. `sources/addy/hooks/sdd-cache-pre.sh` (4,261 bytes)
3. `sources/addy/hooks/session-start.sh` (1,392 bytes)
4. `sources/addy/hooks/simplify-ignore-test.sh` (8,709 bytes)
5. `sources/addy/hooks/SDD-CACHE.md` (8,398 bytes)
6. `sources/addy/hooks/hooks.json` (364 bytes)
7. `sources/addy/scripts/validate-reference-links-test.js` (5,666 bytes)
8. `sources/addy/scripts/validate-reference-links.js` (3,832 bytes)
9. `sources/addy/scripts/validate-artifact-paths.js` (4,102 bytes)
10. `sources/addy/scripts/validate-versions-test.js` (957 bytes)

### Script Executions and Exit Codes
1. **`hooks/sdd-cache-post.sh` Smoke Test:**
   - Command: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"},"tool_response":"useActionState signature"}' | bash hooks/sdd-cache-post.sh`
   - Exit code: `0`
   - Result: Captured origin ETag `"f7790fa7286c973a240237ba72409b0a"` via curl HEAD and created `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json`. Removed temporary cache post-test.
2. **`hooks/sdd-cache-pre.sh` Cache Hit Test:**
   - Command: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract"}}' | bash hooks/sdd-cache-pre.sh`
   - Exit code: `2`
   - Result: Server responded 304; hook emitted cached content to stderr between `----- BEGIN CACHED CONTENT -----` and `----- END CACHED CONTENT -----` markers and terminated with exit code `2`.
3. **`hooks/session-start.sh`:**
   - Command: `bash hooks/session-start.sh`
   - Exit code: `0`
   - Result: Emitted valid JSON envelope `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n# Using Agent Skills..."}}`.
4. **`hooks/simplify-ignore-test.sh`:**
   - Command: `bash hooks/simplify-ignore-test.sh`
   - Exit code: `0`
   - Result: Evaluated 10 test scenarios, output: `Results: 21 passed, 0 failed`.
5. **`scripts/validate-reference-links.js`:**
   - Command: `bun scripts/validate-reference-links.js`
   - Exit code: `0`
   - Result: `25 skills checked — 0 error(s) — PASSED`.
6. **`scripts/validate-reference-links-test.js`:**
   - Command: `bun test ./scripts/validate-reference-links-test.js`
   - Exit code: `0`
   - Result: `7 pass, 0 fail. Ran 7 tests across 1 file. [116.00ms]`.
7. **`scripts/validate-artifact-paths.js`:**
   - Command: `bun scripts/validate-artifact-paths.js`
   - Exit code: `0`
   - Result: `7 files checked — 0 error(s) — PASSED`.
8. **`scripts/validate-versions-test.js`:**
   - Command: `bun test ./scripts/validate-versions-test.js`
   - Exit code: `0`
   - Result: `1 pass, 0 fail. Ran 1 test across 1 file. [33.00ms]`. All 5 manifests match tag `0.6.8`.

### Defects Observed
1. **Cross-file Contradiction & Broken Test (`session-start.sh` vs `session-start-test.sh`):**
   - In `hooks/session-start.sh:5-7,25`:
     ```bash
     # Every output path must emit the standard SessionStart envelope
     #   {"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}
     jq -cn ... '{hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $context}}'
     ```
   - In `hooks/session-start-test.sh:24-26`:
     ```javascript
     if (payload.priority !== 'IMPORTANT') {
       throw new Error(`expected IMPORTANT priority, got ${payload.priority}`);
     }
     ```
   - Running `bash hooks/session-start-test.sh` in `sources/addy` outputs:
     `Error: expected IMPORTANT priority, got undefined` (Exit code: `1`).
2. **Orphan Test Suite:** `hooks/simplify-ignore-test.sh` exists in `hooks/` and passes completely (21/21 assertions), but is not executed anywhere in `.github/workflows/test-plugin-installation.yml`.
3. **Orphan Documentation:** `hooks/SDD-CACHE.md` documents the sdd-cache hook feature but is not linked from `README.md`, `CLAUDE.md`, or `skills/source-driven-development/SKILL.md`.

---

## 2. Logic Chain

1. **Adherence to Method (R1-R6):** Every one of the 10 assigned files was read in its entirety from line 1 to EOF using `view_file`.
2. **Script Verification (R2):** Every script was executed with actual arguments in `sources/addy/`. Documented exit codes were systematically compared against actual exit paths in code:
   - `sdd-cache-post.sh` only exits 0 (fails open).
   - `sdd-cache-pre.sh` exits 0 on bypass/miss and 2 on cache hit (the Claude Code hook convention for aborting tool calls and surfacing stderr).
   - `session-start.sh` only exits 0.
   - `simplify-ignore-test.sh` exits 0 on pass, 1 on failure.
   - Validators (`validate-reference-links.js`, `validate-artifact-paths.js`) exit 0 on clean and 1 on violations (`process.exit(1)`).
   - Tests (`validate-reference-links-test.js`, `validate-versions-test.js`) exit 0 on pass, 1 on failure via `node:test`.
3. **Identification of `session-start-test.sh` Invalidation:** Because `session-start.sh` is in `inv-addy-9` and its test script `session-start-test.sh` was in `inv-addy-8`, executing `session-start-test.sh` revealed that `session-start.sh` was migrated to the standard Claude Code/Codex hook envelope schema, while `session-start-test.sh` was neglected, resulting in an unconditional test failure on the main branch.
4. **Architectural Insight on Lifecycle Governance:**
   - `validate-artifact-paths.js` establishes an allowlist mechanism (`ARTIFACT_ALLOWLIST`) enforcing that producer commands (`/spec`, `/plan`) and consumer commands/skills (`/build`, `spec-driven-development`, `planning-and-task-breakdown`) cannot drift out of sync.
   - `validate-reference-links.js` enforces filesystem resolution of shared checklists from nested skill directories, resolving the `../../references/` regression.
   - `sdd-cache` delegates freshness to HTTP origin servers (`304 Not Modified`) rather than storing mutable assumptions in agent memory, preventing hallucination while preserving speed.

---

## 3. Caveats

- `session-start-test.sh` was assigned to unit `inv-addy-8`. The defect is documented here because `session-start.sh` belongs to `inv-addy-9` and the failure directly concerns the output schema of `session-start.sh`.
- The sdd-cache smoke tests made an outbound HTTP request to `https://react.dev/reference/react/useActionState` to verify ETag revalidation. The network call succeeded and confirmed HTTP 304 handling. In an offline environment, `curl` would fail and the hooks would fail open (exit 0).
- No other caveats.

---

## 4. Conclusion

Work unit `inv-addy-9` is 100% complete. All 10 inventory entries have been generated with no empty required fields, strict verbatim extracts with `path:line` citations, and comprehensive script execution logs. All outputs and the work-unit report are fully written and indexed in `.agents/explorer_inv_addy_9_1/analysis.md`.

---

## 5. Verification Method

To independently verify these findings:

```bash
# 1. Verify git commit pin
git -C sources/addy rev-parse HEAD
# Output must equal: d2c37ef6225dd8726cdd369a8030307f48592d26

# 2. Run all unit scripts and tests from sources/addy
cd sources/addy
bash hooks/simplify-ignore-test.sh                       # Expect exit 0, 21 passed
bun scripts/validate-reference-links.js                  # Expect exit 0, 25 skills checked PASSED
bun test ./scripts/validate-reference-links-test.js      # Expect exit 0, 7 pass
bun scripts/validate-artifact-paths.js                   # Expect exit 0, 7 files checked PASSED
bun test ./scripts/validate-versions-test.js             # Expect exit 0, 1 pass

# 3. Verify session-start.sh output shape
bash hooks/session-start.sh | jq .hookSpecificOutput.hookEventName
# Output: "SessionStart"

# 4. Verify the session-start-test.sh defect
bash hooks/session-start-test.sh
# Expect exit 1 with: Error: expected IMPORTANT priority, got undefined

# 5. Verify coverage and glossary-lint in project root
cd ../..
bun scripts/synthesis/glossary-lint.ts                   # Expect: Glossary lint: clean
```

Invalidation conditions:
- If `hooks/session-start.sh` is reverted to emit `{priority, message}`, `session-start-test.sh` would pass but Claude Code plugin hook validation would fail.
- If any guarded file in `scripts/validate-artifact-paths.js` references an unallowlisted artifact path, `validate-artifact-paths.js` exits 1.
