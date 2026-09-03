# Handoff Report — Explorer 2 (inv-addy-17)

## 1. Observation

### Target Files Inspected
1. `sources/addy/skills/deprecation-and-migration/SKILL.md`
   - Exact size: 12,516 bytes, 248 lines.
   - File exists on disk and was read from line 1 to line 248 in full via `view_file`.
   - Explicit Purpose Quote:
     > "Code is a liability, not an asset. Every line of code has ongoing maintenance cost — bugs to fix, dependencies to update, security patches to apply, and new engineers to onboard. Deprecation is the discipline of removing code that no longer earns its keep, and migration is the process of moving users safely from the old to the new." — skills/deprecation-and-migration/SKILL.md:10
   - Frontmatter Description:
     > "Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code." — skills/deprecation-and-migration/SKILL.md:3
   - Invoked references: Invokes `incremental-implementation` (`skills/deprecation-and-migration/SKILL.md:183`). Does not link to any files in `references/`.
   - Scripts: Contains no `scripts/` directory and ships no executable scripts. Contains an illustrative command `npx migrate-check` inside a sample markdown notice template (`skills/deprecation-and-migration/SKILL.md:91`).

2. `sources/addy/skills/observability-and-instrumentation/SKILL.md`
   - Exact size: 11,053 bytes, 204 lines.
   - File exists on disk and was read from line 1 to line 204 in full via `view_file`.
   - Explicit Purpose Quote:
     > "Code you can't observe is code you can't operate. Observability is the ability to answer \"what is the system doing and why?\" from the outside, using the telemetry the code emits. Instrumentation is not a post-launch add-on — it's written alongside the feature, the same way tests are. If a feature ships without telemetry, the first user-reported bug becomes archaeology instead of a query." — skills/observability-and-instrumentation/SKILL.md:10
   - Frontmatter Description:
     > "Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shipping any feature that runs in production and you need evidence it works. Use when production issues are reported but you can't tell what happened from the available data." — skills/observability-and-instrumentation/SKILL.md:3
   - Invoked references:
     - `skills/debugging-and-error-recovery/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:21`)
     - `skills/performance-optimization/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:22`)
     - `skills/shipping-and-launch/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:23`)
     - `skills/security-and-hardening/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:91`)
     - `references/observability-checklist.md` (`skills/observability-and-instrumentation/SKILL.md:203` via `../../references/observability-checklist.md`)
   - Scripts: Contains no `scripts/` directory and ships no executable scripts.

### Lifecycle Phase Alignment
- `sources/addy/CLAUDE.md:26`:
  `**Ship:** git-workflow-and-versioning, ci-cd-and-automation, deprecation-and-migration, documentation-and-adrs, observability-and-instrumentation, shipping-and-launch`
- `sources/addy/README.md:373, 375`:
  `│   ├── deprecation-and-migration/     #   Ship`
  `│   ├── observability-and-instrumentation/ # Ship`
- `sources/addy/skills/using-agent-skills/SKILL.md:189, 191`:
  `| Ship | deprecation-and-migration | Remove old systems and migrate users safely |`
  `| Ship | observability-and-instrumentation | Structured logs, RED metrics, traces, symptom-based alerts |`
- Both skills map definitively to `addy:Ship`.

### Cross-Reference and File Existence Verifications
- `sources/addy/references/observability-checklist.md` (4,931 bytes, 92 lines) — verified exists on disk.
- `sources/addy/skills/incremental-implementation/SKILL.md` (9,507 bytes, 250 lines) — verified exists on disk.
- `sources/addy/skills/debugging-and-error-recovery/SKILL.md` (10,837 bytes, 301 lines) — verified exists on disk.
- `sources/addy/skills/performance-optimization/SKILL.md` (21,717 bytes, 497 lines) — verified exists on disk.
- `sources/addy/skills/shipping-and-launch/SKILL.md` (10,137 bytes, 313 lines) — verified exists on disk.
- `sources/addy/skills/security-and-hardening/SKILL.md` (24,192 bytes, 500 lines) — verified exists on disk.
- `sources/addy/evals/cases/deprecation-and-migration.json` (1,257 bytes) and fixture `evals/fixtures/deprecation-and-migration/api-inventory.md` (504 bytes) — verified exist.
- `sources/addy/evals/cases/observability-and-instrumentation.json` (1,278 bytes) and fixtures `evals/fixtures/observability-and-instrumentation/operations.md` (422 bytes), `payment-retry.js` (339 bytes) — verified exist.
- `sources/addy-external/deprecation-and-migration.md` (26,252 bytes) and `sources/addy-external/observability-and-instrumentation.md` (26,344 bytes) — verified exist.

