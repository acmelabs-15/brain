# Handoff Report: inv-addy-22 Explorer 1

**Author:** Explorer 1 (`teamwork_preview_explorer`)  
**Working Directory:** `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_1`  
**Recipient:** Orchestrator (`orchestrator_inv_addy_22_2`, ID: `b5a107ba-96e6-44dc-b23e-f495191e347d`)  
**Type:** Soft Handoff  
**Timestamp:** 2026-09-03T17:28:30Z  

---

## 1. Observation

1. **Test & Validation Execution:**
   - Command: `cd sources/addy && bun scripts/validate-skills.js` → Exit code: `0`.
     - Direct output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`.
     - Explicit line: `✓ using-agent-skills (section checks exempt)`.
   - Command: `cd sources/addy && bun scripts/validate-reference-links.js` → Exit code: `0`.
     - Direct output: `25 skills checked — 0 error(s) — PASSED`.
   - Command: `cd sources/addy && bun scripts/validate-commands.js` → Exit code: `0`.
     - Direct output: `9 commands checked — 0 error(s) — PASSED` (`build`, `code-simplify`, `constraints`, `plan`, `review`, `ship`, `spec`, `test`, `webperf`).
   - Command: `cd sources/addy && bun scripts/validate-artifact-paths.js` → Exit code: `0`.
     - Direct output: `7 files checked — 0 error(s) — PASSED`.
   - Command: `cd sources/addy && bun test ./scripts/*-test.js` → Exit code: `0`.
     - Direct output: `35 pass, 0 fail across 5 files [839.00ms]`.
   - Command: `cd sources/addy && bun scripts/run-evals.js` → Exit code: `0`.
     - Direct output: `136 checks passed — 0 error(s), 0 warning(s) trigger rank-1 rate: 86% PASSED`.
   - Command: `bun scripts/synthesis/coverage.ts` → Exit code: `1`.
     - Direct output: `Unchecked manifest rows: 1210\nEmpty required inventory fields: 0`.
   - Command: `bun scripts/synthesis/glossary-lint.ts` → Exit code: `0`.
     - Direct output: `Glossary lint: clean`.

2. **Source Inspection & Line Evidence:**
   - `sources/addy-external/using-agent-skills.md` (21,955 bytes, 20 lines HTML snapshot):
     - `line 1`: `<title>using-agent-skills - agent-skills</title><meta name="description" content="Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow.">`
     - `line 5`: `<span class="crumb-phase" data-astro-cid-jrlgpo3w>Meta</span>`, `<span class="chip phase-chip" data-astro-cid-jrlgpo3w><span class="phase-dot" data-astro-cid-jrlgpo3w></span>Meta phase</span>`, `<div class="detail-when"><span class="detail-when-label">Use when</span> <span>Starting a session or deciding which skill applies.</span></div>`
     - `line 8`: `<code class="cmd-text">npx skills add addyosmani/agent-skills --skill using-agent-skills</code>`
     - `lines 8-10`: `<ul class="anatomy">` listing 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification.
     - `line 12`: `<h3 class="side-title">Meta phase</h3><p class="side-blurb">Route work to the right skill and set shared operating rules.</p>`
   - `sources/addy/skills/using-agent-skills/SKILL.md` (10,426 bytes, 193 lines Markdown):
     - `line 3`: `description: Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked.`
     - `line 10`: `Agent Skills is a collection of engineering workflow skills organized by development phase. Each skill encodes a specific process that senior engineers follow. This meta-skill helps you discover and apply the right skill for your current task.`
     - `lines 45-115`: Replaces standard anatomy with `Core Operating Behaviors` (Surface Assumptions, Manage Confusion Actively, Push Back When Warranted, Enforce Simplicity, Maintain Scope Discipline, Verify Don't Assume).
     - `lines 116-130`: `Failure Modes to Avoid`.
     - `lines 168-192`: Quick reference table mapping 23 skills across 6 phases (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`).
   - `sources/addy-external/test-driven-development.md` (26,483 bytes, 20 lines HTML snapshot):
     - `line 1`: `<title>test-driven-development - agent-skills</title><meta name="description" content="Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought.">`
     - `line 5`: `<span class="crumb-phase">Build</span>`, `<span class="chip phase-chip">Build phase</span>`, `<span class="detail-cmd-badge mono">/test</span>`, `<div class="detail-when"><span class="detail-when-label">Use when</span> <span>Implementing logic, fixing bugs, or changing behavior.</span></div>`
     - `line 8`: `<code class="cmd-text">npx skills add addyosmani/agent-skills --skill test-driven-development</code>`
     - `line 12`: `<h3 class="side-title">Build phase</h3><p class="side-blurb">Write the code in thin, tested vertical slices.</p><div class="side-row"><span>Command</span> <code class="mono">/build</code></div>`
   - `sources/addy/skills/test-driven-development/SKILL.md` (16,483 bytes, 399 lines Markdown):
     - `line 3`: `description: Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality.`
     - `line 10`: `Write a failing test before writing the code that makes it pass. For bug fixes, reproduce the bug with a test before attempting a fix. Tests are proof — "seems right" is not done. A codebase with good tests is an AI agent's superpower; a codebase without tests is a liability.`
     - `line 180` in `using-agent-skills/SKILL.md`: `| Verify | test-driven-development | Failing test first, then make it pass |`
     - In-repo commands: `.claude/commands/test.md:5` and `commands/test.toml:4` execute TDD via `/test`. `.claude/commands/build.md:5` and `commands/build.toml:4` execute `incremental-implementation` via `/build`.

---

## 2. Logic Chain

1. **External HTML Nature vs In-Repo Markdown (Obs 2):**
   - The external documents (`sources/addy-external/*.md`) are not authoring markdown files; they are static HTML renderings produced by Astro for `skills.addy.ie`.
   - Consequently, they contain UI scaffolding, Astro scoped classes, SVG icons, and web navigation, inflating the byte size by 1.6x to 2.1x relative to the source markdown.
2. **Template Illusion & Validator Exemption (Obs 1, 2):**
   - In `sources/addy-external/using-agent-skills.md:9-10`, the site asserts that every skill follows the 6-part anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification).
   - In `sources/addy/skills/using-agent-skills/SKILL.md:45-130`, none of those sections exist; instead, it contains `Core Operating Behaviors` and `Failure Modes to Avoid`.
   - `sources/addy/scripts/lib/skill-lint.js:58` confirms that `using-agent-skills` was explicitly exempted from section linting because it is a routing meta-skill.
   - Therefore, the website displays boilerplate anatomy documentation that contradicts the file's real structure.
3. **Internal Self-Contradiction on Commands (Obs 1, 2):**
   - In `sources/addy-external/test-driven-development.md:5`, the header badge displays `/test`.
   - In `sources/addy-external/test-driven-development.md:12`, the sidebar displays `Command: /build`.
   - `commands/test.toml:4` proves `/test` is the dedicated command for TDD, whereas `commands/build.toml:4` maps `/build` to `incremental-implementation`.
   - Therefore, the external web page contains an internal contradiction caused by hardcoded sidebar inheritance from the Build phase layout.
4. **Lifecycle Phase Collisions (Obs 2):**
   - `sources/addy-external/using-agent-skills.md:5, 12` invents an uncoordinated 7th phase called `Meta phase`. The repository lifecycle taxonomy (`CLAUDE.md:21-26`, `README.md:353-377`) defines only 6 phases (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`).
   - `sources/addy-external/test-driven-development.md:5` assigns TDD to `Build phase` (matching `CLAUDE.md:23`), whereas `skills/using-agent-skills/SKILL.md:180` assigns TDD to `Verify`.
   - Therefore, there is a tripartite cross-file contradiction across the repository and external web documentation regarding lifecycle phase allocation.

---

## 3. Caveats

- We did not execute `node scripts/run-evals.js` because in this ESM workspace, Node throws `ReferenceError: require is not defined` (documented as a known defect in `inv-addy-20.md:31, 57-58`). Running with `bun scripts/run-evals.js` executed cleanly and is 100% compliant with METHOD.md Rule R9.
- No live network requests were made to `https://skills.addy.ie/` during this session; the pinned local snapshot in `sources/addy-external/` was analyzed in strict accordance with METHOD.md §1.1.

---

## 4. Conclusion

Work unit `inv-addy-22` is fully scoped and prepped for extraction. The validation suite passes completely (0 errors, 35 tests passing). The external files provide critical evidence of documentation drift between the web portal and the in-repo skill definitions, notably exposing an internal self-contradiction on command `/test` vs `/build`, an invented "Meta phase", and template-driven false assertions of skill anatomy.

---

## 5. Verification Method

To independently verify all findings:
1. Run repository validation scripts:
   ```bash
   cd sources/addy && bun scripts/validate-skills.js
   cd sources/addy && bun scripts/validate-reference-links.js
   cd sources/addy && bun scripts/validate-commands.js
   cd sources/addy && bun scripts/validate-artifact-paths.js
   cd sources/addy && bun test ./scripts/*-test.js
   ```
2. Verify external HTML line citations:
   - Check command badge `/test` vs sidebar `/build`:
     `grep -n -E "detail-cmd-badge|side-row" sources/addy-external/test-driven-development.md`
   - Check `Meta phase` and anatomy assertions:
     `grep -n -E "phase-chip|anatomy" sources/addy-external/using-agent-skills.md`
3. Run project synthesis checks:
   ```bash
   bun scripts/synthesis/coverage.ts
   bun scripts/synthesis/glossary-lint.ts
   ```

---

## 6. Remaining Work (Soft Handoff Next Steps)

1. **Worker Agent Dispatch:**
   - Generate `docs/analysis/inventory/addy/external-using-agent-skills-md.md` adhering to `docs/plan/templates/inventory-entry.md` and incorporating all defects and observations documented above.
   - Generate `docs/analysis/inventory/addy/external-test-driven-development-md.md`.
   - Generate `docs/analysis/inventory/addy/_units/inv-addy-22.md`.
2. **Review & Audit:**
   - Reviewer 1 (Quality Gate), Reviewer 2 (Evidence Verifier), Challengers (Adversarial passes), and Forensic Auditor verify line citations, verbatim quotations, and zero empty fields.
3. **Manifest & State Updates:**
   - Mark rows 195 and 196 as `[x]` in `docs/analysis/manifest/addy.md`.
   - Update `docs/plan/STATE.md` marking `inv-addy-22` complete in session `007`.
