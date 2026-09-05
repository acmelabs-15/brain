---
package: addy
path: skills/deprecation-and-migration/SKILL.md
type: skill
bytes: 12516
unit: inv-addy-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/deprecation-and-migration/SKILL.md

## Purpose — required, verbatim
> "Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code." — skills/deprecation-and-migration/SKILL.md:3

## Design intent — required
Articulates a code-as-liability philosophy where unused, duplicate, or outdated software is actively retired rather than indefinitely maintained. Provides a systematic decision framework for deciding whether to sunset or maintain legacy components, distinguishes compulsory deadlines from advisory deprecation, and prescribes phased migration patterns—including Strangler, Adapter, Feature Flag cutovers, and additive Expand/Contract database schema evolutions—to eliminate zombie code without breaking downstream consumers.

## Phase — required
addy:Ship

## Inputs — required
Old systems, APIs, libraries, or database schemas targeted for retirement (skills/deprecation-and-migration/SKILL.md:16), consumer touchpoints and active usage metrics or logs (skills/deprecation-and-migration/SKILL.md:99, 113), working replacement systems and migration guides (skills/deprecation-and-migration/SKILL.md:71-76), and comparative maintenance cost evaluations (skills/deprecation-and-migration/SKILL.md:54-56).

## Outputs — required
Deprecation notices (skills/deprecation-and-migration/SKILL.md:80-92), consumer migration guides (skills/deprecation-and-migration/SKILL.md:88-92), interface adapter layers (skills/deprecation-and-migration/SKILL.md:138-149), feature flag migration switches (skills/deprecation-and-migration/SKILL.md:155-162), phased additive database schema migrations (skills/deprecation-and-migration/SKILL.md:168-183), tested down migration scripts (skills/deprecation-and-migration/SKILL.md:187-188), and deleted legacy code, tests, documentation, and configuration (skills/deprecation-and-migration/SKILL.md:114-116).

## Invokes — required
- skill incremental-implementation — skills/deprecation-and-migration/SKILL.md:183

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:39
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:189
- skill api-and-interface-design — skills/api-and-interface-design/SKILL.md:30
- skill git-workflow-and-versioning — skills/git-workflow-and-versioning/SKILL.md:311

## Concepts named — required, verbatim
- `Code Is a Liability` — skills/deprecation-and-migration/SKILL.md:25 — defined here
- `Hyrum's Law` — skills/deprecation-and-migration/SKILL.md:29 — used here
- `Deprecation Planning Starts at Design Time` — skills/deprecation-and-migration/SKILL.md:33 — defined here
- `The Deprecation Decision` — skills/deprecation-and-migration/SKILL.md:37 — defined here
- `Advisory` — skills/deprecation-and-migration/SKILL.md:62 — defined here
- `Compulsory` — skills/deprecation-and-migration/SKILL.md:63 — defined here
- `The Migration Process` — skills/deprecation-and-migration/SKILL.md:67 — defined here
- `Deprecation Notice` — skills/deprecation-and-migration/SKILL.md:80 — defined here
- `Migration Guide` — skills/deprecation-and-migration/SKILL.md:88 — defined here
- `The Churn Rule` — skills/deprecation-and-migration/SKILL.md:106 — defined here
- `Migration Patterns` — skills/deprecation-and-migration/SKILL.md:120 — defined here
- `Strangler Pattern` — skills/deprecation-and-migration/SKILL.md:122 — defined here
- `Adapter Pattern` — skills/deprecation-and-migration/SKILL.md:134 — defined here
- `Feature Flag Migration` — skills/deprecation-and-migration/SKILL.md:151 — defined here
- `Database Schema Migrations` — skills/deprecation-and-migration/SKILL.md:164 — defined here
- `Expand/Contract` — skills/deprecation-and-migration/SKILL.md:164 — defined here
- `Zombie Code` — skills/deprecation-and-migration/SKILL.md:192 — defined here

## Structure
- # Deprecation and Migration — skills/deprecation-and-migration/SKILL.md:6
- ## Overview — skills/deprecation-and-migration/SKILL.md:8
- ## When to Use — skills/deprecation-and-migration/SKILL.md:14
- ## Core Principles — skills/deprecation-and-migration/SKILL.md:23
- ### Code Is a Liability — skills/deprecation-and-migration/SKILL.md:25
- ### Hyrum's Law Makes Removal Hard — skills/deprecation-and-migration/SKILL.md:29
- ### Deprecation Planning Starts at Design Time — skills/deprecation-and-migration/SKILL.md:33
- ## The Deprecation Decision — skills/deprecation-and-migration/SKILL.md:37
- ## Compulsory vs Advisory Deprecation — skills/deprecation-and-migration/SKILL.md:58
- ## The Migration Process — skills/deprecation-and-migration/SKILL.md:67
- ### Step 1: Build the Replacement — skills/deprecation-and-migration/SKILL.md:69
- ### Step 2: Announce and Document — skills/deprecation-and-migration/SKILL.md:77
- ### Step 3: Migrate Incrementally — skills/deprecation-and-migration/SKILL.md:94
- ### Step 4: Remove the Old System — skills/deprecation-and-migration/SKILL.md:108
- ## Migration Patterns — skills/deprecation-and-migration/SKILL.md:120
- ### Strangler Pattern — skills/deprecation-and-migration/SKILL.md:122
- ### Adapter Pattern — skills/deprecation-and-migration/SKILL.md:134
- ### Feature Flag Migration — skills/deprecation-and-migration/SKILL.md:151
- ### Database Schema Migrations (Expand/Contract) — skills/deprecation-and-migration/SKILL.md:164
- ## Zombie Code — skills/deprecation-and-migration/SKILL.md:192
- ## Common Rationalizations — skills/deprecation-and-migration/SKILL.md:204
- ## Red Flags — skills/deprecation-and-migration/SKILL.md:218
- ## Verification — skills/deprecation-and-migration/SKILL.md:231

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Emphasizes the "Code Is a Liability" mindset and Hyrum's Law (skills/deprecation-and-migration/SKILL.md:25-31). The database schema migration expand/contract pattern (skills/deprecation-and-migration/SKILL.md:164-191) details a five-step worked example (Expand, Dual-write, Backfill, Switch reads, Contract) with tested down paths, aligning directly with thin vertical slices from incremental-implementation. The "Churn Rule" (skills/deprecation-and-migration/SKILL.md:106) places the migration burden on the system maintainer rather than consumers.

## Context cost
12516 bytes (~3100 tokens). Loads incremental-implementation (10609 bytes, ~2650 tokens) when referenced. Total context: ~23125 bytes (~5750 tokens).
