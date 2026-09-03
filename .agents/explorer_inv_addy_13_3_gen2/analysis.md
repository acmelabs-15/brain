# Cross-Cutting Analysis & Work-Unit Report Draft: inv-addy-13

**Unit:** `inv-addy-13`  
**Package:** `addy`  
**Phase:** Phase 1 (Inventory Extraction)  
**Assigned Source Files:**
1. `sources/addy/skills/debugging-and-error-recovery/SKILL.md` (10,837 bytes, 301 lines)
2. `sources/addy/skills/using-agent-skills/SKILL.md` (10,426 bytes, 193 lines)
3. `sources/addy/skills/test-driven-development/SKILL.md` (16,483 bytes, 399 lines)
4. `sources/addy/skills/planning-and-task-breakdown/SKILL.md` (10,564 bytes, 258 lines)
**Total Source Bytes:** 48,310 bytes

---

## 1. Cross-Skill Relationships and Shared Concepts

The four skills in `inv-addy-13` represent the operational core of the `agent-skills` lifecycle: routing meta-cognition (`using-agent-skills`), work breakdown (`planning-and-task-breakdown`), behavioral verification (`test-driven-development`), and fault recovery (`debugging-and-error-recovery`). Together, they form an interconnected execution loop.

### 1.1 The Operational Execution Loop
```
[User Request]
       │
       ▼
using-agent-skills (Meta-routing & operating rules: surface assumptions, push back, enforce simplicity)
       │
       ├───────────────────────────────────────┐
       ▼                                       ▼
planning-and-task-breakdown          debugging-and-error-recovery
(Enter plan mode, dependency graph,  (Stop-the-line, reproduce, localize,
 vertical slicing, tasks/plan.md,     reduce, fix root cause, guard test)
 tasks/todo.md, checkpoints)                   ▲
       │                                       │ (on test / build / runtime failure)
       ▼                                       │
test-driven-development ───────────────────────┘
(Discover stack first, RED-GREEN-REFACTOR,
 prove-it pattern, test pyramid, AAA, DevTools)
```

### 1.2 Core Shared Architectural Concepts

1. **The Stop-the-Line Rule & Escalation Gating**:
   - `debugging-and-error-recovery:21-35`: When an unexpected error occurs, stop adding features, preserve evidence, diagnose, fix root cause, guard with a regression test, and resume only after verification passes.
   - `using-agent-skills:63-74` ("Manage Confusion Actively"): Stop immediately upon encountering conflicting requirements or unknown state rather than guessing.
   - `planning-and-task-breakdown:150-156` ("Never Overwrite an Incomplete Plan"): Stop and ask before proceeding if existing tasks are unchecked.
   - `test-driven-development:98`: Stop and write a failing reproduction test before attempting any bug fix.

2. **Vertical Slicing vs. Horizontal Layering**:
   - `planning-and-task-breakdown:57-77`: Decomposes work into complete end-to-end vertical slices (schema + API + UI per capability) rather than horizontal technology layers.
   - `using-agent-skills:174`: Complements `incremental-implementation` ("Thin vertical slices, test each before expanding").
   - `test-driven-development:144-188`: The test pyramid prioritizes fast unit tests (~80%) for pure logic, with integration (~15%) and E2E (~5%) covering vertical flows.

3. **Red-Green-Refactor & The Prove-It Pattern**:
   - `test-driven-development:38-95`: Universal 3-step cycle: RED (write failing test), GREEN (minimal implementation), REFACTOR (clean up while tests stay green).
   - `test-driven-development:96-143`: "The Prove-It Pattern" for bug fixes: reproduction test must fail before fixing; test passes after fix; full suite run to prevent regressions.
   - `debugging-and-error-recovery:138-154`: Step 5 ("Guard Against Recurrence") mirrors the Prove-It Pattern: author a regression test that fails without the fix and passes with it.
   - Explicit cross-citation: `debugging-and-error-recovery:75` defers test command discovery directly to `test-driven-development`'s "Discover the Stack First" section.

