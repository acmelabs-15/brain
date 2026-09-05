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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/ask-matt/SKILL.md

## Purpose — required, verbatim
> "Ask which skill or flow fits your situation. A router over the skills in this repo." — skills/engineering/ask-matt/SKILL.md:3

## Design intent — required
Functions as the primary router and navigation topology across the skills catalog. Classifies workflows into a main flow (idea -> grilling -> prototype -> spec -> tickets -> implement -> review -> ship), two on-ramps (triage for incoming issues, diagnosing-bugs for regressions, wayfinder for foggy efforts), codebase health maintenance, underlying domain/codebase vocabulary layers, and standalone tools. Establishes context hygiene rules advising unbroken context across early phases and deliberate transitions at phase boundaries.

## Phase — required
cross-phase

## Inputs — required
- User query describing project status, task requirements, or uncertainty about which skill or workflow to choose

## Outputs — required
- Recommended sequence of skills, branching criteria, context management instructions, and operational boundaries

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
- skill codebase-design — skills/engineering/ask-matt/SKILL.md:52
- skill domain-modeling — skills/engineering/ask-matt/SKILL.md:58
- reference PHASE-BOUNDARIES.md — skills/engineering/ask-matt/SKILL.md:71
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
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:22

## Concepts named — required, verbatim
- `ask-matt` — skills/engineering/ask-matt/SKILL.md:2 — defined here
- `router` — skills/engineering/ask-matt/SKILL.md:3 — defined here
- `disable-model-invocation` — skills/engineering/ask-matt/SKILL.md:4 — defined here
- `flow` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `main flow` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `on-ramps` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `vocabulary layer` — skills/engineering/ask-matt/SKILL.md:11 — defined here
- `working directory` — skills/engineering/ask-matt/SKILL.md:17 — used here
- `CONTEXT.md` — skills/engineering/ask-matt/SKILL.md:17 — used here
- `ADRs` — skills/engineering/ask-matt/SKILL.md:17 — used here
- `tracer-bullet tickets` — skills/engineering/ask-matt/SKILL.md:23 — defined here
- `blocking edges` — skills/engineering/ask-matt/SKILL.md:23 — defined here
- `Standards` — skills/engineering/ask-matt/SKILL.md:26 — used here
- `Spec` — skills/engineering/ask-matt/SKILL.md:26 — used here
- `Context hygiene` — skills/engineering/ask-matt/SKILL.md:28 — defined here
- `smart zone` — skills/engineering/ask-matt/SKILL.md:32 — used here
- `agent-ready issues` — skills/engineering/ask-matt/SKILL.md:38 — defined here
- `tight feedback loop` — skills/engineering/ask-matt/SKILL.md:42 — defined here
- `shared map` — skills/engineering/ask-matt/SKILL.md:44 — defined here
- `decision tickets` — skills/engineering/ask-matt/SKILL.md:44 — defined here
- `deepening opportunities` — skills/engineering/ask-matt/SKILL.md:52 — defined here
- `deep-module vocabulary` — skills/engineering/ask-matt/SKILL.md:59 — defined here
- `Phase boundaries` — skills/engineering/ask-matt/SKILL.md:61 — defined here
- `Continue` — skills/engineering/ask-matt/SKILL.md:65 — used here
- `/clear` — skills/engineering/ask-matt/SKILL.md:66 — used here
- `/handoff` — skills/engineering/ask-matt/SKILL.md:67 — used here
- `Subagent` — skills/engineering/ask-matt/SKILL.md:68 — used here
- `/compact` — skills/engineering/ask-matt/SKILL.md:69 — used here
- `primary-source cost` — skills/engineering/ask-matt/SKILL.md:71 — defined here
- `interview primitive` — skills/engineering/ask-matt/SKILL.md:78 — defined here
- `frontier` — skills/engineering/ask-matt/SKILL.md:78 — used here
- `background agent` — skills/engineering/ask-matt/SKILL.md:81 — defined here
- `primary sources` — skills/engineering/ask-matt/SKILL.md:81 — used here

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
- Defines `disable-model-invocation: true` in YAML frontmatter, enforcing that the skill is strictly human-invoked to serve as a conversational advisor without agent recursion.
- Recommends keeping grilling, spec, and ticket generation in a single unbroken context window (~150k token smart zone) before clearing context to implement each self-contained ticket.
- Connects directly to `PHASE-BOUNDARIES.md` for context transition management.

## Context cost
11417 bytes (~2854 tokens). Central routing skill specification.