---

## 2. Logic Chain

1. **Phase Assignment**: `CLAUDE.md:26`, `README.md:373, 375`, and `skills/using-agent-skills/SKILL.md:189, 191` consistently group both `deprecation-and-migration` and `observability-and-instrumentation` under the `Ship` lifecycle phase. Therefore, both files are assigned `addy:Ship`.
2. **Missing Links & Path Integrity**: Every file referenced via relative paths or skill names (`incremental-implementation`, `debugging-and-error-recovery`, `performance-optimization`, `shipping-and-launch`, `security-and-hardening`, `observability-checklist.md`) was verified on disk. There are zero `missing-path` defects.
3. **Execution & Scripts**: Directory inspection confirms neither skill directory contains a `scripts/` folder or scripts of any kind. Mentions of scripts in text (e.g. `npx migrate-check` in `deprecation-and-migration/SKILL.md:91`) are illustrative code snippets inside markdown templates rather than runnable tools. The `Scripts` field is therefore recorded as `none`.
4. **Documentation Drift**:
   - `AGENTS.md` exhibits systematic drift: lines 22–33 ("Intent → Skill Mapping") and lines 34–46 ("Lifecycle Mapping (Implicit Commands)") entirely omit both `deprecation-and-migration` and `observability-and-instrumentation`. In `AGENTS.md:45`, `SHIP` is mapped exclusively to `shipping-and-launch`.
   - The external HTML documentation (`sources/addy-external/deprecation-and-migration.md:12` and `sources/addy-external/observability-and-instrumentation.md:12`) claims in its sidebar that the slash command for both skills is `/ship`. However, inspection of `commands/ship.toml` shows it implements only `shipping-and-launch` via fan-out to 3 reviewer/tester personas, with no logic for deprecation/migration or telemetry instrumentation.
   - The external documentation page for `deprecation-and-migration` lists a standard 6-section anatomy including `03 Process`. In reality, `skills/deprecation-and-migration/SKILL.md` has no `Process` section, organizing its instructions instead across `Core Principles`, `The Deprecation Decision`, `Compulsory vs Advisory Deprecation`, `The Migration Process`, `Migration Patterns`, and `Zombie Code`.
   - `observability-and-instrumentation/SKILL.md:204` references `"the pre-launch instrumentation gate"` in `references/observability-checklist.md`, but line 81 of that checklist titles the section verbatim as `## Pre-Launch Gate`.
5. **Concept Exhaustiveness**: A comprehensive sweep extracted 43 named concepts from `deprecation-and-migration/SKILL.md` and 66 named concepts from `observability-and-instrumentation/SKILL.md`. Each concept is grounded with verbatim citation (`path:line`) and categorized as `defined here` or `used here`.

---

## 3. Caveats

- **Scope boundary**: This investigation covers exclusively `sources/addy/skills/deprecation-and-migration/SKILL.md` and `sources/addy/skills/observability-and-instrumentation/SKILL.md`. The first file in unit `inv-addy-17` (`sources/addy/skills/security-and-hardening/SKILL.md`) is investigated concurrently by Explorer 1.
- **External Documentation Nature**: The files in `sources/addy-external/` are HTML snapshots generated by Astro from the upstream website (`skills.addy.ie`). They reflect public marketing and documentation views rather than raw source skills.
- **Illustrative Code**: Code blocks in both skills (`LegacyTaskService`, `getTaskService`, Express child logger, `prom-client` Histogram, OpenTelemetry `NodeSDK`) are inline educational examples and are not bundled as standalone library modules.

---

## 4. Conclusion & Complete Draft Inventory Entries

Both assigned skills have been thoroughly investigated, validated, and converted into complete draft inventory entries matching `docs/plan/templates/inventory-entry.md` specification.

### Draft Inventory Entry 1: `skills-deprecation-and-migration-skill-md.md`

