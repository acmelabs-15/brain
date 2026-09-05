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
verified: 2026-09-04 quote-check+coverage
---

# evals/README.md

## Purpose — required, verbatim
> "How this repo measures whether its skills actually work: that they **trigger** when they should, **stay distinct** from each other, and **change agent behavior** the way each skill promises." — evals/README.md:3

## Design intent — required
Documents the testing and evaluation framework for the `agent-skills` repository. It formalizes a three-tier evaluation hierarchy: Tier 1 structural validation, Tier 2 deterministic lexical trigger and routing validation using stemmed TF-IDF in CI, and Tier 3 behavioral grading of agent transcripts against explicit expectations in ephemeral git environments using headless Claude. It establishes quality gates, case schemas, and contribution standards to prevent skill description collisions and behavioral degradation.

## Phase — required
cross-phase

## Inputs — required
- Per-skill eval cases `evals/cases/<skill-name>.json` — evals/README.md:42
- Project test fixtures from `evals/fixtures/` — evals/README.md:36
- Skill definitions under `skills/<name>/` — evals/README.md:82

## Outputs — required
- Grader output written to `evals/results/` (`grading.json` shape) — evals/README.md:38
- Tier-2 trigger routing metrics and trigger rank-1 rate — evals/README.md:86

## Invokes — required
- script validate-skills.js — evals/README.md:18
- script validate-commands.js — evals/README.md:18
- script run-evals.js — evals/README.md:19

## Invoked by — required
- doc developer-onboarding.md — docs/developer-onboarding.md:5
- doc CONTRIBUTING.md — CONTRIBUTING.md:5
- doc CLAUDE.md — CLAUDE.md:15

## Concepts named — required, verbatim
- `evals.json` — evals/README.md:9 — used here
- `skill-creator` — evals/README.md:9 — used here
- `Superpowers` — evals/README.md:10 — used here
- `Structural` — evals/README.md:18 — defined here
- `Trigger & routing` — evals/README.md:19 — defined here
- `Behavioral` — evals/README.md:20 — defined here
- `execution` — evals/README.md:36 — defined here
- `dialogue` — evals/README.md:36 — defined here
- `grading.json` — evals/README.md:38 — used here
- `trigger rank-1 rate` — evals/README.md:86 — defined here

## Structure
- # Skill Evals — evals/README.md:1
- ## Prior art (and what we adopted) — evals/README.md:5
- ## The three tiers — evals/README.md:14
- ## Running — evals/README.md:24
- ## Eval case format — evals/README.md:40
- ## Adding a skill — evals/README.md:80
- ## Metrics to watch — evals/README.md:84

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides architectural rationale for evals in an agent skills catalog. Separates free, fast, deterministic CI checks (TF-IDF trigger ranking and collision detection) from expensive token-consuming behavioral runs in ephemeral git environments. Distinguishes `execution` evals (materializing fixtures and inspecting diffs/commits) from `dialogue` evals (conversational assistant turns).

## Context cost
8114 bytes, ~2028 tokens.
