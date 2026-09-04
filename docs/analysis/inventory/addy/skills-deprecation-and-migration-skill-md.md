---
package: addy
path: skills/deprecation-and-migration/SKILL.md
type: skill
bytes: 12516
unit: inv-addy-36
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
- skill incremental-implementation — skills/deprecation-and-migration/SKILL.md:183

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311
- skill skills/api-and-interface-design/SKILL.md — skills/api-and-interface-design/SKILL.md:30
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:39
- doc docs/adoption-guide.md — docs/adoption-guide.md:104
- config evals/cases/performance-optimization.json — evals/cases/performance-optimization.json:29
- config evals/cases/deprecation-and-migration.json — evals/cases/deprecation-and-migration.json:2
- doc README.md — README.md:279
- doc external/deprecation-and-migration.md — external/deprecation-and-migration.md:1

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
- `Deprecation Notice` — skills/deprecation-and-migration/SKILL.md:80 — defined here
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
- `dual-write` — skills/deprecation-and-migration/SKILL.md:171 — defined here
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
- doc-drift · AGENTS.md:24-32, 40-45 · Omits deprecation-and-migration from both the Intent → Skill Mapping and the Lifecycle Mapping (Implicit Commands), where only shipping-and-launch represents the SHIP phase.
- doc-drift · sources/addy-external/deprecation-and-migration.md:12 · Associates the skill with command /ship in the sidebar (<code class="mono">/ship</code>), but commands/ship.toml runs shipping-and-launch via parallel fan-out to reviewer/security/test personas with zero mention of deprecation or migration.
- doc-drift · sources/addy-external/deprecation-and-migration.md:8-10 · Displays a generic 6-section structure ("03 Process"), but skills/deprecation-and-migration/SKILL.md does not contain a "Process" heading, organizing its core procedure into "Core Principles", "The Deprecation Decision", "Compulsory vs Advisory Deprecation", "The Migration Process", "Migration Patterns", and "Zombie Code".
- doc-drift · skills/deprecation-and-migration/SKILL.md:3 · Frontmatter description lists: "Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code." whereas README.md:279 describes it as "Code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, zombie code removal", and sources/addy-external/deprecation-and-migration.md:1 combines both descriptions.

## Observations
- High-value architectural synthesis of Hyrum's Law and Martin Fowler's Strangler pattern adapted specifically for AI coding agents.
- Provides a concrete worked example of expand/contract column renaming (`name` -> `full_name`) with explicit multi-deploy safety rules (additive first, destructive last and alone; backfill off the hot path; tested down path before merge).
- Eval fixture `evals/fixtures/deprecation-and-migration/api-inventory.md` demonstrates testing against realistic enterprise API deprecation scenarios (200 organizations, 90-day contractual notice requirement, unannounced v2 replacement).

## Context cost
12,516 bytes (~3,150 tokens) for SKILL.md alone. When cross-referencing `skills/incremental-implementation/SKILL.md` (9,507 bytes), combined context is 22,023 bytes (~5,550 tokens).
