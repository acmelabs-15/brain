---
package: addy
path: CONTRIBUTING.md
type: doc
bytes: 7179
unit: inv-addy-4
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# CONTRIBUTING.md

## Purpose — required, verbatim
> "This file is the authoritative rulebook; the onboarding guide is the map." — CONTRIBUTING.md:5

## Design intent — required
Establishes the governance, quality bar, and contribution workflow for `agent-skills`, defining mandatory requirements for new skills (YAML frontmatter, standard section anatomy, and eval cases), modification guidelines, testing protocols for the session-start hook, and repository scoping rules that forbid copying repo-level configuration into user projects. Without this document, contributions would introduce inconsistent skill formatting, missing evaluations, duplicated workflows, and broken lifecycle hooks.

## Phase — required
none

## Inputs — required
- Proposed new skill or modification to existing skills — CONTRIBUTING.md:7, 63
- Open PR listings: `gh pr list --state open` to avoid duplicates — CONTRIBUTING.md:14

## Outputs — required
- Pull requests adding `SKILL.md` in `skills/` (CONTRIBUTING.md:22-23) and eval case files at `evals/cases/<skill-name>.json` — CONTRIBUTING.md:42
- Issue reports using the `Skill gap` issue form — CONTRIBUTING.md:116

## Invokes — required
- doc docs/developer-onboarding.md — CONTRIBUTING.md:5
- doc docs/skill-anatomy.md — CONTRIBUTING.md:5
- doc evals/README.md — CONTRIBUTING.md:5
- doc README.md — CONTRIBUTING.md:13
- script hooks/session-start.sh — CONTRIBUTING.md:79
- script hooks/session-start-test.sh — CONTRIBUTING.md:79
- skill skills/using-agent-skills/SKILL.md — CONTRIBUTING.md:84

## Invoked by — required
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:5
- doc README.md — README.md:410
- doc .claude/rules/skills-contributing.md — .claude/rules/skills-contributing.md:15

## Concepts named — required, verbatim
- `Skill Quality Bar` — CONTRIBUTING.md:27 — defined here
- `Specific` — CONTRIBUTING.md:31 — defined here
- `Verifiable` — CONTRIBUTING.md:32 — defined here
- `Battle-tested` — CONTRIBUTING.md:33 — defined here
- `Minimal` — CONTRIBUTING.md:34 — defined here
- `Common Rationalizations` — CONTRIBUTING.md:49 — used here
- `Red Flags` — CONTRIBUTING.md:50 — used here
- `Verification` — CONTRIBUTING.md:51 — used here
- `Testing Hooks` — CONTRIBUTING.md:77 — defined here
- `Skill gap` — CONTRIBUTING.md:116 — defined here

## Structure
- Contributing to Agent Skills — CONTRIBUTING.md:1
- Adding a New Skill — CONTRIBUTING.md:7
- Before proposing a new skill — CONTRIBUTING.md:9
- Creating the skill — CONTRIBUTING.md:20
- Skill Quality Bar — CONTRIBUTING.md:27
- Structure — CONTRIBUTING.md:36
- What Not to Do — CONTRIBUTING.md:55
- Modifying Existing Skills — CONTRIBUTING.md:63
- Repo-scoped files — CONTRIBUTING.md:69
- Translations — CONTRIBUTING.md:73
- Testing Hooks — CONTRIBUTING.md:77
- Reproducing the no-jq fallback — CONTRIBUTING.md:92
- Reporting Issues — CONTRIBUTING.md:106
- License — CONTRIBUTING.md:121

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly forbids translations to avoid maintenance debt (line 74), warns against copying repository-level `AGENTS.md` and `CLAUDE.md` to user projects (line 71), and documents exact local reproduction of the `jq` fallback for `hooks/session-start-test.sh` (lines 92-105).

## Context cost
7,179 bytes (approx. 1,750 tokens) for this documentation file. References developer onboarding, skill anatomy, eval framework, and hook scripts.