```markdown
---
package: addy
path: skills/deprecation-and-migration/SKILL.md
type: skill
bytes: 12516
unit: inv-addy-17
---

# skills/deprecation-and-migration/SKILL.md

## Purpose — required, verbatim
> "Code is a liability, not an asset. Every line of code has ongoing maintenance cost — bugs to fix, dependencies to update, security patches to apply, and new engineers to onboard. Deprecation is the discipline of removing code that no longer earns its keep, and migration is the process of moving users safely from the old to the new." — skills/deprecation-and-migration/SKILL.md:10

## Design intent — required
Establishes a systematic discipline for decommissioning obsolete systems, APIs, database schemas, and unmaintained code ("zombie code") safely without breaking active consumers. It addresses the asymmetry where engineering organizations excel at building software but fail to retire it, resulting in accumulating maintenance debt, security vulnerabilities, and cognitive drag. By codifying Hyrum's Law, the Churn Rule (the system owner is responsible for migrating downstream users or providing backward-compatible updates), compulsory versus advisory deprecation tracks, and established technical patterns (Strangler, Adapter, Feature Flag cutover, and Expand/Contract database schema migrations with mandatory tested down paths), the skill ensures that software retirement is designed upfront and executed as an incremental, reversible engineering process rather than an abandoned announcement.

## Phase — required
addy:Ship

## Inputs — required
- Target legacy system, API, library, feature, column/schema, or unmaintained codebase candidate for retirement (`skills/deprecation-and-migration/SKILL.md:16-21, 166`)
- Deprecation decision assessment answering the five gating questions (unique value, consumer count, replacement existence, migration cost per consumer, ongoing maintenance cost) (`skills/deprecation-and-migration/SKILL.md:39-56`)
- Production telemetry, metrics, and access logs quantifying active consumer usage and traffic volume (`skills/deprecation-and-migration/SKILL.md:45-47, 113, 225, 237`)
- Operational references:
  - `skills/incremental-implementation/SKILL.md` for vertical slicing additive migration steps (`skills/deprecation-and-migration/SKILL.md:183`)

## Outputs — required
- Deprecation Decision classification (Advisory vs Compulsory deprecation track) (`skills/deprecation-and-migration/SKILL.md:58-65`)
- Deprecation Notice document with status, replacement pointer, removal date, rationale, and migration guide (`skills/deprecation-and-migration/SKILL.md:79-93`)
- Consumer Migration Guide with step-by-step code transformation and configuration instructions (`skills/deprecation-and-migration/SKILL.md:88-92, 236`)
- Migration implementation artifacts:
  - Strangler routing configuration or traffic proxy rules (`skills/deprecation-and-migration/SKILL.md:122-132`)
  - Compatibility adapter classes bridging legacy interfaces to new implementations (`skills/deprecation-and-migration/SKILL.md:134-149`)
  - Feature flag routing wrappers for gradual user cutover (`skills/deprecation-and-migration/SKILL.md:151-162`)
  - Multi-phase database migration scripts (Expand nullable column -> Dual-write app code -> Throttled batch backfill -> Read cutover -> Contract drop column) with tested rollback/down paths (`skills/deprecation-and-migration/SKILL.md:164-191, 242-248`)
- Decommissioning checklist verification (zero active consumers verified, legacy code, tests, docs, config, and deprecation notices purged) (`skills/deprecation-and-migration/SKILL.md:110-117, 233-241`)

## Invokes — required
- skill skills/incremental-implementation/SKILL.md — skills/deprecation-and-migration/SKILL.md:183

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311
- skill skills/api-and-interface-design/SKILL.md — skills/api-and-interface-design/SKILL.md:30
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:39, skills/using-agent-skills/SKILL.md:160, skills/using-agent-skills/SKILL.md:189
- doc docs/adoption-guide.md — docs/adoption-guide.md:104
- config evals/cases/performance-optimization.json — evals/cases/performance-optimization.json:29
- config evals/cases/deprecation-and-migration.json — evals/cases/deprecation-and-migration.json:2, evals/cases/deprecation-and-migration.json:34
- doc README.md — README.md:279, README.md:373
- external-doc sources/addy-external/deprecation-and-migration.md — sources/addy-external/deprecation-and-migration.md:1, sources/addy-external/deprecation-and-migration.md:5

## Concepts named — required, verbatim
- `deprecation-and-migration` — skills/deprecation-and-migration/SKILL.md:2 — defined here
- `Deprecation` — skills/deprecation-and-migration/SKILL.md:10 — defined here
- `migration` — skills/deprecation-and-migration/SKILL.md:10 — defined here
- `Code Is a Liability` — skills/deprecation-and-migration/SKILL.md:25 — defined here
- `Hyrum's Law` — skills/deprecation-and-migration/SKILL.md:29 — used here
- `Deprecation Planning Starts at Design Time` — skills/deprecation-and-migration/SKILL.md:33 — defined here
- `feature flags` — skills/deprecation-and-migration/SKILL.md:35 — used here
- `The Deprecation Decision` — skills/deprecation-and-migration/SKILL.md:37 — defined here
- `Compulsory vs Advisory Deprecation` — skills/deprecation-and-migration/SKILL.md:58 — defined here
- `Advisory` — skills/deprecation-and-migration/SKILL.md:62 — defined here
- `Compulsory` — skills/deprecation-and-migration/SKILL.md:63 — defined here
- `The Migration Process` — skills/deprecation-and-migration/SKILL.md:67 — defined here
- `Step 1: Build the Replacement` — skills/deprecation-and-migration/SKILL.md:69 — defined here
- `migration guides` — skills/deprecation-and-migration/SKILL.md:74 — defined here
- `Step 2: Announce and Document` — skills/deprecation-and-migration/SKILL.md:77 — defined here
- `Deprecation Notice` — skills/deprecation-and-migration/SKILL.md:79 — defined here
- `Migration Guide` — skills/deprecation-and-migration/SKILL.md:88 — defined here
- `Step 3: Migrate Incrementally` — skills/deprecation-and-migration/SKILL.md:94 — defined here
- `The Churn Rule` — skills/deprecation-and-migration/SKILL.md:106 — defined here
- `Step 4: Remove the Old System` — skills/deprecation-and-migration/SKILL.md:108 — defined here
- `Migration Patterns` — skills/deprecation-and-migration/SKILL.md:120 — defined here
- `Strangler Pattern` — skills/deprecation-and-migration/SKILL.md:122 — defined here
- `canary` — skills/deprecation-and-migration/SKILL.md:128 — used here
- `Adapter Pattern` — skills/deprecation-and-migration/SKILL.md:134 — defined here
- `Feature Flag Migration` — skills/deprecation-and-migration/SKILL.md:151 — defined here
- `Database Schema Migrations (Expand/Contract)` — skills/deprecation-and-migration/SKILL.md:164 — defined here
- `Expand/Contract` — skills/deprecation-and-migration/SKILL.md:164 — defined here
- `EXPAND` — skills/deprecation-and-migration/SKILL.md:169 — defined here
- `MIGRATE` — skills/deprecation-and-migration/SKILL.md:169 — defined here
- `CONTRACT` — skills/deprecation-and-migration/SKILL.md:169 — defined here
- `backfill` — skills/deprecation-and-migration/SKILL.md:170 — defined here
- `dual-write` — skills/deprecation-and-migration/SKILL.md:170 — defined here
- `Dual-write` — skills/deprecation-and-migration/SKILL.md:178 — defined here
- `Backfill` — skills/deprecation-and-migration/SKILL.md:179 — defined here
- `Switch reads` — skills/deprecation-and-migration/SKILL.md:180 — defined here
- `thin vertical slice` — skills/deprecation-and-migration/SKILL.md:183 — used here
- `incremental-implementation` — skills/deprecation-and-migration/SKILL.md:183 — used here
- `down path` — skills/deprecation-and-migration/SKILL.md:187 — defined here
- `CREATE INDEX CONCURRENTLY` — skills/deprecation-and-migration/SKILL.md:189 — used here
- `Zombie Code` — skills/deprecation-and-migration/SKILL.md:192 — defined here
- `Common Rationalizations` — skills/deprecation-and-migration/SKILL.md:204 — defined here
- `Red Flags` — skills/deprecation-and-migration/SKILL.md:218 — defined here
- `Verification` — skills/deprecation-and-migration/SKILL.md:231 — defined here

