# Handoff Report: inv-addy-15 Cross-Cutting Verification

**Work Unit:** `inv-addy-15` (Phase 1 Inventory Extraction)  
**Agent:** Explorer 3 Gen 2 (`explorer_inv_addy_15_3_gen2`)  
**Parent Orchestrator ID:** `6c3faf20-5077-4549-84dc-6a2dd5b1b92d`  
**Date:** 2026-09-03  
**Status:** Hard Handoff (Task Complete)  

---

## 1. Observation

1. **Assigned File Coverage (R1):**
   - Directly read all 4 assigned files in full without sampling:
     - `sources/addy/skills/frontend-ui-engineering/SKILL.md`: 10,711 bytes, 329 lines.
     - `sources/addy/skills/shipping-and-launch/SKILL.md`: 10,137 bytes, 311 lines.
     - `sources/addy/skills/spec-driven-development/SKILL.md`: 12,163 bytes, 246 lines.
     - `sources/addy/skills/constraint-driven-development/references/floor-guard.md`: 5,851 bytes, 100 lines.
   - Total bytes: 38,862 bytes, matching `docs/plan/STATE.md` row `inv-addy-15`.

2. **Floor Guard Implementation & Silent Failure on Untracked Files:**
   - In `sources/addy/skills/constraint-driven-development/references/floor-guard.md`:
     - Line 9 verbatim: `Input: the diff between the merge base and the working tree (added and removed lines, plus untracked files). A guard that reads only git diff misses new files and staged-but-uncommitted work.`
     - Lines 28–31 verbatim:
       ```javascript
       const git = (args) => {
         try { return execFileSync('git', args, { encoding: 'utf8' }); }
         catch { return null; }
       };
       ```
     - Lines 39–42 verbatim:
       ```javascript
       const untracked = (git(['ls-files', '--others', '--exclude-standard']) ?? '')
         .split('\n').filter(Boolean)
         .map((f) => git(['diff', '--no-index', '--unified=0', '/dev/null', f]) ?? '')
         .join('\n');
       ```
   - Execution command: Created an untracked file containing `// TODO: fix this later` and ran `floor-guard.mjs`.
   - Tool result: `git diff --no-index` exited with code 1 due to presence of diffs. `execFileSync` threw an error caught by `catch { return null; }`. The mapping evaluated to `null ?? ''` (empty string). `floor-guard.mjs` output: `floor-guard: clean`, exit code `0`. All untracked violations were silently ignored.

3. **Acronym Collision (`sdd-cache`):**
   - In `sources/addy/hooks/SDD-CACHE.md:3`: `Cross-session citation cache for source-driven-development. Skips redundant WebFetch calls without weakening the skill's 'verify against current docs' guarantee.`
   - Commands executed:
     `echo '{"tool_input": {"url": "https://react.dev/reference/react/useActionState", "prompt": "extract signature"}, "tool_response": "..."}' | bash hooks/sdd-cache-post.sh`
     Exited with code `0` and generated `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json`.
   - `sdd-cache` implements caching for `source-driven-development`, not `spec-driven-development`.

4. **Script Execution & CommonJS/ESM Environment:**
   - In `sources/addy/scripts/`: `validate-skills.js`, `validate-commands.js`, `validate-reference-links.js`, `validate-artifact-paths.js`, `validate-versions.js`.
   - Tool command: `node scripts/validate-skills.js`
   - Verbatim error: `ReferenceError: require is not defined in ES module scope, you can use import instead. This file is being treated as an ES module because it has a '.js' file extension and '/Users/peterkloss/Dev/ACMElabs/brain-v2/package.json' contains "type": "module".`
   - Tool command: `bun scripts/validate-skills.js`
   - Result: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`, exit code `0`.
   - Tool command: `bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js`
   - Result: 35 tests passed across 5 files, 0 failed.
   - Tool command: `bun scripts/run-evals.js`
   - Result: 136 checks passed across 25 skills and 25 case files. Trigger rank-1 rate: 86%. Exit code `0`.

5. **Path Allowlist vs. Multi-Module Spec Drift:**
   - `sources/addy/scripts/validate-artifact-paths.js:35-40`:
     ```javascript
     const ARTIFACT_ALLOWLIST = new Set([
       'SPEC.md',
       'docs/SPEC.md',
       'tasks/plan.md',
       'tasks/todo.md',
     ]);
     ```
   - `sources/addy/skills/spec-driven-development/SKILL.md:65`: `Save the approved map at the project root and each module's spec alongside it, named by module id (SPEC-identity.md, SPEC-billing.md) — the map, not filename guessing, is the index of what exists.`

6. **Command vs. Skill Orchestration Drift:**
   - `.claude/commands/ship.md:7-18`: Mandates spawning three subagents concurrently (`code-reviewer`, `security-auditor`, `test-engineer`) in a single turn and merging reports.
   - `sources/addy/skills/shipping-and-launch/SKILL.md`: Completely lacks the 3-subagent parallel fan-out architecture; written as a manual pre-launch checklist and staged rollout guide.

---

## 2. Logic Chain

1. **From Observation 1 to Scope Integrity:**
   All four assigned files exist on disk, their sizes match the manifest and `STATE.md` exactly, and all lines were viewed from first line to last. Thus, Phase 1 extraction coverage requirement R1 is satisfied.