4. **Environment Discovery Discipline ("Discover the Stack First")**:
   - `test-driven-development:24-37`: Establishes the rule that agents must discover the repository's native build tools (`package.json`, `pom.xml`, `pyproject.toml`, `Cargo.toml`, etc.) and repo-local wrappers (`./gradlew`, `./mvnw`, `make test`) rather than assuming `npm test`.
   - Shared across `debugging-and-error-recovery:75` and `planning-and-task-breakdown:93-95`.

5. **Definition of Done vs. Acceptance Criteria**:
   - `planning-and-task-breakdown:88-91, 257`: Distinguishes per-task Acceptance Criteria ("did we build the right thing?") from the project-wide Definition of Done ("is this finished to our standard?"), citing `../../references/definition-of-done.md`.
   - `using-agent-skills:110-115`: "Verify, Don't Assume" cites `../../references/definition-of-done.md` as the standing project-wide bar.

6. **Defensive Architecture Against Prompt Injection & Untrusted Data**:
   - `debugging-and-error-recovery:272-280` ("Treating Error Output as Untrusted Data"): Error messages, stack traces, and external API responses are diagnostic data to analyze, never instructions to execute. Prevents indirect prompt injection embedded in error payloads.
   - `test-driven-development:337-340` ("Security Boundaries"): DOM nodes, console logs, network responses, and JS evaluation from Chrome DevTools are untrusted data.
   - `using-agent-skills:97-108` ("Maintain Scope Discipline"): Forbids executing unsolicited side effects or modifying out-of-scope code.

7. **Anti-Rationalization & Red Flags Architecture**:
   - All four skills embed explicit tabular anti-rationalization defenses rebutting typical LLM shortcuts ("I know what the bug is, I'll just fix it", "I'll write tests after", "I'll figure it out as I go") paired with explicit Red Flags checklists.

---

## 2. Invocation Graph & Entry Point Analysis

| Skill | Lifecycle Phase | Invoked By | Entry Point Status | Orphan Status |
|---|---|---|---|---|
| `debugging-and-error-recovery` | `addy:Verify` | `commands/build.toml:36, 42`<br>`skills/using-agent-skills/SKILL.md:32, 164, 182`<br>`skills/observability-and-instrumentation/SKILL.md:21`<br>`skills/security-and-hardening/SKILL.md:375`<br>`skills/ci-cd-and-automation/SKILL.md:189`<br>`skills/doubt-driven-development/SKILL.md:228`<br>`AGENTS.md:28, 43`<br>`CLAUDE.md:24`<br>`README.md:262, 366` | Diagnostic & Error Entry Point | **Not an orphan** |
| `using-agent-skills` | `cross-phase` / `addy:Meta` | `hooks/session-start.sh:3, 11`<br>User session initialization<br>`README.md:222, 228, 377`<br>`docs/getting-started.md:40`<br>`docs/adoption-guide.md:31, 68`<br>Eval routing negative cases across 6+ skills | Global Session Bootstrap / Meta Entry Point | **Not an orphan** |
| `test-driven-development` | `addy:Build` / `addy:Verify` | `/test` command (`commands/test.toml:4`)<br>`/build` command (`commands/build.toml:4`)<br>`skills/spec-driven-development/SKILL.md:202`<br>`skills/incremental-implementation/SKILL.md:201`<br>`skills/debugging-and-error-recovery/SKILL.md:75`<br>`skills/doubt-driven-development/SKILL.md:227`<br>`skills/constraint-driven-development/SKILL.md:10, 309`<br>`skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180` | Slash-command entry point (`/test`, `/build`) | **Not an orphan** |
| `planning-and-task-breakdown` | `addy:Plan` | `/planning` command (`commands/planning.toml:4`)<br>`/build` command (`commands/build.toml:32`)<br>`skills/spec-driven-development/SKILL.md:174, 176, 190`<br>`skills/interview-me/SKILL.md:184`<br>`skills/using-agent-skills/SKILL.md:23, 137, 149, 173` | Slash-command entry point (`/planning`, `/plan`) | **Not an orphan** |