## Structure
- Deprecation and Migration (line 6)
- Overview (line 8)
- When to Use (line 14)
- Core Principles (line 23)
  - Code Is a Liability (line 25)
  - Hyrum's Law Makes Removal Hard (line 29)
  - Deprecation Planning Starts at Design Time (line 33)
- The Deprecation Decision (line 37)
- Compulsory vs Advisory Deprecation (line 58)
- The Migration Process (line 67)
  - Step 1: Build the Replacement (line 69)
  - Step 2: Announce and Document (line 77)
  - Step 3: Migrate Incrementally (line 94)
  - Step 4: Remove the Old System (line 108)
- Migration Patterns (line 120)
  - Strangler Pattern (line 122)
  - Adapter Pattern (line 134)
  - Feature Flag Migration (line 151)
  - Database Schema Migrations (Expand/Contract) (line 164)
- Zombie Code (line 192)
- Common Rationalizations (line 204)
- Red Flags (line 218)
- Verification (line 231)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — AGENTS.md:24-32, 40-45 omits deprecation-and-migration from both the Intent → Skill Mapping and the Lifecycle Mapping (Implicit Commands), where only shipping-and-launch represents the SHIP phase.
- doc-drift — sources/addy-external/deprecation-and-migration.md:12 associates the skill with command /ship in the sidebar (<code class="mono">/ship</code>), but commands/ship.toml runs shipping-and-launch via parallel fan-out to reviewer/security/test personas with zero mention of deprecation or migration.
- doc-drift — sources/addy-external/deprecation-and-migration.md:8-10 displays a generic 6-section structure ("03 Process"), but skills/deprecation-and-migration/SKILL.md does not contain a "Process" heading, organizing its core procedure into "Core Principles", "The Deprecation Decision", "Compulsory vs Advisory Deprecation", "The Migration Process", "Migration Patterns", and "Zombie Code".
- doc-drift — skills/deprecation-and-migration/SKILL.md:3 frontmatter description lists: "Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code." whereas README.md:279 describes it as "Code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, zombie code removal", and sources/addy-external/deprecation-and-migration.md:1 combines both descriptions.