2. **From Observation 2 to Floor Guard Defect Conclusion (DEF-01):**
   `floor-guard.md:9` explicitly defines input as including untracked files to catch new files before commit. In the script implementation, `git diff --no-index` is used on untracked files. By Git design, `git diff --no-index` exits with code 1 when differences exist. In Node.js, `execFileSync` throws on any non-zero exit code. Because `git()` wraps `execFileSync` in a try/catch block that returns `null`, the detection of differences in untracked files triggers an exception, returns `null`, and falls back to `''`. Therefore, any untracked file with violations is silently ignored. This directly falsifies the claim of diff-scoped floor coverage for untracked work.

3. **From Observation 3 to Acronym Disambiguation (DEF-02):**
   Both `source-driven-development` and `spec-driven-development` share the abbreviation "SDD". The existence of `hooks/sdd-cache-*` led the dispatch to associate them with `spec-driven-development`. However, source inspection of `SDD-CACHE.md:3` reveals that `sdd-cache` specifically caches `WebFetch` documentation lookups for `source-driven-development`. `spec-driven-development` operates without hooks.

4. **From Observation 4 to Toolchain Guidance (DEF-03):**
   The repository root has `"type": "module"`, while `sources/addy/` lacks a `package.json`. Node resolves module type by walking up parent directories, causing `require` to fail in Node. Bun supports CommonJS seamlessly regardless of parent ESM configurations. Therefore, all Addy tooling must be executed with Bun.

5. **From Observation 5 to Artifact Validation Defect (DEF-05):**
   `validate-artifact-paths.js` was introduced to prevent silent artifact path drift. However, its static allowlist only accepts `SPEC.md` and `docs/SPEC.md`. In `spec-driven-development/SKILL.md:65`, Addy introduced Phase 0 decomposition which produces `SPEC-<module-id>.md`. The validator's regex `/(?:[A-Za-z0-9._[\]-]+\/)*(?:spec|plan|todo)\.md/gi` fails to guard `SPEC-<module-id>.md` because the filenames end with `<module-id>.md` rather than `spec.md`.

6. **From Observation 6 to Architecture Drift (DEF-06):**
   Addy separates the skill (`skills/shipping-and-launch/SKILL.md`) from the command (`.claude/commands/ship.md`). The command adds an entire multi-agent orchestration layer (Phase A parallel fan-out of 3 specialist personas, Phase B merge, Phase C go/no-go) that does not exist in the skill itself. The synthesis in Part 2 must capture this orchestration layer in the command/agent specifications, not just port the skill markdown.

---

## 3. Caveats

1. External documentation for `constraint-driven-development` (`skills.addy.ie/skills/constraint-driven-development/`) was not available during snapshotting and is marked `unavailable` in the manifest; analysis was performed solely on repo sources.
2. `floor-guard.mjs` was tested in isolation since it is presented as a reference template rather than a tracked script file in `sources/addy/scripts/`.

---

## 4. Conclusion

The cross-cutting verification for `inv-addy-15` is fully established. All four files have been exhaustively read and analyzed. The Addy skill catalog in this partition spans three distinct lifecycle stages:
- **`Define`**: `spec-driven-development` (specification & capability mapping) and `floor-guard.md` (continuous quality bar enforcement).
- **`Build`**: `frontend-ui-engineering` (component architecture, WCAG 2.1 AA accessibility, state hierarchy).
- **`Ship`**: `shipping-and-launch` (pre-launch checklist, feature flagging, staged rollout, and parallel persona fan-out in `/ship`).

One critical bug (DEF-01: `floor-guard.mjs` dropping untracked files) and several architectural/naming discrepancies (DEF-02 through DEF-08) were uncovered and documented in `report.md`. Per METHOD.md R5, these defects are documented on the record and will inform Phase 4 alignment decisions and Phase 7 implementation without dismissing the underlying designs.

---

## 5. Verification Method

To independently verify all claims made in this report:

1. **Verify Full Reads & File Sizes:**
   ```bash
   ls -la sources/addy/skills/frontend-ui-engineering/SKILL.md \
          sources/addy/skills/shipping-and-launch/SKILL.md \
          sources/addy/skills/spec-driven-development/SKILL.md \
          sources/addy/skills/constraint-driven-development/references/floor-guard.md
   ```
   Confirm byte counts: 10711, 10137, 12163, 5851.

2. **Reproduce Floor Guard Untracked Bug (DEF-01):**
   Inspect lines 28–31 and 39–42 of `sources/addy/skills/constraint-driven-development/references/floor-guard.md`. Note that `git diff --no-index` exits with code 1 on diffs, triggering `execFileSync` throw, causing `git()` to return `null`, which evaluates to `''`.

3. **Verify Script Toolchain Execution via Bun:**
   Run from `sources/addy/`:
   ```bash
   bun scripts/validate-skills.js
   bun scripts/validate-reference-links.js
   bun scripts/validate-artifact-paths.js
   bun scripts/validate-commands.js
   bun scripts/validate-versions.js
   bun scripts/run-evals.js
   bun test ./scripts/run-evals-test.js
   ```
   Confirm all scripts exit with code 0 and all 35 tests pass.

4. **Verify SDD Hook Acronym Disambiguation:**
   Inspect `sources/addy/hooks/SDD-CACHE.md:1-10` to confirm that `sdd-cache` targets `source-driven-development`.
