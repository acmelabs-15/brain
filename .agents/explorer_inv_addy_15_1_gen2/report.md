# Technical Exploration and Verification Report: inv-addy-15 (Explorer 1 Gen 2)

**Work Unit**: `inv-addy-15`  
**Explorer**: Explorer 1 Gen 2  
**Assigned Files**:
1. `sources/addy/skills/frontend-ui-engineering/SKILL.md` (10,711 bytes, 329 lines)
2. `sources/addy/skills/shipping-and-launch/SKILL.md` (10,137 bytes, 311 lines)

---

## 1. Executive Summary

This report delivers the comprehensive technical exploration, verification, and drafted inventory entries for `frontend-ui-engineering` and `shipping-and-launch` in the `addy` package.
Both files were read completely from line 1 to EOF with zero sampling (METHOD.md R1).
All referenced files were verified for existence on disk.
All validation scripts in the source repository were executed using `bun` and passed completely.
Evaluations and fixtures were analyzed for behavioral alignment and documentation drift.
All named concepts were exhaustively identified with verbatim quotations, line numbers, and definition/usage status (R6).

---

## 2. Checklist & Verification (§4)

### 2.1 Existence
Every referenced path in both target files was checked for presence:
1. `sources/addy/skills/frontend-ui-engineering/SKILL.md:297` references `../../references/accessibility-checklist.md`:
   - Resolved path: `sources/addy/references/accessibility-checklist.md`
   - Status: **EXISTS** (5,206 bytes, 161 lines).
2. `sources/addy/skills/shipping-and-launch/SKILL.md:268` references `../../references/definition-of-done.md`:
   - Resolved path: `sources/addy/references/definition-of-done.md`
   - Status: **EXISTS** (3,798 bytes, 68 lines).
3. `sources/addy/skills/shipping-and-launch/SKILL.md:269` references `../../references/security-checklist.md`:
   - Resolved path: `sources/addy/references/security-checklist.md`
   - Status: **EXISTS** (11,881 bytes, 206 lines).
4. `sources/addy/skills/shipping-and-launch/SKILL.md:270` references `../../references/performance-checklist.md`:
   - Resolved path: `sources/addy/references/performance-checklist.md`
   - Status: **EXISTS** (13,139 bytes, 237 lines).
5. `sources/addy/skills/shipping-and-launch/SKILL.md:271` references `../../references/accessibility-checklist.md`:
   - Resolved path: `sources/addy/references/accessibility-checklist.md`
   - Status: **EXISTS** (5,206 bytes, 161 lines).

### 2.2 Execution
Executable validation scripts provided in `sources/addy/scripts/` were executed against the codebase:
- `bun scripts/validate-skills.js`: **PASSED** (exit code 0; 25 skills checked, 0 errors, 0 warnings). Confirms both `frontend-ui-engineering` and `shipping-and-launch` pass structural section validation.
- `bun scripts/validate-reference-links.js`: **PASSED** (exit code 0; 25 skills checked, 0 errors). Confirms all `../../references/` links in both skills resolve.
- `bun scripts/validate-artifact-paths.js`: **PASSED** (exit code 0; 7 files checked, 0 errors).
- `bun scripts/validate-commands.js`: **PASSED** (exit code 0; 9 commands checked, 0 errors).
- `bun test ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-artifact-paths-test.js ./scripts/validate-versions-test.js ./scripts/run-evals-test.js`: **PASSED** (exit code 0; 35 tests passed across 5 test suites).

### 2.3 Documentation Drift
1. **Frontend UI Engineering**:
   - `sources/addy-external/frontend-ui-engineering.md:1, 5` lists slash command `/build` for `frontend-ui-engineering`. However, `frontend-ui-engineering` does not have an exclusive slash command (there is no `/ui` or `/frontend` command in `sources/addy/commands/` or `.claude/commands/`), and `/build` maps to `incremental-implementation` (`commands/build.toml:4`), not `frontend-ui-engineering`.
   - `skills/frontend-ui-engineering/SKILL.md:3` specifies detailed triggering conditions in description ("Use when building or modifying interfaces and pages, creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated"), whereas `README.md:254` simplifies to "Building or modifying user-facing interfaces", and `sources/addy-external/frontend-ui-engineering.md:1` truncates description in meta tags to "Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated."