## Observations
- High-value architectural synthesis of Hyrum's Law and Martin Fowler's Strangler pattern adapted specifically for AI coding agents.
- Provides a concrete worked example of expand/contract column renaming (`name` -> `full_name`) with explicit multi-deploy safety rules (additive first, destructive last and alone; backfill off the hot path; tested down path before merge).
- Eval fixture `evals/fixtures/deprecation-and-migration/api-inventory.md` demonstrates testing against realistic enterprise API deprecation scenarios (200 organizations, 90-day contractual notice requirement, unannounced v2 replacement).

## Context cost
12,516 bytes (~3,150 tokens) for SKILL.md alone. When cross-referencing `skills/incremental-implementation/SKILL.md` (9,507 bytes), combined context is 22,023 bytes (~5,550 tokens).
```

---

### Draft Inventory Entry 2: `skills-observability-and-instrumentation-skill-md.md`

```markdown
---
package: addy
path: skills/observability-and-instrumentation/SKILL.md
type: skill
bytes: 11053
unit: inv-addy-17
---

# skills/observability-and-instrumentation/SKILL.md

## Purpose — required, verbatim
> "Code you can't observe is code you can't operate. Observability is the ability to answer \"what is the system doing and why?\" from the outside, using the telemetry the code emits. Instrumentation is not a post-launch add-on — it's written alongside the feature, the same way tests are. If a feature ships without telemetry, the first user-reported bug becomes archaeology instead of a query." — skills/observability-and-instrumentation/SKILL.md:10

## Design intent — required
Mandates and standardizes the co-development of observability telemetry alongside feature code, preventing unobservable production deployments where failure investigation degrades into guesswork. It establishes an on-call-driven methodology requiring engineers to define 2–4 diagnostic questions before writing telemetry, maps those questions to the appropriate signal types (metrics tell that something is wrong, traces tell where, logs tell why), and provides concrete rules for structured JSON logging with correlation IDs, RED/USE metrics with strict cardinality controls (avoiding user IDs, raw URLs, and error strings in labels), vendor-neutral OpenTelemetry distributed tracing with context propagation, and symptom-based alerting (page vs ticket) linking directly to actionable runbooks.

## Phase — required
addy:Ship

## Inputs — required
- Production feature specification, service endpoint, background job, queue, or external integration candidate for instrumentation (`skills/observability-and-instrumentation/SKILL.md:14-18`)
- Defined on-call questions specifying 2–4 critical questions on-call engineers need answered during an incident (`skills/observability-and-instrumentation/SKILL.md:27-40`)
- Operational references:
  - `skills/debugging-and-error-recovery/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:21`)
  - `skills/performance-optimization/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:22`)
  - `skills/shipping-and-launch/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:23`)
  - `skills/security-and-hardening/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:91`)
  - `../../references/observability-checklist.md` (`skills/observability-and-instrumentation/SKILL.md:203`)