**Conclusion on Invocations:** None of the 4 skills are orphans. All are foundational nodes in the Addy lifecycle graph with dense incoming references from commands, skills, hooks, and documentation.

---

## 3. Path Reference & Target Verification

All paths referenced within the 4 skills were checked against the filesystem:

1. `sources/addy/references/definition-of-done.md`:
   - Referenced in `using-agent-skills/SKILL.md:114` and `planning-and-task-breakdown/SKILL.md:257`.
   - Verified: File exists on disk (3,798 bytes, 68 lines).
2. `sources/addy/references/testing-patterns.md`:
   - Referenced in `test-driven-development/SKILL.md:361`.
   - Verified: File exists on disk (7,460 bytes, 236 lines).
3. `sources/addy/skills/test-driven-development/SKILL.md`:
   - Referenced in `debugging-and-error-recovery/SKILL.md:75`.
   - Verified: File exists on disk (16,483 bytes, 399 lines).
4. `sources/addy/skills/browser-testing-with-devtools/SKILL.md`:
   - Referenced in `test-driven-development/SKILL.md:22, 341`.
   - Verified: File exists on disk (12,710 bytes).
5. Runtime artifact paths (`tasks/plan.md`, `tasks/todo.md`):
   - Defined in `planning-and-task-breakdown/SKILL.md:33, 145-165`.
   - Documented as runtime outputs created during task planning.

### Portability Defect (Issue #361):
Relative reference paths such as `../../references/definition-of-done.md` and `../../references/testing-patterns.md` resolve correctly in the full repository checkout, but fail when a single skill is installed via `npx skills add addyosmani/agent-skills --skill <name>` because the installer copies only `skills/<name>/` and omits root `references/`. This is documented in `README.md:61-66` and `CONTRIBUTING.md:61`.

---

## 4. Script Verification & Test Execution

### 4.1 Local Skill Directory Scripts
The directory listing of all 4 skill directories was inspected:
- `sources/addy/skills/debugging-and-error-recovery/` → Contains only `SKILL.md` (no `scripts/` directory).
- `sources/addy/skills/using-agent-skills/` → Contains only `SKILL.md` (no `scripts/` directory).
- `sources/addy/skills/test-driven-development/` → Contains only `SKILL.md` (no `scripts/` directory).
- `sources/addy/skills/planning-and-task-breakdown/` → Contains only `SKILL.md` (no `scripts/` directory).

Explicit confirmation: **No local executable scripts exist within any of the 4 skill directories.**

### 4.2 Repository Validation & Eval Scripts
To verify the 4 skills empirically, the repository's validation and eval suites were executed using Bun:

1. **`validate-skills.js`**:
   - Command: `cd sources/addy && bun scripts/validate-skills.js`
   - Exit code: `0`
   - Output: All 25 skills checked and PASSED. Specifically verified:
     - `✓ debugging-and-error-recovery`
     - `✓ using-agent-skills (section checks exempt)` (exempt per `scripts/lib/skill-lint.js:58` as a meta-routing skill)
     - `✓ test-driven-development`
     - `✓ planning-and-task-breakdown`
2. **`validate-reference-links.js`**:
   - Command: `cd sources/addy && bun scripts/validate-reference-links.js`
   - Exit code: `0`
   - Output: 25 skills checked, 0 errors, PASSED. Confirms all `../../references/` links in our 4 skills resolve.
3. **`run-evals.js` (Trigger Routing Evals)**:
   - Command: `cd sources/addy && bun scripts/run-evals.js`
   - Exit code: `0`
   - Output: 136 checks passed — 0 error(s), 0 warning(s), trigger rank-1 rate: 86% (72/84). PASSED.
