---
package: matt
path: skills/engineering/ask-matt/SKILL.md
type: skill
bytes: 11417
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/ask-matt/SKILL.md

## Purpose — required, verbatim
> "Ask which skill or flow fits your situation. A router over the skills in this repo." — skills/engineering/ask-matt/SKILL.md:3

## Design intent — required
Central interactive workflow router for the `mattpocock/skills` repository. Provides a comprehensive mental map of all user-invoked and model-invoked engineering and productivity skills. Formulates the canonical end-to-end development lifecycle ("main flow": `/grill-with-docs` → `/prototype` detour → `/to-spec` → `/to-tickets` → `/implement` driving `/tdd` and `/code-review`), details operational on-ramps (`/triage`, `/diagnosing-bugs`, `/wayfinder`), describes architectural health surveys (`/improve-codebase-architecture`), grounds underlying domain/design vocabularies (`/domain-modeling`, `/codebase-design`), and links standalone tools. Enforces context hygiene across multi-session builds and phase transitions.

## Phase — required
cross-phase

## Inputs — required
User descriptions of their current task, project lifecycle stage, architectural dilemmas, or operational challenges.

## Outputs — required
Targeted routing recommendations, execution plans for sequential skill invocations, or context management instructions.

## Invokes — required
- skill grill-with-docs — skills/engineering/ask-matt/SKILL.md:17
- skill grill-me — skills/engineering/ask-matt/SKILL.md:17
- skill grilling — skills/engineering/ask-matt/SKILL.md:17
- skill handoff — skills/engineering/ask-matt/SKILL.md:18
- skill prototype — skills/engineering/ask-matt/SKILL.md:20
- skill to-spec — skills/engineering/ask-matt/SKILL.md:23
- skill to-tickets — skills/engineering/ask-matt/SKILL.md:23
- skill implement — skills/engineering/ask-matt/SKILL.md:23
- skill tdd — skills/engineering/ask-matt/SKILL.md:26
- skill code-review — skills/engineering/ask-matt/SKILL.md:26
- skill triage — skills/engineering/ask-matt/SKILL.md:38
- skill diagnosing-bugs — skills/engineering/ask-matt/SKILL.md:42
- skill improve-codebase-architecture — skills/engineering/ask-matt/SKILL.md:42
- skill wayfinder — skills/engineering/ask-matt/SKILL.md:44
- skill domain-modeling — skills/engineering/ask-matt/SKILL.md:58
- skill codebase-design — skills/engineering/ask-matt/SKILL.md:59
- doc PHASE-BOUNDARIES.md — skills/engineering/ask-matt/SKILL.md:71
- skill resolving-merge-conflicts — skills/engineering/ask-matt/SKILL.md:79
- skill research — skills/engineering/ask-matt/SKILL.md:81
- skill to-questionnaire — skills/engineering/ask-matt/SKILL.md:82
- skill wizard — skills/engineering/ask-matt/SKILL.md:83
- skill wait-what — skills/engineering/ask-matt/SKILL.md:84
- skill teach — skills/engineering/ask-matt/SKILL.md:85
- skill writing-for-agents — skills/engineering/ask-matt/SKILL.md:86
- skill setup-matt-pocock-skills — skills/engineering/ask-matt/SKILL.md:90

## Invoked by — required
- doc README.md — README.md:194
- doc CLAUDE.md — CLAUDE.md:21
- doc docs/engineering/ask-matt.md — docs/engineering/ask-matt.md:3

## Concepts named — required, verbatim
- `flow` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `main flow` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `on-ramps` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `tracer-bullet tickets` — skills/engineering/ask-matt/SKILL.md:23 — defined here
- `blocking edges` — skills/engineering/ask-matt/SKILL.md:23 — used here
- `two-axis review` — skills/engineering/ask-matt/SKILL.md:26 — defined here
- `smart zone` — skills/engineering/ask-matt/SKILL.md:32 — used here
- `tight feedback loop` — skills/engineering/ask-matt/SKILL.md:42 — defined here
- `decision tickets` — skills/engineering/ask-matt/SKILL.md:44 — defined here
- `deepening opportunities` — skills/engineering/ask-matt/SKILL.md:52 — defined here
- `Phase boundaries` — skills/engineering/ask-matt/SKILL.md:61 — defined here
- `portability` — skills/engineering/ask-matt/SKILL.md:67 — defined here

## Structure
- `# Ask Matt` — skills/engineering/ask-matt/SKILL.md:7
- `## The main flow: idea → ship` — skills/engineering/ask-matt/SKILL.md:13
- `### Context hygiene` — skills/engineering/ask-matt/SKILL.md:28
- `## On-ramps` — skills/engineering/ask-matt/SKILL.md:34
- `## Codebase health` — skills/engineering/ask-matt/SKILL.md:48
- `## Vocabulary underneath` — skills/engineering/ask-matt/SKILL.md:54
- `## Phase boundaries` — skills/engineering/ask-matt/SKILL.md:61
- `## Standalone` — skills/engineering/ask-matt/SKILL.md:73
- `## Precondition` — skills/engineering/ask-matt/SKILL.md:88

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Central orchestrator defining repository-wide lifecycle topology. Distinguishes between user-invoked orchestrators (which never invoke other user-invoked skills) and model-invoked capabilities. Emphasizes maintaining unbroken context across exploration, spec, and ticketing, while clearing context between individual ticket implementation runs.

## Context cost
11417 bytes, 91 lines, approximately 2500 tokens.