## Outputs — required
- Documented on-call questions mapped to telemetry signals (`skills/observability-and-instrumentation/SKILL.md:27-48, 194`)
- Structured JSON logging implementation with standardized event names, log levels (error, warn, info, debug), allowlisted non-PII fields, and correlation/request ID propagation across system boundaries (`skills/observability-and-instrumentation/SKILL.md:52-92, 195-196`)
- Metric telemetry definitions: RED metrics (Rate, Errors, Duration histograms with p50/p95/p99) on endpoints/dependencies and USE metrics (Utilization, Saturation, Errors) on resources with low-cardinality label sets (`skills/observability-and-instrumentation/SKILL.md:93-118, 197-198`)
- Distributed tracing configuration using OpenTelemetry (e.g., `NodeSDK`, auto-instrumentation, context propagation across async boundaries, and custom spans with low-cardinality attributes) (`skills/observability-and-instrumentation/SKILL.md:119-136, 199`)
- Symptom-based alerting configurations (two tiers: page vs ticket) with justified thresholds and links to actionable runbooks (`skills/observability-and-instrumentation/SKILL.md:137-156, 200`)
- Staging telemetry verification evidence (trace traversal, metric emergence, correlation ID retrieval, alert test-fire verification) (`skills/observability-and-instrumentation/SKILL.md:157-165, 201`)

## Invokes — required
- skill skills/debugging-and-error-recovery/SKILL.md — skills/observability-and-instrumentation/SKILL.md:21
- skill skills/performance-optimization/SKILL.md — skills/observability-and-instrumentation/SKILL.md:22
- skill skills/shipping-and-launch/SKILL.md — skills/observability-and-instrumentation/SKILL.md:23
- skill skills/security-and-hardening/SKILL.md — skills/observability-and-instrumentation/SKILL.md:91
- reference ../../references/observability-checklist.md — skills/observability-and-instrumentation/SKILL.md:203

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- skill skills/security-and-hardening/SKILL.md — skills/security-and-hardening/SKILL.md:369
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:41, skills/using-agent-skills/SKILL.md:153, skills/using-agent-skills/SKILL.md:191
- doc docs/getting-started.md — docs/getting-started.md:138
- doc docs/adoption-guide.md — docs/adoption-guide.md:62, docs/adoption-guide.md:105
- doc README.md — README.md:281, README.md:375
- config evals/cases/incremental-implementation.json — evals/cases/incremental-implementation.json:21
- reference references/definition-of-done.md — references/definition-of-done.md:49
- config evals/cases/spec-driven-development.json — evals/cases/spec-driven-development.json:29
- config evals/cases/observability-and-instrumentation.json — evals/cases/observability-and-instrumentation.json:2, evals/cases/observability-and-instrumentation.json:34
- config evals/cases/ci-cd-and-automation.json — evals/cases/ci-cd-and-automation.json:25
- reference references/observability-checklist.md — references/observability-checklist.md:3
- external-doc sources/addy-external/observability-and-instrumentation.md — sources/addy-external/observability-and-instrumentation.md:1, sources/addy-external/observability-and-instrumentation.md:5

