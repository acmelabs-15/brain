# Comprehensive Cross-Cutting Verification Report: inv-addy-15

**Work Unit:** `inv-addy-15` (Phase 1 Inventory Extraction)  
**Investigator:** Explorer 3 Gen 2 (`explorer_inv_addy_15_3_gen2`)  
**Date:** 2026-09-03  
**Status:** Complete  

---

## 1. Executive Summary

This report delivers an exhaustive, evidence-based, cross-cutting technical verification of the four source files assigned to work unit `inv-addy-15` in `sources/addy/`:
1. `sources/addy/skills/frontend-ui-engineering/SKILL.md` (10,711 bytes)
2. `sources/addy/skills/shipping-and-launch/SKILL.md` (10,137 bytes)
3. `sources/addy/skills/spec-driven-development/SKILL.md` (12,163 bytes)
4. `sources/addy/skills/constraint-driven-development/references/floor-guard.md` (5,851 bytes)

**Key Findings:**
- **Critical Execution Bug in `floor-guard.mjs`:** `floor-guard.mjs` contains a silent failure bug where untracked files with violations are completely dropped. `git diff --no-index` returns exit code 1 when diffs are present, causing `execFileSync('git', ...)` to throw. Because the wrapper catches errors and returns `null`, `git(...) ?? ''` evaluates to empty, meaning untracked files are never inspected for floor violations.
- **Acronym / Concept Homonym (`sdd-cache` vs `spec-driven-development`):** In `sources/addy/hooks/`, `sdd-cache-pre.sh`, `sdd-cache-post.sh`, and `SDD-CACHE.md` implement a cache strictly for `source-driven-development` (revalidating external docs via `If-None-Match` / `If-Modified-Since`), not `spec-driven-development`. `spec-driven-development` has no hooks.
- **Toolchain Incompatibility for Addy Scripts:** Running Addy scripts with `node` fails due to parent `brain-v2/package.json` having `"type": "module"` and Addy lacking a local `package.json`. All Addy validation scripts and test suites run cleanly and pass 100% when executed with `bun`.
- **Artifact Path Allowlist Drift:** `sources/addy/scripts/validate-artifact-paths.js` restricts spec files strictly to `SPEC.md` and `docs/SPEC.md`, while `skills/spec-driven-development/SKILL.md:65` prescribes multi-module specifications named `SPEC-<module-id>.md` (e.g. `SPEC-identity.md`).
- **Command vs. Skill Orchestration Drift:** `/ship` (`.claude/commands/ship.md`) prescribes an automated 3-subagent parallel fan-out (`code-reviewer`, `security-auditor`, `test-engineer`) that is completely absent from `skills/shipping-and-launch/SKILL.md`. Similarly, `/spec` (`.claude/commands/spec.md`) only handles Phase 0 and Phase 1, delegating Phases 2–4 to `/plan` and `/build`.

---

## 2. Assigned Scope & Size Verification

| # | File Path | Type | On-Disk Bytes | Status |
|---|-----------|------|---------------|--------|
| 1 | `sources/addy/skills/frontend-ui-engineering/SKILL.md` | skill | 10,711 | Read in full (lines 1–329) |
| 2 | `sources/addy/skills/shipping-and-launch/SKILL.md` | skill | 10,137 | Read in full (lines 1–311) |
| 3 | `sources/addy/skills/spec-driven-development/SKILL.md` | skill | 12,163 | Read in full (lines 1–246) |
| 4 | `sources/addy/skills/constraint-driven-development/references/floor-guard.md` | reference | 5,851 | Read in full (lines 1–100) |
| **Total** | **4 files** | | **38,862** | **Full Coverage Verified** |

Byte count matches `docs/plan/STATE.md` and `docs/analysis/manifest/addy.md` rows 173–176.

---

## 3. Path Existence Check

Every path mentioned across all four files was verified using filesystem checks:

| Source File | Referenced Path in File | Context / Line | Target Resolved Path | Existence Status | Notes |
|-------------|-------------------------|----------------|----------------------|------------------|-------|
| `frontend-ui-engineering` | `../../references/accessibility-checklist.md` | Line 297 | `sources/addy/references/accessibility-checklist.md` | **EXISTS** (5,206 bytes) | Relative link resolves correctly |
| `frontend-ui-engineering` | `src/components/TaskList/...` | Lines 27–33 | N/A | Illustrative | Example component architecture |
| `shipping-and-launch` | `../../references/definition-of-done.md` | Line 268 | `sources/addy/references/definition-of-done.md` | **EXISTS** (3,798 bytes) | Relative link resolves correctly |
| `shipping-and-launch` | `../../references/security-checklist.md` | Line 269 | `sources/addy/references/security-checklist.md` | **EXISTS** (11,881 bytes) | Relative link resolves correctly |
| `shipping-and-launch` | `../../references/performance-checklist.md` | Line 270 | `sources/addy/references/performance-checklist.md` | **EXISTS** (13,139 bytes) | Relative link resolves correctly |
| `shipping-and-launch` | `../../references/accessibility-checklist.md` | Line 271 | `sources/addy/references/accessibility-checklist.md` | **EXISTS** (5,206 bytes) | Relative link resolves correctly |
| `spec-driven-development` | `api-and-interface-design` | Line 61 | `sources/addy/skills/api-and-interface-design/SKILL.md` | **EXISTS** (14,884 bytes) | Referenced as skill |
| `spec-driven-development` | `planning-and-task-breakdown` | Lines 174, 190 | `sources/addy/skills/planning-and-task-breakdown/SKILL.md` | **EXISTS** (10,564 bytes) | Referenced as skill |
| `spec-driven-development` | `skills/incremental-implementation/SKILL.md` | Line 202 | `sources/addy/skills/incremental-implementation/SKILL.md` | **EXISTS** (9,507 bytes) | Resolved relative to repo root; broken if resolved relative to file |
| `spec-driven-development` | `skills/test-driven-development/SKILL.md` | Line 202 | `sources/addy/skills/test-driven-development/SKILL.md` | **EXISTS** (16,483 bytes) | Resolved relative to repo root; broken if resolved relative to file |
| `spec-driven-development` | `skills/context-engineering/SKILL.md` | Line 202 | `sources/addy/skills/context-engineering/SKILL.md` | **EXISTS** (11,070 bytes) | Resolved relative to repo root; broken if resolved relative to file |
| `spec-driven-development` | `tasks/plan.md` | Line 176 | N/A | Target artifact | Output convention |
| `spec-driven-development` | `tasks/todo.md` | Line 176 | N/A | Target artifact | Output convention |
| `spec-driven-development` | `SPEC-<module-id>.md` | Line 65 | N/A | Target artifact | Multi-module output convention |
| `floor-guard.md` | `CONSTRAINTS.md` | Lines 3, 67, 79 | N/A | Target artifact | Generated by client projects adopting skill |
| `floor-guard.md` | `floor-guard.mjs` | Line 20 | N/A | Inline code only | Does not exist as standalone script file in `sources/addy/` |
| `floor-guard.md` | `.constraintsignore` | Line 98 | N/A | Target artifact | User project configuration |

---

## 4. Empirical Execution & Verification

### 4.1 Floor Guard (`floor-guard.mjs`)
The script provided in `sources/addy/skills/constraint-driven-development/references/floor-guard.md:17-93` was tested empirically under Node.js:

1. **Clean Diff against `origin/main`:**
   - Command: `node test-floor-guard.mjs`
   - Stdout: `floor-guard: clean`
   - Exit code: `0`
2. **Invalid Merge Base:**
   - Command: `node test-floor-guard.mjs --base non-existent-ref`
   - Stderr: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`
   - Exit code: `2` (Complies with contract: never let a 2 read as a 0).
3. **Detection of Tracked Violations:**
   - Verified that tracked test changes, lowered thresholds, and suppression comments are detected.
4. **Defect in Untracked File Detection (Empirical Proof):**
   - In `floor-guard.mjs` lines 39–42:
     ```javascript
     const untracked = (git(['ls-files', '--others', '--exclude-standard']) ?? '')
       .split('\n').filter(Boolean)
       .map((f) => git(['diff', '--no-index', '--unified=0', '/dev/null', f]) ?? '')
       .join('\n');
     ```
   - In lines 28–31:
     ```javascript
     const git = (args) => {
       try { return execFileSync('git', args, { encoding: 'utf8' }); }
       catch { return null; }
     };
     ```
   - Test: Created an untracked file containing `// TODO: fix this later`.
   - Result: `git diff --no-index` exits with code 1 when a diff exists. `execFileSync` throws an exception on exit code 1. The `catch` block catches the exception and returns `null`. `git(...) ?? ''` becomes `''`.
   - Actual stdout: `floor-guard: clean` (Exit code: `0`).
   - Conclusion: **Untracked files are silently ignored**, directly violating the contract in `floor-guard.md:9`.