2. **Shipping and Launch**:
   - Major structural architectural drift: `commands/ship.toml:1-72` and `sources/addy-external/shipping-and-launch.md:1, 5` define `/ship` as a **parallel fan-out orchestrator** that spawns three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) concurrently, merging their reports into a `GO | NO-GO` decision. In contrast, `skills/shipping-and-launch/SKILL.md` completely omits any mention of subagent personas or the fan-out pattern, presenting purely manual pre-launch checklists, staged rollout thresholds, and rollback procedures.
   - Phrasing differences: `SKILL.md:3` frontmatter description lists "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." `README.md:282` lists "Pre-launch checklists, feature flag lifecycle, staged rollouts, rollback procedures, monitoring setup", and `commands/ship.toml:1` specifies "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision".

### 2.4 Internal & Cross-File Consistency
- In `shipping-and-launch`, the pre-launch checklist spans 6 categories: Code Quality, Security, Performance, Accessibility, Infrastructure, and Documentation. These map cleanly to the referenced standalone checklists (`references/security-checklist.md`, `references/performance-checklist.md`, `references/accessibility-checklist.md`, `references/definition-of-done.md`).
- `references/definition-of-done.md:3` explicitly notes: "Use it as the final gate in `planning-and-task-breakdown`, `incremental-implementation`, and `shipping-and-launch`."
- `evals/cases/shipping-and-launch.json` eval 2 and `authority-pressure.md` directly test the principle that authority/executive pressure cannot bypass failed launch gates or missing rollback plans.
- In `frontend-ui-engineering`, the file structure specifies colocation under `src/components/<ComponentName>/` with `.tsx`, `.test.tsx`, `.stories.tsx`, `use-<name>.ts`, and `types.ts`, which adheres to industry best practices.

### 2.5 Composition
- **frontend-ui-engineering**:
  - Phase: `addy:Build`
  - Invokes: `references/accessibility-checklist.md`
  - Invoked by: `CLAUDE.md`, `AGENTS.md`, `README.md`, `skills/using-agent-skills/SKILL.md`, `references/accessibility-checklist.md`, setup docs (`gemini-cli-setup.md`, `opencode-setup.md`, `cursor-setup.md`, `adoption-guide.md`, `getting-started.md`), evals configs.
- **shipping-and-launch**:
  - Phase: `addy:Ship`
  - Invokes: `references/definition-of-done.md`, `references/security-checklist.md`, `references/performance-checklist.md`, `references/accessibility-checklist.md`
  - Invoked by: `commands/ship.toml`, `CLAUDE.md`, `AGENTS.md`, `README.md`, `skills/git-workflow-and-versioning/SKILL.md`, `skills/observability-and-instrumentation/SKILL.md`, `skills/using-agent-skills/SKILL.md`, `references/definition-of-done.md`, `references/observability-checklist.md`, setup docs, evals configs.

### 2.6 Context Cost
- `frontend-ui-engineering/SKILL.md`: 10,711 bytes (~2,700 tokens). Loads `accessibility-checklist.md` (5,206 bytes, ~1,300 tokens). Total combined context: ~15,917 bytes (~4,000 tokens).
- `shipping-and-launch/SKILL.md`: 10,137 bytes (~2,550 tokens). If all 4 referenced documents are loaded simultaneously (`definition-of-done.md` [3,798 B], `security-checklist.md` [11,881 B], `performance-checklist.md` [13,139 B], `accessibility-checklist.md` [5,206 B]), total combined context is ~44,161 bytes (~11,100 tokens).

---

## 3. Draft Inventory Entry: frontend-ui-engineering