## Concepts named — required, verbatim
- `observability-and-instrumentation` — skills/observability-and-instrumentation/SKILL.md:2 — defined here
- `logging` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `metrics` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `tracing` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `alerting` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `Observability` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `telemetry` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `Instrumentation` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `debugging-and-error-recovery` — skills/observability-and-instrumentation/SKILL.md:21 — used here
- `performance-optimization` — skills/observability-and-instrumentation/SKILL.md:22 — used here
- `shipping-and-launch` — skills/observability-and-instrumentation/SKILL.md:23 — used here
- `Process` — skills/observability-and-instrumentation/SKILL.md:25 — defined here
- `Define "working" before instrumenting` — skills/observability-and-instrumentation/SKILL.md:27 — defined here
- `on-call questions` — skills/observability-and-instrumentation/SKILL.md:29 — defined here
- `Pick the right signal for each question` — skills/observability-and-instrumentation/SKILL.md:42 — defined here
- `Structured log` — skills/observability-and-instrumentation/SKILL.md:46 — defined here
- `Metric` — skills/observability-and-instrumentation/SKILL.md:47 — defined here
- `Trace` — skills/observability-and-instrumentation/SKILL.md:48 — defined here
- `Structured logging` — skills/observability-and-instrumentation/SKILL.md:52 — defined here
- `Log levels` — skills/observability-and-instrumentation/SKILL.md:70 — defined here
- `error` — skills/observability-and-instrumentation/SKILL.md:74 — defined here
- `warn` — skills/observability-and-instrumentation/SKILL.md:75 — defined here
- `info` — skills/observability-and-instrumentation/SKILL.md:76 — defined here
- `debug` — skills/observability-and-instrumentation/SKILL.md:77 — defined here
- `Correlation IDs` — skills/observability-and-instrumentation/SKILL.md:79 — defined here
- `request ID` — skills/observability-and-instrumentation/SKILL.md:79 — defined here
- `x-request-id` — skills/observability-and-instrumentation/SKILL.md:84 — used here
- `security-and-hardening` — skills/observability-and-instrumentation/SKILL.md:91 — used here
- `PII` — skills/observability-and-instrumentation/SKILL.md:91 — used here
- `Metrics` — skills/observability-and-instrumentation/SKILL.md:93 — defined here
- `RED` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Rate` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Errors` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Duration` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `USE` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Utilization` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Saturation` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `OpenTelemetry metrics API` — skills/observability-and-instrumentation/SKILL.md:97 — used here
- `OpenTelemetry` — skills/observability-and-instrumentation/SKILL.md:97 — used here
- `Prometheus` — skills/observability-and-instrumentation/SKILL.md:98 — used here
- `prom-client` — skills/observability-and-instrumentation/SKILL.md:98 — used here
- `Histogram` — skills/observability-and-instrumentation/SKILL.md:100 — used here
- `Cardinality` — skills/observability-and-instrumentation/SKILL.md:110 — defined here
- `percentiles` — skills/observability-and-instrumentation/SKILL.md:117 — defined here
- `p50/p95/p99` — skills/observability-and-instrumentation/SKILL.md:117 — defined here
- `Distributed tracing` — skills/observability-and-instrumentation/SKILL.md:119 — defined here
- `auto-instrumentation` — skills/observability-and-instrumentation/SKILL.md:121 — used here
- `NodeSDK` — skills/observability-and-instrumentation/SKILL.md:125 — used here
- `getNodeAutoInstrumentations` — skills/observability-and-instrumentation/SKILL.md:126 — used here
- `manual spans` — skills/observability-and-instrumentation/SKILL.md:134 — defined here
- `head-based sampling` — skills/observability-and-instrumentation/SKILL.md:135 — defined here
- `tail sampling` — skills/observability-and-instrumentation/SKILL.md:136 — defined here
- `Alerting` — skills/observability-and-instrumentation/SKILL.md:137 — defined here
- `symptoms users feel` — skills/observability-and-instrumentation/SKILL.md:139 — defined here
- `Symptom-based alerts` — skills/observability-and-instrumentation/SKILL.md:148 — defined here
- `Cause-based alerts` — skills/observability-and-instrumentation/SKILL.md:148 — defined here
- `runbook` — skills/observability-and-instrumentation/SKILL.md:152 — defined here
- `SLO` — skills/observability-and-instrumentation/SKILL.md:154 — used here
- `page` — skills/observability-and-instrumentation/SKILL.md:155 — defined here
- `ticket` — skills/observability-and-instrumentation/SKILL.md:155 — defined here
- `Verify the telemetry itself` — skills/observability-and-instrumentation/SKILL.md:157 — defined here
- `Common Rationalizations` — skills/observability-and-instrumentation/SKILL.md:166 — defined here
- `Red Flags` — skills/observability-and-instrumentation/SKILL.md:178 — defined here
- `Verification` — skills/observability-and-instrumentation/SKILL.md:190 — defined here
- `observability-checklist.md` — skills/observability-and-instrumentation/SKILL.md:203 — used here
- `pre-launch instrumentation gate` — skills/observability-and-instrumentation/SKILL.md:204 — used here

## Structure
- Observability and Instrumentation (line 6)
- Overview (line 8)
- When to Use (line 12)
- Process (line 25)
  - 1. Define "working" before instrumenting (line 27)
  - 2. Pick the right signal for each question (line 42)
  - 3. Structured logging (line 52)
  - 4. Metrics (line 93)
  - 5. Distributed tracing (line 119)
  - 6. Alerting (line 137)
  - 7. Verify the telemetry itself (line 157)
- Common Rationalizations (line 166)
- Red Flags (line 178)
- Verification (line 190)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — AGENTS.md:24-32, 40-45 omits observability-and-instrumentation from both the Intent → Skill Mapping and the Lifecycle Mapping (Implicit Commands), where only shipping-and-launch represents the SHIP phase.
- doc-drift — sources/addy-external/observability-and-instrumentation.md:12 associates the skill with command /ship in the sidebar (<code class="mono">/ship</code>), but commands/ship.toml runs shipping-and-launch via parallel fan-out to reviewer/security/test personas with zero mention of telemetry, logging, metrics, tracing, or alerting instrumentation.
- doc-drift — skills/observability-and-instrumentation/SKILL.md:204 refers to "the pre-launch instrumentation gate" in references/observability-checklist.md, but the verbatim section heading in references/observability-checklist.md:81 is "## Pre-Launch Gate".
- doc-drift — skills/observability-and-instrumentation/SKILL.md:3 frontmatter description lists: "Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shipping any feature that runs in production and you need evidence it works. Use when production issues are reported but you can't tell what happened from the available data." whereas README.md:281 describes it as "Structured logging, RED metrics, OpenTelemetry tracing, symptom-based alerting - instrument as you build", and sources/addy-external/observability-and-instrumentation.md:1 appends ", not after an incident."

## Observations
- Clean, highly actionable rule of thumb on telemetry signals: "metrics tell you that something is wrong, traces tell you where, logs tell you why" (line 50).
- Explicit anti-cardinality-bomb instruction (lines 110–116) preventing metric store outages from high-cardinality identifiers (user IDs, full URLs, error message text).
- Strict separation between symptom-based alerts (paging humans on user-visible degradation) and cause-based dashboards (CPU/memory), with runbook requirements.
- Companion eval fixture `evals/fixtures/observability-and-instrumentation/payment-retry.js` directly replicates the console.log string-interpolation anti-pattern to test the agent's refactoring capability.

## Context cost
11,053 bytes (~2,800 tokens) for SKILL.md alone. When loading the primary companion checklist `references/observability-checklist.md` (4,931 bytes), combined context is 15,984 bytes (~4,050 tokens).
```