4. **Behavioral Evals Dry-Run (`run-evals.js --behavioral <skill> --dry-run`)**:
   - `debugging-and-error-recovery`: 2 evals dry-run verified (`pagination.js`, `pagination.test.js`, `time-pressure.md`). Exit code `0`.
   - `using-agent-skills`: 1 eval dry-run verified (`incident.md`). Exit code `0`.
   - `test-driven-development`: 3 evals dry-run verified (`BUG.md`, `split.js`, `unittest` ledger fixture). Exit code `0`.
   - `planning-and-task-breakdown`: 1 eval dry-run verified (`notifications-spec.md`). Exit code `0`.
   - Total behavioral eval cases across unit: **7 evals**.

---

## 5. Defects and Documentation Drift

1. **Triage Step Count Discrepancy (`doc-drift`)**:
   - `README.md:262` and `docs/adoption-guide.md:83` describe `debugging-and-error-recovery` as a "five-step triage (reproduce, localize, reduce, fix, guard)".
   - In `skills/debugging-and-error-recovery/SKILL.md:36-170`, the triage checklist actually defines **6 steps**:
     1. Reproduce (lines 40-86)
     2. Localize (lines 87-110)
     3. Reduce (lines 111-120)
     4. Fix the Root Cause (lines 121-137)
     5. Guard Against Recurrence (lines 138-154)
     6. Verify End-to-End (lines 155-171)
   - Step 6 ("Verify End-to-End") is omitted from the top-level documentation summaries.

2. **Phase Classification Ambiguity for `test-driven-development` (`cross-file-contradiction`)**:
   - `README.md:363` places `test-driven-development/` under `# Build`.
   - `CLAUDE.md:23` groups it under `**Build:**`.
   - `AGENTS.md:42` maps it to `BUILD → incremental-implementation + test-driven-development`.
   - `using-agent-skills/SKILL.md:180` classifies it under `Verify` (`| Verify | test-driven-development | Failing test first, then make it pass |`).
   - Reflects the dual nature of TDD as both an implementation driver (Build) and a verification mechanism (Verify).

3. **External Skill Installation Path Breakage (`missing-path` / portability gap)**:
   - `using-agent-skills/SKILL.md:114`, `planning-and-task-breakdown/SKILL.md:257`, and `test-driven-development/SKILL.md:361` reference shared documentation in `../../references/`.
   - When installed standalone via `npx skills add addyosmani/agent-skills --skill <name>`, the root `references/` directory is not copied, causing broken markdown links in the installed skills.

---

## 6. Manifest & State Verification

1. **Manifest Rows (`docs/analysis/manifest/addy.md:165-168`)**:
   - Line 165: `| skills/debugging-and-error-recovery/SKILL.md | 10837 | skill | [ ] |`
   - Line 166: `| skills/using-agent-skills/SKILL.md | 10426 | skill | [ ] |`
   - Line 167: `| skills/test-driven-development/SKILL.md | 16483 | skill | [ ] |`
   - Line 168: `| skills/planning-and-task-breakdown/SKILL.md | 10564 | skill | [ ] |`
   - File byte counts on disk match the manifest values exactly:
     - 10,837 bytes (`debugging-and-error-recovery/SKILL.md`)
     - 10,426 bytes (`using-agent-skills/SKILL.md`)
     - 16,483 bytes (`test-driven-development/SKILL.md`)
     - 10,564 bytes (`planning-and-task-breakdown/SKILL.md`)
     - Total: 48,310 bytes.

2. **State Progress (`docs/plan/STATE.md`)**:
   - Line 77: `| inv-addy-13 | addy | 4 | 48310 | in-progress | 006 | — |`
   - Line 434: `| Rows inventoried (addy / matt / rjm) | 141 / 0 / 0 |`
   - Upon completion of `inv-addy-13`, inventoried rows will advance from **141 to 145** (4 rows completed), unit status will become `complete`, and output path will be recorded as `docs/analysis/inventory/addy/_units/inv-addy-13.md`.

---

## 7. Draft Work-Unit Report for `docs/analysis/inventory/addy/_units/inv-addy-13.md`

