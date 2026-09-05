---
package: addy
path: evals/README.md
type: doc
bytes: 8114
unit: inv-addy-12
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/README.md

## Purpose — required, verbatim
> "How this repo measures whether its skills actually work: that they **trigger** when they should, **stay distinct** from each other, and **change agent behavior** the way each skill promises." — evals/README.md:3

## Design intent — required
Comprehensive documentation of the evaluation architecture and testing methodology for `agent-skills`. It defines a three-tier testing framework: Tier 1 structural validation (frontmatter, naming, section presence, command parity), Tier 2 trigger and routing validation (lexical TF-IDF ranking of positive/negative prompt routing and pairwise description collision prevention in CI), and Tier 3 behavioral verification (headless Claude execution in isolated git workspaces with fixture materialization and transcript grading against explicit behavioral expectations). Without this document, the repository would lack a unified specification of skill verification standards, eval case schemas, CI gate thresholds (e.g., minimum 80% rank-1 trigger rate, 75% collision ceiling), and authoring requirements for new skills.

## Phase — required
cross-phase

## Inputs — required
Skill definitions (`skills/*/SKILL.md`), command definitions, eval cases (`evals/cases/*.json`), fixtures (`evals/fixtures/*`), prompt queries.

## Outputs — required
Eval results in `evals/results/` (graded JSON reports adhering to skill-creator schema), CI test verdicts (exit 0 on pass, exit 1 on failure), trigger rank-1 rate metrics, collision reports.

## Invokes — required
- script scripts/run-evals.js — evals/README.md:28
- script validate-skills.js — evals/README.md:18
- script validate-commands.js — evals/README.md:18
- file test-driven-development — evals/README.md:62

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:15
- doc CONTRIBUTING.md — CONTRIBUTING.md:5
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:5
- script scripts/run-evals.js — scripts/run-evals.js:5

## Concepts named — required, verbatim
- `Skill Evals` — evals/README.md:1 — defined here
- `evals.json` — evals/README.md:9 — used here
- `Superpowers` — evals/README.md:10 — used here
- `Structural` — evals/README.md:18 — defined here
- `Trigger & routing` — evals/README.md:19 — defined here
- `Behavioral` — evals/README.md:20 — defined here
- `TF-IDF` — evals/README.md:22 — used here
- `execution` — evals/README.md:36 — defined here
- `dialogue` — evals/README.md:36 — defined here
- `grading.json` — evals/README.md:38 — used here
- `trigger rank-1 rate` — evals/README.md:86 — defined here

## Structure
- `# Skill Evals` — evals/README.md:1
- `## Prior art (and what we adopted)` — evals/README.md:5
- `## The three tiers` — evals/README.md:14
- `## Running` — evals/README.md:24
- `## Eval case format` — evals/README.md:40
- `## Adding a skill` — evals/README.md:80
- `## Metrics to watch` — evals/README.md:84

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The three-tier eval architecture provides an elegant separation between zero-cost static CI validation (Tier 1 structural, Tier 2 lexical TF-IDF routing with collision checks) and token-consuming behavioral validation (Tier 3 headless Claude execution with fixtures). The Tier-2 threshold (`--min-rank1 80`) enforces catalog distinctness and prevents skill description drift without incurring API token costs. Note that `node scripts/run-evals.js` expects CommonJS execution, which succeeds under standalone Node.js and Bun (`bun scripts/run-evals.js` passes all 136 checks with 86% rank-1 rate).

## Context cost
8114 bytes. Approximately 1850 tokens.