```markdown
---
package: addy
path: skills/frontend-ui-engineering/SKILL.md
type: skill
bytes: 10711
unit: inv-addy-15
deprecated: false
---

# skills/frontend-ui-engineering/SKILL.md

## Purpose — required, verbatim
> "Build production-quality user interfaces that are accessible, performant, and visually polished. The goal is UI that looks like it was built by a design-aware engineer at a top company — not like it was generated by an AI. This means real design system adherence, proper accessibility, thoughtful interaction patterns, and no generic "AI aesthetic."" — skills/frontend-ui-engineering/SKILL.md:10

## Design intent — required
Establishes a concrete engineering standard for creating production-ready frontend user interfaces that systematically reject AI-generated design defaults (such as purple/indigo palettes, gratuitous gradients, uniform rounded-2xl corners, and stock card grids) in favor of design system adherence, strict WCAG 2.1 AA accessibility compliance (keyboard navigation, ARIA labeling, focus management, empty/error states), component colocation, composition over configuration, hierarchical state management, responsive mobile-first layouts, and accessible loading/optimistic transition states. Without it, agents default to visually monotonous, inaccessible, and poorly structured UI components.

## Phase — required
addy:Build

## Inputs — required
- User task / requirement to create or modify user-facing interfaces, components, pages, layouts, or state management (skills/frontend-ui-engineering/SKILL.md:14-18)
- Existing design system tokens, color palettes, spacing scales, and typography hierarchies (skills/frontend-ui-engineering/SKILL.md:124, 138-164)
- Accessibility checklist and guidelines (../../references/accessibility-checklist.md, cited at line 297)
- UI wireframes, mockups, or component specifications

## Outputs — required
- Colocated component directories under `src/components/<ComponentName>/` containing component implementation (`.tsx`), unit tests (`.test.tsx`), stories (`.stories.tsx`), custom hooks (`use-<name>.ts`), and types (`types.ts`) (skills/frontend-ui-engineering/SKILL.md:27-34)
- Accessible, responsive UI components meeting WCAG 2.1 AA criteria (keyboard focus traps, ARIA attributes, semantic HTML, mobile-first responsive classes, skeleton loading, optimistic mutations)

## Invokes — required
reference ../../references/accessibility-checklist.md — skills/frontend-ui-engineering/SKILL.md:297

## Invoked by — required
doc CLAUDE.md — CLAUDE.md:23
doc AGENTS.md — AGENTS.md:32
reference references/accessibility-checklist.md — references/accessibility-checklist.md:3
doc README.md — README.md:40, 254, 362
doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:77
skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:25, 178
doc docs/opencode-setup.md — docs/opencode-setup.md:122
doc docs/cursor-setup.md — docs/cursor-setup.md:157
doc docs/adoption-guide.md — docs/adoption-guide.md:60
doc docs/getting-started.md — docs/getting-started.md:71, 136
config evals/cases/api-and-interface-design.json — evals/cases/api-and-interface-design.json:25
config evals/cases/frontend-ui-engineering.json — evals/cases/frontend-ui-engineering.json:2, 42

## Concepts named — required, verbatim
`frontend-ui-engineering` — skills/frontend-ui-engineering/SKILL.md:2 — defined here
`WCAG` — skills/frontend-ui-engineering/SKILL.md:3 — used here
`AI aesthetic` — skills/frontend-ui-engineering/SKILL.md:10 — defined here
`design system` — skills/frontend-ui-engineering/SKILL.md:10 — used here
`colocate` — skills/frontend-ui-engineering/SKILL.md:24 — defined here
`composition over configuration` — skills/frontend-ui-engineering/SKILL.md:38 — defined here
`Separate data fetching from presentation` — skills/frontend-ui-engineering/SKILL.md:77 — defined here
`Local state` — skills/frontend-ui-engineering/SKILL.md:106 — used here
`useState` — skills/frontend-ui-engineering/SKILL.md:106 — used here
`Lifted state` — skills/frontend-ui-engineering/SKILL.md:107 — used here
`Context` — skills/frontend-ui-engineering/SKILL.md:108 — used here
`URL state` — skills/frontend-ui-engineering/SKILL.md:109 — used here
`searchParams` — skills/frontend-ui-engineering/SKILL.md:109 — used here
`Server state` — skills/frontend-ui-engineering/SKILL.md:110 — used here
`React Query` — skills/frontend-ui-engineering/SKILL.md:110 — used here
`SWR` — skills/frontend-ui-engineering/SKILL.md:110 — used here
`Global store` — skills/frontend-ui-engineering/SKILL.md:111 — used here
`Zustand` — skills/frontend-ui-engineering/SKILL.md:111 — used here
`Redux` — skills/frontend-ui-engineering/SKILL.md:111 — used here
`prop drilling` — skills/frontend-ui-engineering/SKILL.md:114 — used here
`Avoid the AI Aesthetic` — skills/frontend-ui-engineering/SKILL.md:118 — defined here
`spacing scale` — skills/frontend-ui-engineering/SKILL.md:129 — defined here
`type hierarchy` — skills/frontend-ui-engineering/SKILL.md:147 — defined here
`semantic color tokens` — skills/frontend-ui-engineering/SKILL.md:161 — defined here
`contrast` — skills/frontend-ui-engineering/SKILL.md:162 — used here
`Accessibility (WCAG 2.1 AA)` — skills/frontend-ui-engineering/SKILL.md:165 — defined here
`WCAG 2.1 AA` — skills/frontend-ui-engineering/SKILL.md:165 — used here
`Keyboard Navigation` — skills/frontend-ui-engineering/SKILL.md:169 — defined here
`ARIA Labels` — skills/frontend-ui-engineering/SKILL.md:187 — defined here
`Focus Management` — skills/frontend-ui-engineering/SKILL.md:201 — defined here
`focus trap` — skills/frontend-ui-engineering/SKILL.md:212 — defined here
`Meaningful Empty and Error States` — skills/frontend-ui-engineering/SKILL.md:222 — defined here
`Responsive Design` — skills/frontend-ui-engineering/SKILL.md:242 — defined here
`mobile first` — skills/frontend-ui-engineering/SKILL.md:244 — defined here
`breakpoints` — skills/frontend-ui-engineering/SKILL.md:257 — defined here
`Loading and Transitions` — skills/frontend-ui-engineering/SKILL.md:258 — defined here
`Skeleton loading` — skills/frontend-ui-engineering/SKILL.md:261 — defined here
`Optimistic updates` — skills/frontend-ui-engineering/SKILL.md:272 — defined here
`accessibility-checklist` — skills/frontend-ui-engineering/SKILL.md:297 — used here
`Common Rationalizations` — skills/frontend-ui-engineering/SKILL.md:299 — defined here
`Red Flags` — skills/frontend-ui-engineering/SKILL.md:309 — defined here
`Verification` — skills/frontend-ui-engineering/SKILL.md:318 — defined here
`axe-core` — skills/frontend-ui-engineering/SKILL.md:328 — used here

## Structure
- Frontend UI Engineering
- Overview
- When to Use
- Component Architecture
  - File Structure
  - Component Patterns
- State Management
- Design System Adherence
  - Avoid the AI Aesthetic
  - Spacing and Layout
  - Typography
  - Color
- Accessibility (WCAG 2.1 AA)
  - Keyboard Navigation
  - ARIA Labels
  - Focus Management
  - Meaningful Empty and Error States
- Responsive Design
- Loading and Transitions
- See Also
- Common Rationalizations
- Red Flags
- Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — sources/addy-external/frontend-ui-engineering.md:1, 5 associates the command `/build` with `frontend-ui-engineering`, but `frontend-ui-engineering` does not have its own slash command and `/build` maps directly to `incremental-implementation` (`commands/build.toml:4`).
- doc-drift — skills/frontend-ui-engineering/SKILL.md:3 specifies comprehensive trigger conditions in frontmatter description, but README.md:254 truncates this to "Building or modifying user-facing interfaces", and sources/addy-external/frontend-ui-engineering.md:1 truncates it to "Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated."

## Observations
- Features an explicit anti-pattern table debunking the "AI aesthetic" across 8 distinct dimensions (palettes, gradients, border radius, hero layouts, placeholder text, padding, card grids, shadows).
- Strict component sizing rule: components with more than 200 lines must be split (line 311).
- Enforces a prop drilling limit of at most 3 levels before lifting state to context or restructuring (line 114).
- Defines explicit standard responsive breakpoints for testing: 320px, 768px, 1024px, 1440px (line 257).

## Context cost
10,711 bytes (~2,700 tokens) for SKILL.md. When loaded alongside `references/accessibility-checklist.md` (5,206 bytes, ~1,300 tokens), total context cost is 15,917 bytes (~4,000 tokens).
```

