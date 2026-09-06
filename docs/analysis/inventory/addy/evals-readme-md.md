---
package: addy
path: evals/README.md
type: doc
bytes: 8114
unit: inv-addy-12
aliases: []
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/README.md

## Purpose — required, verbatim
> "How this repo measures whether its skills actually work: that they **trigger** when they should, **stay distinct** from each other, and **change agent behavior** the way each skill promises." — evals/README.md:3

## Design intent — required
Documentation guide and architectural manual for the evaluation framework of Addy Osmani's agent skills repository. Describes the three-tier evaluation model: Tier 1 structural validation (free CI checks for frontmatter, naming, and command parity), Tier 2 deterministic trigger and routing testing (TF-IDF keyword ranking ensuring skills trigger on positive prompts and don't collide), and Tier 3 behavioral evaluation (running real agents in headless Claude sessions against fixtures, grading tool traces and transcripts). Standardizes eval case formats (`evals/cases/<skill-name>.json`), behavioral modes (`execution` vs `dialogue`), pressure testing under rationalizations (time pressure, sunk cost, authority pressure), and quality thresholds (trigger rank-1 rate floor, collision checks). Ensures skills are verifiable, distinct, and resilient to agent evasion.

## Phase — required
none

## Inputs — required
- Eval case files: `evals/cases/<skill-name>.json` — evals/README.md:42
- Test fixtures directory: `evals/fixtures/` — evals/README.md:36
- Skill definitions: `skills/<name>/` — evals/README.md:82

## Outputs — required
- Grader output written to `evals/results/` in skill-creator's `grading.json` shape — evals/README.md:38
- Execution traces formatted via `--output-format stream-json --verbose` — evals/README.md:36
- Metrics reports printed to stdout including trigger rank-1 rate and collision warnings — evals/README.md:86

## Invokes — required
- script validate-skills.js — evals/README.md:18
- script validate-commands.js — evals/README.md:18
- script run-evals.js — evals/README.md:19
- file evals/cases/ — evals/README.md:42
- file evals/fixtures/ — evals/README.md:36

## Invoked by — required
- file CLAUDE.md — CLAUDE.md:15
- file CONTRIBUTING.md — CONTRIBUTING.md:5
- file docs/developer-onboarding.md — docs/developer-onboarding.md:5

## Concepts named — required, verbatim
- `Skill Evals` — evals/README.md:1 — defined here
- `skill-creator` — evals/README.md:9 — used here
- `evals.json` — evals/README.md:9 — used here
- `expectations[]` — evals/README.md:9 — used here
- `Superpowers` — evals/README.md:10 — used here
- `The three tiers` — evals/README.md:14 — defined here
- `Structural` — evals/README.md:18 — defined here
- `validate-skills.js` — evals/README.md:18 — used here
- `validate-commands.js` — evals/README.md:18 — used here
- `Trigger & routing` — evals/README.md:19 — defined here
- `run-evals.js` — evals/README.md:19 — used here
- `Behavioral` — evals/README.md:20 — defined here
- `TF-IDF` — evals/README.md:22 — used here
- `execution` — evals/README.md:36 — defined here
- `dialogue` — evals/README.md:36 — defined here
- `grading.json` — evals/README.md:38 — used here
- `Discipline skills` — evals/README.md:38 — defined here
- `time pressure` — evals/README.md:38 — used here
- `sunk cost` — evals/README.md:38 — used here
- `authority pressure` — evals/README.md:38 — used here
- `skill_name` — evals/README.md:46 — used here
- `trigger` — evals/README.md:47 — used here
- `positive` — evals/README.md:48 — used here
- `negative` — evals/README.md:51 — used here
- `trigger rank-1 rate` — evals/README.md:86 — defined here
- `collision check` — evals/README.md:86 — defined here

## Structure
- `# Skill Evals` — evals/README.md:1
- `## Prior art (and what we adopted)` — evals/README.md:5
- `## The three tiers` — evals/README.md:14
- `## Running` — evals/README.md:24
- `## Eval case format` — evals/README.md:40
- `## Adding a skill` — evals/README.md:80
- `## Metrics to watch` — evals/README.md:84

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/run-evals.js`, language: JavaScript (Node.js CommonJS), lines: 384
- documented invocation: "node scripts/run-evals.js" — evals/README.md:28
- **executed:** yes
- actual command run: `bun scripts/run-evals.js` (run within `sources/addy`), abridged stdout: `Running skill evals across 25 skills, 25 case files\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`, **actual exit code:** 0
- documented exit codes: none explicitly documented in evals/README.md vs. actual exit paths in code: exits 0 on all checks passing, exits 1 on any check failure or rank-1 rate below threshold
- for validators/gates: can it exit non-zero? yes, when checks fail or rank-1 rate is below floor; does it fail on default branch? no, passes with 86% trigger rank-1 rate
- does the output match what the documentation claims? yes, passes 136 checks with 86% baseline rank-1 rate

- path: `scripts/run-evals.js --min-rank1 80`, language: JavaScript (Node.js CommonJS)
- documented invocation: "node scripts/run-evals.js --min-rank1 80" — evals/README.md:29
- **executed:** yes
- actual command run: `bun scripts/run-evals.js --min-rank1 80`, abridged stdout: `Running skill evals across 25 skills, 25 case files\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: exits 0 on meeting or exceeding minimum rank-1 floor, exits 1 if below floor
- for validators/gates: can it exit non-zero? yes, if trigger rank-1 rate drops below 80%; does it fail on default branch? no, achieves 86%
- does the output match what the documentation claims? yes, enforces routing floor

- path: `scripts/run-evals.js --behavioral test-driven-development --dry-run`, language: JavaScript (Node.js CommonJS)
- documented invocation: "node scripts/run-evals.js --behavioral test-driven-development --dry-run" — evals/README.md:33
- **executed:** yes
- actual command run: `bun scripts/run-evals.js --behavioral test-driven-development --dry-run`, abridged stdout: `[dry-run] eval 1: execution trace in workspace + 1 fixture(s); claude -p --verbose ...\n[dry-run] eval 2: execution trace ...\n[dry-run] eval 3: execution trace ...`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: exits 0 on dry run completion
- does the output match what the documentation claims? yes, prints planned execution trace commands without spending tokens

## Defects — required
- doc-drift — evals/README.md:28 — Documentation instructs running `node scripts/run-evals.js`, but when executed in repositories or parent scopes with `"type": "module"` in `package.json`, Node.js fails with `ReferenceError: require is not defined in ES module scope` because `scripts/run-evals.js` is CommonJS without a package-local `"type": "commonjs"` configuration; runs cleanly under Bun runtime.

## Observations
- Documents the three-tier evaluation architecture separating fast deterministic CI gates (Tier 1 & Tier 2) from token-spending behavioral agent evaluations (Tier 3).
- Defines pressure testing specifically for discipline skills: "Discipline skills also include pressure cases for time pressure, sunk cost, and authority pressure; these verify that the workflow still holds when the prompt argues for skipping it." — evals/README.md:38.

## Context cost
8114 bytes, ~1950 tokens.