---

## 5. Verification Method

To independently verify these findings and draft inventory entries:

1. **Verify Line Counts and Content**:
   ```bash
   wc -c -l sources/addy/skills/deprecation-and-migration/SKILL.md
   # Expected: 248 lines, 12516 bytes
   wc -c -l sources/addy/skills/observability-and-instrumentation/SKILL.md
   # Expected: 204 lines, 11053 bytes
   ```

2. **Verify Referenced Target Files Exist**:
   ```bash
   test -f sources/addy/references/observability-checklist.md && echo "OK"
   test -f sources/addy/skills/incremental-implementation/SKILL.md && echo "OK"
   test -f sources/addy/skills/debugging-and-error-recovery/SKILL.md && echo "OK"
   test -f sources/addy/skills/performance-optimization/SKILL.md && echo "OK"
   test -f sources/addy/skills/shipping-and-launch/SKILL.md && echo "OK"
   test -f sources/addy/skills/security-and-hardening/SKILL.md && echo "OK"
   ```

3. **Verify Script Absence**:
   ```bash
   ls -d sources/addy/skills/deprecation-and-migration/scripts 2>/dev/null || echo "No scripts dir"
   ls -d sources/addy/skills/observability-and-instrumentation/scripts 2>/dev/null || echo "No scripts dir"
   ```

4. **Verify Doc-Drift in AGENTS.md and commands/ship.toml**:
   Inspect `sources/addy/AGENTS.md` lines 22–46 to confirm omission of both skills from lifecycle and intent mappings.
   Inspect `sources/addy/commands/ship.toml` to confirm it runs only `shipping-and-launch`.

5. **Invalidation Conditions**:
   - Any broken file path claimed to be valid.
   - Any script discovered inside either skill directory that was not executed.
   - Any non-verbatim quote in Purpose or Concepts named fields.
