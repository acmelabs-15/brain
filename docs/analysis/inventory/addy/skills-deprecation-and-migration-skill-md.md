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
verified: 2026-09-05 quote-check+coverage
---

# skills/deprecation-and-migration/SKILL.md

## Purpose — required, verbatim
> "Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code." — skills/deprecation-and-migration/SKILL.md:3

## Design intent — required
Addresses the reality that code is an ongoing maintenance liability rather than an asset, targeting the common organizational failure where teams excel at building new systems but struggle to decommission legacy ones. It establishes disciplined practices for evaluating deprecation candidates, distinguishing compulsory from advisory deprecation, migrating consumers incrementally through proven patterns (Strangler, Adapter, Feature Flag, and Expand/Contract database schema migrations), and eradicating zombie code. Without this skill, systems accumulate unmaintained dependencies, security vulnerabilities, and complexity debt, while hasty removals cause catastrophic consumer breakages through Hyrum's Law.

## Phase — required
addy:Ship

## Inputs — required
- Old system, API, library, or feature to be replaced or sunsetted — skills/deprecation-and-migration/SKILL.md:16, 17
- Answers to the 5-question deprecation decision framework (value, consumers, replacement, migration cost, maintenance cost) — skills/deprecation-and-migration/SKILL.md:41-56
- Production-proven replacement system covering all critical use cases — skills/deprecation-and-migration/SKILL.md:71-75
- Consumer usage metrics, logs, and touchpoint dependencies — skills/deprecation-and-migration/SKILL.md:99, 113, 237

## Outputs — required
- Deprecation notice with status, replacement, removal date, and rationale — skills/deprecation-and-migration/SKILL.md:80-86
- Migration guide detailing step-by-step code and configuration updates — skills/deprecation-and-migration/SKILL.md:88-92
- Migration verification tooling or script — skills/deprecation-and-migration/SKILL.md:91
- Phased schema migrations with tested down paths (expand, dual-write, backfill, switch reads, contract) — skills/deprecation-and-migration/SKILL.md:177-187
- Deletion of deprecated code, tests, documentation, configuration, and notices — skills/deprecation-and-migration/SKILL.md:112-117

## Invokes — required
- skill incremental-implementation — skills/deprecation-and-migration/SKILL.md:183

## Invoked by — required
- skill skills/git-workflow-and-versioning/SKILL.md:311
- skill skills/api-and-interface-design/SKILL.md:30
- skill skills/using-agent-skills/SKILL.md:39
- doc CLAUDE.md:26
- doc README.md:279
- doc docs/adoption-guide.md:104

## Concepts named — required, verbatim
- `deprecation-and-migration` — skills/deprecation-and-migration/SKILL.md:2 — defined here
- `code is a liability` — skills/deprecation-and-migration/SKILL.md:10, 25 — defined here
- `deprecation` — skills/deprecation-and-migration/SKILL.md:10 — defined here
- `migration` — skills/deprecation-and-migration/SKILL.md:10 — defined here
- `Hyrum's Law` — skills/deprecation-and-migration/SKILL.md:29 — used here
- `deprecation planning` — skills/deprecation-and-migration/SKILL.md:33 — defined here
- `feature flags` — skills/deprecation-and-migration/SKILL.md:35 — used here
- `The Deprecation Decision` — skills/deprecation-and-migration/SKILL.md:37 — defined here
- `advisory deprecation` — skills/deprecation-and-migration/SKILL.md:58 — defined here
- `compulsory deprecation` — skills/deprecation-and-migration/SKILL.md:65 — defined here
- `Deprecation Notice` — skills/deprecation-and-migration/SKILL.md:80 — defined here
- `Migration Guide` — skills/deprecation-and-migration/SKILL.md:88 — defined here
- `The Churn Rule` — skills/deprecation-and-migration/SKILL.md:106, 212 — defined here
- `Strangler Pattern` — skills/deprecation-and-migration/SKILL.md:122 — defined here
- `canary` — skills/deprecation-and-migration/SKILL.md:128 — used here
- `Adapter Pattern` — skills/deprecation-and-migration/SKILL.md:134 — defined here
- `Feature Flag Migration` — skills/deprecation-and-migration/SKILL.md:151 — defined here
- `Database Schema Migrations` — skills/deprecation-and-migration/SKILL.md:164 — defined here
- `Expand/Contract` — skills/deprecation-and-migration/SKILL.md:164, 214, 228 — defined here
- `EXPAND` — skills/deprecation-and-migration/SKILL.md:169, 177 — defined here
- `MIGRATE` — skills/deprecation-and-migration/SKILL.md:169 — defined here
- `CONTRACT` — skills/deprecation-and-migration/SKILL.md:169, 181 — defined here
- `dual-write` — skills/deprecation-and-migration/SKILL.md:171, 178 — defined here
- `backfill` — skills/deprecation-and-migration/SKILL.md:170, 179, 188, 229, 244 — defined here
- `vertical slice` — skills/deprecation-and-migration/SKILL.md:183 — used here
- `incremental-implementation` — skills/deprecation-and-migration/SKILL.md:183 — used here
- `down path` — skills/deprecation-and-migration/SKILL.md:187, 216, 229, 246 — defined here
- `Zombie Code` — skills/deprecation-and-migration/SKILL.md:192, 202, 223 — defined here

## Structure
- ## Overview
- ## When to Use
- ## Core Principles
- ### Code Is a Liability
- ### Hyrum's Law Makes Removal Hard
- ### Deprecation Planning Starts at Design Time
- ## The Deprecation Decision
- ## Compulsory vs Advisory Deprecation
- ## The Migration Process
- ### Step 1: Build the Replacement
- ### Step 2: Announce and Document
- ### Step 3: Migrate Incrementally
- ### Step 4: Remove the Old System
- ## Migration Patterns
- ### Strangler Pattern
- ### Adapter Pattern
- ### Feature Flag Migration
- ### Database Schema Migrations (Expand/Contract)
- ## Zombie Code
- ## Common Rationalizations
- ## Red Flags
- ## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains an explicit database migration protocol: "never change a column in place" — skills/deprecation-and-migration/SKILL.md:166, requiring additive expansion, throttled backfilling, and deferred contraction across separate deploys. Enforces "The Churn Rule" — skills/deprecation-and-migration/SKILL.md:106 placing the migration burden on the infrastructure owner rather than abandoning consumers to navigate breaking changes unaided.

## Context cost
12,516 bytes (~3,100 tokens). Invokes `incremental-implementation` (9,507 bytes), bringing total composed context to ~22 KB (~5,500 tokens).