### 4.2 SDD Cache Hooks (`hooks/sdd-cache-pre.sh`, `hooks/sdd-cache-post.sh`)
- Command: Executed documented example from `sources/addy/hooks/SDD-CACHE.md:86-107`.
- `sdd-cache-post.sh` received mock `tool_response` for `https://react.dev/reference/react/useActionState`, extracted ETag/Last-Modified via `curl -sI -L`, and wrote `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json`. Exit code: `0`.
- `sdd-cache-pre.sh` queried origin; exited `0` on miss/revalidation.
- **Disambiguation:** Confirmed that `sdd-cache` belongs solely to `source-driven-development`, not `spec-driven-development`.

### 4.3 Validation Scripts (`sources/addy/scripts/`)
Executed via `bun` from `sources/addy/`:
- `bun scripts/validate-skills.js`: 25 skills checked — 0 errors, 0 warnings — **PASSED** (exit code `0`).
- `bun scripts/validate-reference-links.js`: 25 skills checked — 0 errors — **PASSED** (exit code `0`).
- `bun scripts/validate-artifact-paths.js`: 7 files checked — 0 errors — **PASSED** (exit code `0`).
- `bun scripts/validate-commands.js`: 9 commands checked — 0 errors — **PASSED** (exit code `0`).
- `bun scripts/validate-versions.js`: All manifests use version 0.6.8 — **PASSED** (exit code `0`).

### 4.4 Test Suites (`bun test`)
Ran all test files in `sources/addy/scripts/`:
- `bun test ./scripts/run-evals-test.js`: 15 pass, 0 fail (368ms)
- `bun test ./scripts/validate-reference-links-test.js`: 7 pass, 0 fail (121ms)
- `bun test ./scripts/validate-commands-test.js`: 6 pass, 0 fail (126ms)
- `bun test ./scripts/validate-versions-test.js`: 1 pass, 0 fail (38ms)
- `bun test ./scripts/validate-artifact-paths-test.js`: 6 pass, 0 fail (103ms)
- **Total:** 35 pass, 0 fail across 5 test suites.

