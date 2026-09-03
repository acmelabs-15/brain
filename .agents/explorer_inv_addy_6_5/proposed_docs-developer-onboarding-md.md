---
package: addy
path: docs/developer-onboarding.md
type: doc
bytes: 7850
unit: inv-addy-6
---

# docs/developer-onboarding.md

## Purpose — required, verbatim
> "This guide is for people working **on** the agent-skills repository itself: contributing skills, fixing docs, improving the eval harness. If you want to *use* the skills in your own projects, you're looking for [getting-started.md](getting-started.md) instead." — docs/developer-onboarding.md:3

## Design intent — required
Strategic meta-repository developer onboarding guide that establishes the mental model and contributor architecture for developing on `agent-skills`. It decomposes the repository into five composable layers (Skills as "How", Personas as "Who", Commands as "When", References as "What to check", Evals as "Does it work") and enforces critical architectural constraints: user/command orchestration over persona-to-persona chaining, reference linking over duplication, and repo-level agent config (`AGENTS.md`, `CLAUDE.md`) containment. Without it, contributors would create conflicting routing personas, duplicate reference checklists within skill directories, fail command parity across platforms, or misinterpret eval tier test failures.

## Phase — required
`cross-phase` (developer onboarding and contributor architecture)

## Inputs — required
- Contributor intent / task scope (docs/developer-onboarding.md:3, 76-96)
- Prerequisites: Node 20+, bash, jq, gh CLI, Claude Code (docs/developer-onboarding.md:37-42)
- Authoritative documentation and rulebooks: `CONTRIBUTING.md`, `skill-anatomy.md`, `evals/README.md`, `AGENTS.md` (docs/developer-onboarding.md:5, 114-116)
- Existing catalog: `skills/` directories, `evals/cases/` files, open PRs (`gh pr list --state open`) (docs/developer-onboarding.md:86-88)

## Outputs — required
- Guided contribution paths: Path 1 (fixing/improving an existing skill), Path 2 (proposing a new skill), Path 3 (docs, references, harness) (docs/developer-onboarding.md:78-96)
- Contribution artifacts specification: `skills/<name>/SKILL.md`, `evals/cases/<name>.json`, and optional `scripts/` (docs/developer-onboarding.md:88)
- Pre-PR verification checklist (docs/developer-onboarding.md:98-107)
- Suggested contributor reading order (docs/developer-onboarding.md:109-116)

## Invokes — required
- doc getting-started.md — docs/developer-onboarding.md:3
- doc ../CONTRIBUTING.md — docs/developer-onboarding.md:5, 86, 88, 94, 116
- doc skill-anatomy.md — docs/developer-onboarding.md:5, 86, 88, 114
- doc ../evals/README.md — docs/developer-onboarding.md:5, 72, 115
- reference ../references/orchestration-patterns.md — docs/developer-onboarding.md:23
- doc ../AGENTS.md — docs/developer-onboarding.md:26, 116
- doc ../CLAUDE.md — docs/developer-onboarding.md:26
- script scripts/validate-skills.js — docs/developer-onboarding.md:56, 100
- script scripts/validate-commands.js — docs/developer-onboarding.md:59, 102
- script scripts/run-evals.js — docs/developer-onboarding.md:62, 65, 81, 95, 101
- script hooks/session-start.sh — docs/developer-onboarding.md:67, 96
- skill using-agent-skills — docs/developer-onboarding.md:68, 96, 103, 112
- script hooks/session-start-test.sh — docs/developer-onboarding.md:69, 103
- skill code-review-and-quality — docs/developer-onboarding.md:107
- doc ../README.md — docs/developer-onboarding.md:111
- skill test-driven-development — docs/developer-onboarding.md:113

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:5