---

## 4. Draft Inventory Entry: shipping-and-launch

```markdown
---
package: addy
path: skills/shipping-and-launch/SKILL.md
type: skill
bytes: 10137
unit: inv-addy-15
deprecated: false
---

# skills/shipping-and-launch/SKILL.md

## Purpose — required, verbatim
> "Ship with confidence. The goal is not just to deploy — it's to deploy safely, with monitoring in place, a rollback plan ready, and a clear understanding of what success looks like. Every launch should be reversible, observable, and incremental." — skills/shipping-and-launch/SKILL.md:10

## Design intent — required
Establishes a rigorous operational framework for production deployments that enforces safety, observability, reversibility, and incremental release. It provides a multi-domain pre-launch checklist (covering code quality, security, performance, accessibility, infrastructure, and documentation), a feature flag lifecycle model (deploy disabled → internal test → canary/gradual percentage rollout → monitor → dead code cleanup), explicit quantitative thresholds for rollout advancement or rollback (error rate >2x baseline, P95 latency >50% above baseline, new client JS errors >0.1% sessions, business metrics decline >5%), monitoring requirements, and a standardized rollback plan template with strict recovery time objectives. Without it, deployments risk unmonitored failures, irreversible data damage, or release gate overrides under delivery pressure.

## Phase — required
addy:Ship

## Inputs — required
- Production deployment candidate (commit, release branch, or PR)
- Pre-launch checklist validation results across code quality, security, performance, accessibility, infrastructure, and documentation (skills/shipping-and-launch/SKILL.md:20-76)
- Baseline performance, error, and business metrics for comparison (skills/shipping-and-launch/SKILL.md:144-152)
- Standing gates and reference checklists:
  - `../../references/definition-of-done.md` (skills/shipping-and-launch/SKILL.md:268)
  - `../../references/security-checklist.md` (skills/shipping-and-launch/SKILL.md:269)
  - `../../references/performance-checklist.md` (skills/shipping-and-launch/SKILL.md:270)
  - `../../references/accessibility-checklist.md` (skills/shipping-and-launch/SKILL.md:271)

## Outputs — required
- Completed pre-launch checklist verification (skills/shipping-and-launch/SKILL.md:297)
- Rollback plan document with trigger conditions, rollback procedure steps, database migration reversal considerations, and recovery time objectives (skills/shipping-and-launch/SKILL.md:242-265)
- Staged rollout verdicts (advance, hold, rollback) across canary (5%) and gradual rollout (25% -> 50% -> 100%) stages (skills/shipping-and-launch/SKILL.md:112-152)
- Post-launch verification check results (health check 200, error dashboards, latency checks, critical flow verification, log validation) (skills/shipping-and-launch/SKILL.md:225-236, 303-311)

## Invokes — required
reference ../../references/definition-of-done.md — skills/shipping-and-launch/SKILL.md:268
reference ../../references/security-checklist.md — skills/shipping-and-launch/SKILL.md:269
reference ../../references/performance-checklist.md — skills/shipping-and-launch/SKILL.md:270
reference ../../references/accessibility-checklist.md — skills/shipping-and-launch/SKILL.md:271

## Invoked by — required
command commands/ship.toml — commands/ship.toml:4
doc CLAUDE.md — CLAUDE.md:26
doc AGENTS.md — AGENTS.md:45
skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311
skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:23
skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:42, 137, 161, 192
doc README.md — README.md:282, 376
doc docs/getting-started.md — docs/getting-started.md:64, 118
doc docs/opencode-setup.md — docs/opencode-setup.md:173
reference references/definition-of-done.md — references/definition-of-done.md:3, 50, 57
doc docs/antigravity-setup.md — docs/antigravity-setup.md:58
doc docs/adoption-guide.md — docs/adoption-guide.md:43, 62
doc docs/cursor-setup.md — docs/cursor-setup.md:162
reference references/observability-checklist.md — references/observability-checklist.md:91
config evals/cases/code-review-and-quality.json — evals/cases/code-review-and-quality.json:21
config evals/cases/interview-me.json — evals/cases/interview-me.json:25
config evals/cases/shipping-and-launch.json — evals/cases/shipping-and-launch.json:2, 34, 47
script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:107

## Concepts named — required, verbatim
`shipping-and-launch` — skills/shipping-and-launch/SKILL.md:2 — defined here
`pre-launch checklist` — skills/shipping-and-launch/SKILL.md:3 — defined here
`monitoring` — skills/shipping-and-launch/SKILL.md:3 — defined here
`staged rollout` — skills/shipping-and-launch/SKILL.md:3 — defined here
`rollback strategy` — skills/shipping-and-launch/SKILL.md:3 — defined here
`The Pre-Launch Checklist` — skills/shipping-and-launch/SKILL.md:20 — defined here
`Code Quality` — skills/shipping-and-launch/SKILL.md:22 — defined here
`Security` — skills/shipping-and-launch/SKILL.md:32 — defined here
`dependency audit` — skills/shipping-and-launch/SKILL.md:35 — used here
`npm audit` — skills/shipping-and-launch/SKILL.md:35 — used here
`pip-audit` — skills/shipping-and-launch/SKILL.md:35 — used here
`cargo audit` — skills/shipping-and-launch/SKILL.md:35 — used here
`Performance` — skills/shipping-and-launch/SKILL.md:42 — defined here
`Core Web Vitals` — skills/shipping-and-launch/SKILL.md:44 — used here
`N+1 queries` — skills/shipping-and-launch/SKILL.md:45 — used here
`Accessibility` — skills/shipping-and-launch/SKILL.md:51 — defined here
`WCAG 2.1 AA` — skills/shipping-and-launch/SKILL.md:55 — used here
`axe-core` — skills/shipping-and-launch/SKILL.md:58 — used here
`Lighthouse` — skills/shipping-and-launch/SKILL.md:58 — used here
`Infrastructure` — skills/shipping-and-launch/SKILL.md:60 — defined here
`health check` — skills/shipping-and-launch/SKILL.md:67 — used here
`Documentation` — skills/shipping-and-launch/SKILL.md:69 — defined here
`ADRs` — skills/shipping-and-launch/SKILL.md:73 — used here
`Feature Flag Strategy` — skills/shipping-and-launch/SKILL.md:77 — defined here
`feature flag` — skills/shipping-and-launch/SKILL.md:79 — defined here
`feature flag lifecycle` — skills/shipping-and-launch/SKILL.md:94 — defined here
`Staged Rollout` — skills/shipping-and-launch/SKILL.md:110 — defined here
`The Rollout Sequence` — skills/shipping-and-launch/SKILL.md:112 — defined here
`staging environment` — skills/shipping-and-launch/SKILL.md:115 — used here
`CANARY rollout` — skills/shipping-and-launch/SKILL.md:127 — defined here
`canary` — skills/shipping-and-launch/SKILL.md:129 — defined here
`Rollout Decision Thresholds` — skills/shipping-and-launch/SKILL.md:142 — defined here
`P95 latency` — skills/shipping-and-launch/SKILL.md:149 — used here
`Client JS errors` — skills/shipping-and-launch/SKILL.md:150 — used here
`When to Roll Back` — skills/shipping-and-launch/SKILL.md:153 — defined here
`Monitoring and Observability` — skills/shipping-and-launch/SKILL.md:162 — defined here
`What to Monitor` — skills/shipping-and-launch/SKILL.md:164 — defined here
`Error Reporting` — skills/shipping-and-launch/SKILL.md:188 — defined here
`ErrorBoundary` — skills/shipping-and-launch/SKILL.md:192 — defined here
`Post-Launch Verification` — skills/shipping-and-launch/SKILL.md:225 — defined here
`Rollback Strategy` — skills/shipping-and-launch/SKILL.md:238 — defined here
`Rollback Plan` — skills/shipping-and-launch/SKILL.md:242 — defined here
`Trigger Conditions` — skills/shipping-and-launch/SKILL.md:245 — defined here
`Rollback Steps` — skills/shipping-and-launch/SKILL.md:250 — defined here
`Time to Rollback` — skills/shipping-and-launch/SKILL.md:261 — defined here
`Definition of Done` — skills/shipping-and-launch/SKILL.md:268 — used here
`security-checklist` — skills/shipping-and-launch/SKILL.md:269 — used here
`performance-checklist` — skills/shipping-and-launch/SKILL.md:270 — used here
`accessibility-checklist` — skills/shipping-and-launch/SKILL.md:271 — used here
`Common Rationalizations` — skills/shipping-and-launch/SKILL.md:273 — defined here
`Red Flags` — skills/shipping-and-launch/SKILL.md:283 — defined here
`Verification` — skills/shipping-and-launch/SKILL.md:293 — defined here

## Structure
- Shipping and Launch
- Overview
- When to Use
- The Pre-Launch Checklist
  - Code Quality
  - Security
  - Performance
  - Accessibility
  - Infrastructure
  - Documentation
- Feature Flag Strategy
- Staged Rollout
  - The Rollout Sequence
  - Rollout Decision Thresholds
  - When to Roll Back
- Monitoring and Observability
  - What to Monitor
  - Error Reporting
  - Post-Launch Verification
- Rollback Strategy
- See Also
- Common Rationalizations
- Red Flags
- Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — commands/ship.toml:1-72 and sources/addy-external/shipping-and-launch.md:1, 5 define `/ship` as a parallel fan-out orchestrator spawning three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) concurrently, whereas skills/shipping-and-launch/SKILL.md omits any mention of persona fan-out or multi-agent orchestration, detailing only manual checklists, feature flags, staged rollouts, and rollback templates.
- doc-drift — skills/shipping-and-launch/SKILL.md:3 frontmatter description lists "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." README.md:282 summarizes this as "Pre-launch checklists, feature flag lifecycle, staged rollouts, rollback procedures, monitoring setup", and commands/ship.toml:1 describes it as "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision".

## Observations
- Quantified rollback thresholds provide concrete, non-discretionary decision rules (error rate >2x baseline, P95 latency >50% above baseline, client JS errors >0.1% sessions, business metrics decline >5%).
- Explicit recovery time objective targets: feature flag disable <1 min, previous version redeploy <5 min, database rollback <15 min (lines 261-264).
- Eval fixture `evals/fixtures/shipping-and-launch/authority-pressure.md` directly exercises the skill's resistance to organizational authority pressure attempting to bypass safety gates.

## Context cost
10,137 bytes (~2,550 tokens) for SKILL.md alone. When loading all 4 referenced documents (`definition-of-done.md` [3,798 B], `security-checklist.md` [11,881 B], `performance-checklist.md` [13,139 B], `accessibility-checklist.md` [5,206 B]), total combined context is 44,161 bytes (~11,100 tokens).
```
