---
package: addy
path: CONTRIBUTING.md
type: doc
bytes: 7179
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CONTRIBUTING.md

## Purpose — required, verbatim
> "This project is a collection of production-grade engineering skills for AI coding agents." — CONTRIBUTING.md:3

## Design intent — required
Acts as the authoritative rulebook and developer guide for contributing skills and maintenance changes to the `agent-skills` repository. Establishes standards for skill quality (Specific, Verifiable, Battle-tested, Minimal), structural anatomy, eval test requirements (positive/negative triggers, behavioral and execution evals), hook regression testing, issue reporting, and translation policy.

## Phase — required
cross-phase

## Inputs — required
- Gap justifications and catalog search: "Search the catalog." — CONTRIBUTING.md:13, "Check open PRs." — CONTRIBUTING.md:14, "Justify the gap in your PR description." — CONTRIBUTING.md:16
- Eval case definitions: "An eval case file at `evals/cases/<skill-name>.json` — at least 3 positive triggers, 2 negative triggers (with `owner` where possible), and 1 behavioral eval." — CONTRIBUTING.md:42

## Outputs — required
none

## Invokes — required
- doc docs/developer-onboarding.md — CONTRIBUTING.md:5
- doc docs/skill-anatomy.md — CONTRIBUTING.md:5
- doc evals/README.md — CONTRIBUTING.md:5
- doc README.md — CONTRIBUTING.md:13
- script hooks/session-start.sh — CONTRIBUTING.md:79
- script hooks/session-start-test.sh — CONTRIBUTING.md:79
- skill using-agent-skills — CONTRIBUTING.md:79

## Invoked by — required
- doc README.md — README.md:410
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:5

## Concepts named — required, verbatim
- `developer-onboarding.md` — CONTRIBUTING.md:5 — used here
- `skill-anatomy.md` — CONTRIBUTING.md:5 — used here
- `Specific` — CONTRIBUTING.md:31 — defined here
- `Verifiable` — CONTRIBUTING.md:32 — defined here
- `Battle-tested` — CONTRIBUTING.md:33 — defined here
- `Minimal` — CONTRIBUTING.md:34 — defined here
- `positive triggers` — CONTRIBUTING.md:42 — defined here
- `negative triggers` — CONTRIBUTING.md:42 — defined here
- `behavioral eval` — CONTRIBUTING.md:42 — defined here
- `execution evals` — CONTRIBUTING.md:42 — defined here
- `Common Rationalizations` — CONTRIBUTING.md:49 — defined here
- `Red Flags` — CONTRIBUTING.md:50 — defined here
- `session-start hook` — CONTRIBUTING.md:79 — used here
- `using-agent-skills` — CONTRIBUTING.md:79 — used here
- `no-jq fallback` — CONTRIBUTING.md:92 — defined here
- `Skill gap` — CONTRIBUTING.md:116 — defined here

## Structure
- `# Contributing to Agent Skills` — CONTRIBUTING.md:1
- `## Adding a New Skill` — CONTRIBUTING.md:7
- `### Before proposing a new skill` — CONTRIBUTING.md:9
- `### Creating the skill` — CONTRIBUTING.md:20
- `### Skill Quality Bar` — CONTRIBUTING.md:27
- `### Structure` — CONTRIBUTING.md:36
- `### What Not to Do` — CONTRIBUTING.md:55
- `## Modifying Existing Skills` — CONTRIBUTING.md:63
- `## Repo-scoped files` — CONTRIBUTING.md:69
- `## Translations` — CONTRIBUTING.md:73
- `## Testing Hooks` — CONTRIBUTING.md:77
- `### Reproducing the no-jq fallback` — CONTRIBUTING.md:92
- `## Reporting Issues` — CONTRIBUTING.md:106
- `## License` — CONTRIBUTING.md:121

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly prohibits documentation and skill translations to avoid long-term maintenance drift (line 75). Clarifies that repo-scoped agent configurations (`AGENTS.md`, `CLAUDE.md`) configure work on the repository itself and should not be copied into user projects (lines 71-72). Addresses Phase 1V findings by capturing `Common Rationalizations` (line 49), `Red Flags` (line 50), `positive triggers` (line 42), `negative triggers` (line 42), `behavioral eval` (line 42), `execution evals` (line 42), and `no-jq fallback` (line 92).

## Context cost
7179 bytes, approximately 1800 tokens.