## Concepts named — required, verbatim
- `five composable layers` — docs/developer-onboarding.md:11 — defined here
- `Skills` — docs/developer-onboarding.md:15 — defined here
- `Personas` — docs/developer-onboarding.md:16, 23 — defined here | used here
- `Commands` — docs/developer-onboarding.md:17 — defined here
- `References` — docs/developer-onboarding.md:18 — defined here
- `Evals` — docs/developer-onboarding.md:19 — defined here
- `parallel fan-out with a merge step` — docs/developer-onboarding.md:23 — used here
- `Don't duplicate, reference` — docs/developer-onboarding.md:24 — defined here
- `Tier 1, structural` — docs/developer-onboarding.md:55 — defined here
- `Tier 1` — docs/developer-onboarding.md:55, 74, 82, 100 — defined here | used here
- `Command parity` — docs/developer-onboarding.md:58, 102 — defined here | used here
- `Tier 2, trigger & routing` — docs/developer-onboarding.md:61 — defined here
- `Tier 2` — docs/developer-onboarding.md:61, 72, 74, 81, 101 — defined here | used here
- `Tier 3, behavioral` — docs/developer-onboarding.md:64 — defined here
- `Tier 3` — docs/developer-onboarding.md:42, 64 — defined here | used here
- `Hook regression test` — docs/developer-onboarding.md:67 — defined here
- `lexical approximation of routing` — docs/developer-onboarding.md:72 — defined here
- `stemmed TF-IDF` — docs/developer-onboarding.md:72 — defined here
- `session-start hook` — docs/developer-onboarding.md:96 — used here
- `Pre-PR checklist` — docs/developer-onboarding.md:98 — defined here
- `change-sizing guidance` — docs/developer-onboarding.md:107 — used here

## Structure
- `# Developer Onboarding` — docs/developer-onboarding.md:1
- `## 1. The mental model` — docs/developer-onboarding.md:9
- `## 2. Local setup` — docs/developer-onboarding.md:30
- `## 3. The verification loop` — docs/developer-onboarding.md:50
- `## 4. Contribution paths` — docs/developer-onboarding.md:76
  - `### Path 1: Fixing or improving an existing skill (most common, best first PR)` — docs/developer-onboarding.md:78
  - `### Path 2: Proposing a new skill (higher bar, do the pre-flight)` — docs/developer-onboarding.md:84
  - `### Path 3: Docs, references, harness` — docs/developer-onboarding.md:92
- `## 5. Pre-PR checklist` — docs/developer-onboarding.md:98
- `## 6. Suggested reading order` — docs/developer-onboarding.md:109

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · `docs/developer-onboarding.md:69-70, 103` · Instructs contributors to run `bash hooks/session-start-test.sh`, which consistently fails with exit code 1 (`Error: expected IMPORTANT priority, got undefined`) because `hooks/session-start.sh` migrated to Claude Code's nested `{"hookSpecificOutput": {"additionalContext": ...}}` payload format while `session-start-test.sh` still expects root properties `payload.priority` and `payload.message`.
- `doc-drift` · `docs/developer-onboarding.md:37-39` · Asserts validators are plain Node scripts requiring "Node 20+ for the scripts/ validators" without a build step or package.json, but because `scripts/*.js` use CommonJS `require()` without a repository-level `package.json`, running `node scripts/validate-skills.js` crashes with `ReferenceError: require is not defined in ES module scope` in any environment where an ancestor directory specifies `"type": "module"`.

## Observations
- Articulates the "five composable layers" foundational ontology separating concerns: Skills (How), Personas (Who), Commands (When), References (What to check), and Evals (Does it work).
- Formulates a hard architectural invariant: "The user (or a slash command) is the orchestrator. Personas never invoke other personas", explicitly restricting multi-agent interaction to parallel fan-out with merge.
- Clarifies the critical distinction between repo-scoped configuration files (`AGENTS.md`, `CLAUDE.md`) and portable, reusable skills.
- Describes the 3-tier eval architecture and explains why Tier 2 failure is a design signal for skill description vocabulary rather than a test suite bug.

## Context cost
- File size: 7,850 bytes (~1,960 tokens).
- Transitive context cost: 0 static prompt overhead (developer documentation read offline by contributors).