### 4.5 Evaluation Suite Runner (`run-evals.js`)
- Command: `bun scripts/run-evals.js`
- Result: 136 checks passed across 25 skills and 25 case files. 0 errors, 0 warnings. Trigger rank-1 rate: 86% (72/84 positive prompts ranked #1). Exit code `0`.

---

## 5. Evaluation Suites & Fixtures Analysis

### 5.1 Case Files (`evals/cases/`)
| Skill | Case File | Positive Prompts | Negative Prompts | Eval Kinds | Focus & Key Expectations |
|---|---|---|---|---|---|
| `frontend-ui-engineering` | `evals/cases/frontend-ui-engineering.json` | 5 | 2 (`performance-optimization`, release tagging) | 1 execution | Keyboard navigation, focus management, semantic HTML/ARIA, deliberate state management. |
| `shipping-and-launch` | `evals/cases/shipping-and-launch.json` | 3 | 2 (`idea-refine`, perf query) | 2 execution | Eval 1: pre-launch checklist, rollback plan, monitoring readiness, clear verdict.<br>Eval 2: authority pressure pushback (executive sponsor asks for GO despite failed e2e test; must return NO-GO/hold). |
| `spec-driven-development` | `evals/cases/spec-driven-development.json` | 5 | 3 (`observability`, `code-simplification`, `planning-and-task-breakdown`) | 2 execution | Eval 1: `SPEC.md` covering 6 areas, explicit boundaries, testing strategy, no implementation code.<br>Eval 2: capability map with stable module ids and acyclic dependency direction before per-module specs. |
| `constraint-driven-development` | `evals/cases/constraint-driven-development.json` | 5 | 3 (`code-review`, `ci-cd`, `test-driven-development`) | 3 dialogue | Eval 1: detect repo first, max 4 questions, defaults offered, explain numbers.<br>Eval 2: ratchet pushback against unmeetable threshold (62% to 85%).<br>Eval 3: concrete tool commands (axe-core) placed at preview-deploy. |

### 5.2 Fixtures (`evals/fixtures/`)
| Skill / Subdirectory | Fixture Files | Content & Purpose |
|---|---|---|
| `evals/fixtures/frontend-ui-engineering/` | `Button.tsx`<br>`design-system.md` | React/TypeScript button component and design system conventions (keyboard-only, screen reader, `menu-*` classes, focus restoration). |
| `evals/fixtures/shipping-and-launch/` | `authority-pressure.md`<br>`launch-status.md` | Realistic scenario where executive asks for GO despite failing payment e2e timeout, missing alerts, and undocumented rollback. Tests that agent holds the gate. |
| `evals/fixtures/spec-driven-development/` | `billing-brief.md` | Vague usage-based billing request with constraints and unknowns. Tests that agent reframes requirements, asks questions, and avoids assumptions. |
| `evals/fixtures/spec-driven-development-decomposition/` | `portal-brief.md` | Multi-capability customer portal brief (accounts, billing, notifications, reporting). Tests Phase 0 capability map decomposition. |

---

## 6. Vocabulary & GLOSSARY Compliance

Per METHOD.md R4, until Phase 4 alignment decisions are made, all source concepts are prefixed with `addy:`.

### 6.1 Cataloged Concepts by File
- **`frontend-ui-engineering`:**
  - `addy:component-architecture`: colocated structure (`TaskList.tsx`, `TaskList.test.tsx`, `TaskList.stories.tsx`, `use-task-list.ts`, `types.ts`).
  - `addy:composition-over-configuration`: composable JSX over monolithic prop-heavy components.
  - `addy:presentation-container-separation`: separating data fetching/hooks from rendering.
  - `addy:state-management-hierarchy`: local (`useState`) → lifted → context → URL (`searchParams`) → server (`React Query`, `SWR`) → global (`Zustand`, `Redux`). Prop drilling capped at 3 levels.
  - `addy:ai-aesthetic-avoidance`: table of 8 anti-patterns (purple/indigo palette, excessive gradients, `rounded-2xl`, generic hero, lorem ipsum, oversized padding, stock card grids, shadow-heavy design).
  - `addy:spacing-scale`: consistent 0.25rem increments.
  - `addy:type-hierarchy`: semantic heading levels `h1` through `h3`, `body`, `small`.
  - `addy:wcag-2.1-aa`: accessibility standard (keyboard nav, ARIA labels, focus trapping, color contrast 4.5:1 / 3:1).
  - `addy:skeleton-loading`: content-shaped skeleton placeholders instead of spinners.
  - `addy:optimistic-updates`: immediate UI mutation with rollback on error.
- **`shipping-and-launch`:**
  - `addy:pre-launch-checklist`: 6 categories (Code Quality, Security, Performance, Accessibility, Infrastructure, Documentation).
  - `addy:feature-flag-strategy` & `addy:feature-flag-lifecycle`: Deploy OFF → Enable Team/Beta → Gradual Rollout → Monitor → Clean Up (within 2 weeks).
  - `addy:staged-rollout`: 6-stage sequence (staging → prod flag OFF → team 24h → canary 5% 24–48h → gradual 25/50/100% → full).
  - `addy:rollout-decision-thresholds`: green / yellow / red matrix across error rate, p95 latency, client JS errors, business metrics.
  - `addy:rollback-strategy` / `addy:rollback-plan`: documented trigger conditions, procedure, DB considerations, RTO.
  - `addy:post-launch-verification`: 6-step checklist for the first hour post-deploy.
- **`spec-driven-development`:**
  - `addy:spec-driven-development`: structured specification before coding.
  - `addy:gated-workflow`: Specify → Plan → Tasks → Implement, each gated by human review.
  - `addy:scope-check` (Phase 0): pre-specification decomposition when bundling multiple capabilities.
  - `addy:capability-map`: module id, responsibility, depends on, build order.
  - `addy:stable-module-id`: immutable kebab-case identifier.
  - `addy:dependency-direction`: acyclic, one-way dependency.
  - `addy:surface-assumptions`: upfront explicit assumption listing.
  - `addy:spec-core-areas`: 6 core areas (Objective, Commands, Project Structure, Code Style, Testing Strategy, Boundaries).
  - `addy:three-tier-boundaries`: Always do, Ask first, Never do.
  - `addy:reframing-success-criteria`: translating vague requirements into measurable targets (e.g. LCP < 2.5s).
  - `addy:living-spec`: spec kept updated as decisions change.
- **`floor-guard.md`:**
  - `addy:floor-guard`: diff-scoped enforcement of the quality floor.
  - `addy:five-floor-moves`: silenced checker, test made easier, threshold lowered, unfinished work, new exception.
  - `addy:tightening-silent-loosening-loud`: only reporting moves that lower the bar.
  - `addy:redaction-of-secrets`: reporting rule and location, never secret value.
  - `addy:constraintsignore`: path-based exemption mechanism.

### 6.2 Naming Divergence / Drift
- **PRD vs. Spec:** `README.md:236` and `evals/cases/spec-driven-development.json:10` use `PRD`, whereas `skills/spec-driven-development/SKILL.md` uses `spec` and `specification`.
- **SDD Homonym:** "SDD" is used in hook file names and documentation for `source-driven-development`, while commonly referring to `spec-driven-development`.

---

## 7. Comprehensive §4 Checklist Analysis

### 7.1 Existence
- All internal references from `frontend-ui-engineering` and `shipping-and-launch` to `references/` (`accessibility-checklist.md`, `definition-of-done.md`, `security-checklist.md`, `performance-checklist.md`) exist on disk.
- All cross-skill references in `spec-driven-development` (`api-and-interface-design`, `planning-and-task-breakdown`, `incremental-implementation`, `test-driven-development`, `context-engineering`) exist on disk.
- `floor-guard.mjs` exists only as inline markdown in `floor-guard.md`, not as an executable script in `scripts/` or `hooks/`.
- External documentation for `constraint-driven-development` was unavailable when fetching (`docs/analysis/manifest/addy.md:205`).

### 7.2 Execution
- Documented examples in `floor-guard.md` were executed. Verified exit codes 0 and 2. Discovered critical defect where untracked files with violations are dropped due to `git diff --no-index` exit code 1 handling in `execFileSync`.
- `hooks/sdd-cache-post.sh` and `hooks/sdd-cache-pre.sh` executed cleanly with documented examples.
- `run-evals.js` executed cleanly under `bun`, validating trigger ranking (86% rank-1 rate) across all 25 skills.
- All 5 test suites in `scripts/` passed under `bun test` (35 tests total).

### 7.3 Documentation Drift
- **Commands vs. Skills:**
  - `/ship` defines a 3-agent parallel fan-out architecture (`code-reviewer`, `security-auditor`, `test-engineer`) that does not appear in `shipping-and-launch/SKILL.md`.
  - `/spec` only implements Phase 0 and Phase 1 of `spec-driven-development/SKILL.md`, while the skill encompasses the entire lifecycle up to implementation.
- **Artifact Path Allowlist:**
  - `scripts/validate-artifact-paths.js` permits only `SPEC.md` and `docs/SPEC.md`, while `skills/spec-driven-development/SKILL.md:65` specifies multi-module specs as `SPEC-<module-id>.md`.
- **External Docs:**
  - `sources/addy-external/frontend-ui-engineering.md`, `shipping-and-launch.md`, and `spec-driven-development.md` align closely with repo SKILL.md files. `constraint-driven-development.md` is missing from `sources/addy-external/`.

### 7.4 Internal Consistency
- `frontend-ui-engineering/SKILL.md`: Consistent throughout; component patterns, state hierarchy, and WCAG checklists align.
- `shipping-and-launch/SKILL.md`: Staged rollout steps (5% canary, 25%, 50%, 100%) align with decision threshold matrix.
- `spec-driven-development/SKILL.md`: Phase 0 capability map example matches the portal-brief eval fixture.
- `floor-guard.md`: Internal contradiction between line 9 (claiming to inspect untracked files) and lines 28–31/39–42 (implementation dropping untracked files due to exception handling).

### 7.5 Cross-File Consistency
- Relative link syntax: `frontend-ui-engineering` and `shipping-and-launch` use `../../references/...`, whereas `spec-driven-development:202` uses repo-relative `skills/...`.
- Checklists: `shipping-and-launch` references four checklists in `references/`, directly reusing criteria from `accessibility-checklist.md` and `performance-checklist.md`.

### 7.6 Composition
```
[Define]
  spec-driven-development
    ├── Phase 0: Capability Map (boundary design -> api-and-interface-design)
    └── Phase 1: SPEC.md / SPEC-<id>.md
  constraint-driven-development
    └── floor-guard.md (continuous quality bar enforcement)
       │
       ▼
[Plan]
  planning-and-task-breakdown (tasks/plan.md, tasks/todo.md)
       │
       ▼
[Build]
  incremental-implementation & test-driven-development (guided by context-engineering)
  frontend-ui-engineering (UI components, WCAG AA, design tokens)
       │
       ▼
[Verify & Review]
  browser-testing-with-devtools, code-review-and-quality, security-and-hardening
       │
       ▼
[Ship]
  shipping-and-launch (pre-launch checklist, feature flags, staged rollout, rollback plan)
  (Orchestrated via /ship: code-reviewer + security-auditor + test-engineer -> GO / NO-GO)
```

### 7.7 Context Cost
| File | Direct Bytes | Dependencies / References Loaded | Total Loaded Context |
|---|---|---|---|
| `frontend-ui-engineering/SKILL.md` | 10,711 | `accessibility-checklist.md` (5,206) | 15,917 bytes |
| `shipping-and-launch/SKILL.md` | 10,137 | `definition-of-done.md` (3,798), `security-checklist.md` (11,881), `performance-checklist.md` (13,139), `accessibility-checklist.md` (5,206) | 44,161 bytes |
| `spec-driven-development/SKILL.md` | 12,163 | Links to 5 skills (conceptually ~62,508 bytes if inlined) | 12,163 bytes direct |
| `floor-guard.md` | 5,851 | Reference loaded by `constraint-driven-development/SKILL.md` (20,880) | 26,731 bytes |

### 7.8 Design Intent
- `frontend-ui-engineering`: Prevent "AI aesthetic" and fragile UI; enforce professional engineering practices (design tokens, component composition, WCAG 2.1 AA accessibility, state hierarchy, resilient empty/error states).
- `shipping-and-launch`: Eliminate unverified, risky deployments by enforcing reversible (feature flagged, documented rollback), observable (monitoring, thresholds), and incremental (canary, staged) releases with clear go/no-go gates.
- `spec-driven-development`: Eliminate guessing and rework by forcing requirements, boundaries, and test strategies to be concrete, surfaced, and human-approved before coding; provide modular capability mapping for complex features.
- `floor-guard.md`: Prevent AI agents from taking the "cheap road to green" (skipping tests, deleting assertions, silencing checkers with `@ts-ignore`, leaving unfinished stubs) via deterministic, diff-scoped AST/regex enforcement.

---

## 8. Defect & Anomaly Log

| ID | Location | Type | Severity | Description |
|---|---|---|---|---|
| **DEF-01** | `sources/addy/skills/constraint-driven-development/references/floor-guard.md:28-31,39-42` | Implementation Bug | **CRITICAL** | `git diff --no-index` exit code 1 causes `execFileSync` to throw in `git()`, which returns `null`. Consequently, all untracked files are silently ignored by `floor-guard.mjs`. |
| **DEF-02** | `sources/addy/hooks/sdd-cache-*`, `sources/addy/hooks/SDD-CACHE.md` | Acronym / Naming Collision | Medium | The prefix `sdd` is used for `source-driven-development` caching, creating an acronym conflict with `spec-driven-development`. |
| **DEF-03** | `sources/addy/scripts/*.js` | Runtime / Environment | Medium | Scripts use CommonJS `require` but lack a local `package.json`. In a repository with `"type": "module"` (like `brain-v2`), `node` execution fails with `ReferenceError: require is not defined`. Must be executed with `bun`. |
| **DEF-04** | `sources/addy/skills/spec-driven-development/SKILL.md:202` | Path Reference Inconsistency | Low | Uses repo-relative `skills/...` paths rather than relative `../../` paths used by other skills. |
| **DEF-05** | `sources/addy/scripts/validate-artifact-paths.js:35-40` vs `spec-driven-development/SKILL.md:65` | Specification Schema Drift | Medium | `validate-artifact-paths.js` allowlist only allows `SPEC.md` and `docs/SPEC.md`, omitting the multi-module pattern `SPEC-<module-id>.md`. |
| **DEF-06** | `.claude/commands/ship.md` vs `skills/shipping-and-launch/SKILL.md` | Architecture / Orchestration Drift | Medium | Command `/ship` mandates a 3-agent parallel fan-out (`code-reviewer`, `security-auditor`, `test-engineer`), while `shipping-and-launch/SKILL.md` is written as a manual/checklist procedure without mentioning persona fan-out. |
| **DEF-07** | `.claude/commands/spec.md` vs `skills/spec-driven-development/SKILL.md` | Scope Drift | Low | `/spec` command only executes Phases 0 & 1, while `spec-driven-development/SKILL.md` defines the entire 5-phase lifecycle. |
| **DEF-08** | `sources/addy/README.md:236`, `evals/cases/spec-driven-development.json:10` | Vocabulary Inconsistency | Low | Uses `PRD` instead of `spec` / `specification`. |

---
*Report completed and verified against METHOD.md rules R1–R6 and §4 checklist.*