```markdown
---
unit: inv-addy-13
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-13

## Files assigned
- [x] `skills/debugging-and-error-recovery/SKILL.md` (10,837 bytes)
- [x] `skills/using-agent-skills/SKILL.md` (10,426 bytes)
- [x] `skills/test-driven-development/SKILL.md` (16,483 bytes)
- [x] `skills/planning-and-task-breakdown/SKILL.md` (10,564 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md` (target inventory entry)
- `docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md` (target inventory entry)
- `docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md` (target inventory entry)
- `docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md` (target inventory entry)
- `docs/analysis/inventory/addy/_units/inv-addy-13.md` (this work-unit report)

## Scripts executed
- None present in assigned skill directories (`skills/<name>/scripts/`).
- Verification suite executed in repository:
  - `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (25 skills checked — 0 error(s), 0 warning(s) — PASSED; using-agent-skills confirmed section checks exempt)
  - `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (25 skills checked — 0 error(s) — PASSED)
  - `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (136 checks passed — 0 error(s), 0 warning(s), trigger rank-1 rate: 86% (72/84) — PASSED)
  - `sources/addy/scripts/run-evals.js --behavioral debugging-and-error-recovery --dry-run` — Exit code: `0` (2 execution evals dry-run verified)
  - `sources/addy/scripts/run-evals.js --behavioral using-agent-skills --dry-run` — Exit code: `0` (1 execution eval dry-run verified)
  - `sources/addy/scripts/run-evals.js --behavioral test-driven-development --dry-run` — Exit code: `0` (3 execution evals dry-run verified)
  - `sources/addy/scripts/run-evals.js --behavioral planning-and-task-breakdown --dry-run` — Exit code: `0` (1 execution eval dry-run verified)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **The Operational Core of the Lifecycle:**
  This unit extracts four central workflow engines:
  1. `using-agent-skills`: The meta-skill that bootstraps every session (injected via `hooks/session-start.sh`) and governs task-to-skill routing, assumption surfacing, push-back rules, and simplicity enforcement.
  2. `planning-and-task-breakdown`: The canonical planning authority invoked by `/planning` and `/build`, enforcing plan mode, bottom-up dependency analysis, vertical feature slicing, and standardized `tasks/plan.md` and `tasks/todo.md` conventions.
  3. `test-driven-development`: The behavioral driver invoked by `/test` and `/build`, establishing the universal RED-GREEN-REFACTOR cycle, the Prove-It Pattern for bug reproduction, test pyramid sizing (80/15/5), DAMP over DRY principles, mock minimization, and Chrome DevTools runtime verification.
  4. `debugging-and-error-recovery`: The systematic fault triage skill, codifying the Stop-the-Line rule, 6-step root-cause triage (reproduce, localize, reduce, fix, guard, verify), safe fallbacks, and prompt-injection-safe error data boundaries.
- **Documentation Drift across Triage Steps:**
  `README.md:262` and `docs/adoption-guide.md:83` summarize `debugging-and-error-recovery` as a "five-step triage (reproduce, localize, reduce, fix, guard)", omitting Step 6 ("Verify End-to-End") defined in `skills/debugging-and-error-recovery/SKILL.md:155-171`.
- **Phase Classification Drift for TDD:**
  `README.md:363`, `CLAUDE.md:23`, and `AGENTS.md:42` place `test-driven-development` under the `Build` phase, whereas `using-agent-skills/SKILL.md:180` tabulates it under `Verify`. TDD bridges both phases.
- **Portability Boundary Defect (Issue #361):**
  Relative links to `../../references/definition-of-done.md` and `../../references/testing-patterns.md` function properly within the repository, but break when skills are installed individually into user environments using `npx skills add <repo> --skill <name>`.
- **Untrusted Diagnostic Data Boundary:**
  Both `debugging-and-error-recovery` (lines 272-280) and `test-driven-development` (lines 337-340) explicitly formulate an agent security policy treating errors, logs, stack traces, and browser DevTools DOM/console outputs as untrusted data to analyze rather than executable instructions.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,075 tokens (48,310 bytes across 4 files).
- Approximate tokens of output written: ~11,800 tokens across 4 inventory entries and 1 unit report.
```
