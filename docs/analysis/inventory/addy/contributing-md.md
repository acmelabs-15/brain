---
package: addy
path: CONTRIBUTING.md
type: doc
bytes: 7179
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# CONTRIBUTING.md

## Purpose — required, verbatim
> "Thanks for your interest in contributing! This project is a collection of production-grade engineering skills for AI coding agents." — CONTRIBUTING.md:3

## Design intent — required
Establishes the governance, contribution workflows, quality gates, and file organization rules for the repository, requiring concrete verification evals for new skills and testing hooks to ensure platform stability.

## Phase — required
`cross-phase`

## Inputs — required
- Contribution proposals, bug reports, and `Skill gap` submissions — CONTRIBUTING.md:116

## Outputs — required
- New and updated skills under `skills/` — CONTRIBUTING.md:22
- Eval cases under `evals/cases/` — CONTRIBUTING.md:42

## Invokes — required
- doc developer-onboarding — CONTRIBUTING.md:5
- doc skill-anatomy — CONTRIBUTING.md:5
- doc evals/README — CONTRIBUTING.md:5
- script hooks/session-start-test.sh — CONTRIBUTING.md:79

## Invoked by — required
none

## Concepts named — required, verbatim
- `Adding a New Skill` — CONTRIBUTING.md:7 — defined here
- `Skill Quality Bar` — CONTRIBUTING.md:27 — defined here
- `eval case file` — CONTRIBUTING.md:42 — defined here
- `standard anatomy` — CONTRIBUTING.md:44 — defined here
- `session-start hook` — CONTRIBUTING.md:79 — defined here
- `using-agent-skills` — CONTRIBUTING.md:79 — used here
- `Skill gap` — CONTRIBUTING.md:116 — defined here

## Structure
- # Contributing to Agent Skills
- ## Adding a New Skill
- ### Before proposing a new skill
- ### Creating the skill
- ### Skill Quality Bar
- ### Structure
- ### What Not to Do
- ## Modifying Existing Skills
- ## Repo-scoped files
- ## Translations
- ## Testing Hooks
- ### Reproducing the no-jq fallback
- ## Reporting Issues
- ## License

## Scripts — required if type is script or the skill ships scripts
For documented test script `hooks/session-start-test.sh`:
- path: `hooks/session-start-test.sh`, language: bash, lines: 47
- documented invocation: "bash hooks/session-start-test.sh" — CONTRIBUTING.md:87
- **executed:** yes
- actual command run: `bash hooks/session-start-test.sh` (in `sources/addy/`), stdout: `Error: expected IMPORTANT priority, got undefined`, **actual exit code**: 1
- documented exit codes: "The script exits non-zero on any assertion failure." — CONTRIBUTING.md:90 vs actual exit paths in code (Node eval assertion throws and exits non-zero)
- for validators/gates: exits non-zero on failure; fails on source repo's own default branch due to missing `priority` in `hooks/session-start.sh`
- does the output match what the documentation claims? no; claims "session-start JSON payload OK" — CONTRIBUTING.md:90, but actual output is an unhandled assertion error

## Defects — required
- `script-bug` · `hooks/session-start-test.sh:1` · Test fails on default branch with exit 1 because `hooks/session-start.sh` does not output priority field expected by the test.
- `cross-file-contradiction` · `CONTRIBUTING.md:71` · Forbids directing users to copy `AGENTS.md` into external projects, contradicting `docs/antigravity-setup.md:107` which instructs users to copy or link `AGENTS.md`.

## Observations
Prohibits translations of docs and skills to prevent maintenance drift and translation desynchronization (line 75). Requires CI-enforced evals for every skill (at least 3 positive triggers, 2 negative triggers, and 1 behavioral eval).

## Context cost
7179 bytes (~1800 tokens). Comprehensive developer and contributor guidelines.
