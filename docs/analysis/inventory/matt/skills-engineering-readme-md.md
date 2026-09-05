---
package: matt
path: skills/engineering/README.md
type: skill
bytes: 3840
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/README.md, sha256: 713826c94f7858c28067238ce6c7021783e4da0dc0beef58a2af72cf75268fda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/README.md

## Purpose — required, verbatim
> "Skills I use daily for code work." — skills/engineering/README.md:3

## Design intent — required
Catalogues and partitions all engineering skills into user-invoked and model-invoked categories. Establishes the harness-level conventions governing invocation access across Claude Code (`disable-model-invocation: true`) and Codex (`policy.allow_implicit_invocation: false`), providing a central navigation index and summary for each engineering skill in the repository.

## Phase — required
matt:engineering

## Inputs — required
Engineering skills catalog in `skills/engineering/`.

## Outputs — required
Directory navigation index and categorization of engineering skills.

## Invokes — required
- skill ask-matt — skills/engineering/README.md:9
- skill grill-with-docs — skills/engineering/README.md:10
- skill triage — skills/engineering/README.md:11
- skill improve-codebase-architecture — skills/engineering/README.md:12
- skill setup-matt-pocock-skills — skills/engineering/README.md:13
- skill to-spec — skills/engineering/README.md:14
- skill to-tickets — skills/engineering/README.md:15
- skill implement — skills/engineering/README.md:16
- skill wayfinder — skills/engineering/README.md:17
- skill prototype — skills/engineering/README.md:23
- skill diagnosing-bugs — skills/engineering/README.md:25
- skill research — skills/engineering/README.md:26
- skill tdd — skills/engineering/README.md:27
- skill domain-modeling — skills/engineering/README.md:28
- skill codebase-design — skills/engineering/README.md:29
- skill code-review — skills/engineering/README.md:30
- skill resolving-merge-conflicts — skills/engineering/README.md:31
- skill wizard — skills/engineering/README.md:32

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Engineering` — skills/engineering/README.md:1 — defined here
- `User-invoked` — skills/engineering/README.md:5 — defined here
- `disable-model-invocation` — skills/engineering/README.md:7 — used here
- `allow_implicit_invocation` — skills/engineering/README.md:7 — used here
- `ask-matt` — skills/engineering/README.md:9 — used here
- `grill-with-docs` — skills/engineering/README.md:10 — used here
- `triage` — skills/engineering/README.md:11 — used here
- `improve-codebase-architecture` — skills/engineering/README.md:12 — used here
- `setup-matt-pocock-skills` — skills/engineering/README.md:13 — used here
- `to-spec` — skills/engineering/README.md:14 — used here
- `to-tickets` — skills/engineering/README.md:15 — used here
- `implement` — skills/engineering/README.md:16 — used here
- `wayfinder` — skills/engineering/README.md:17 — used here
- `Model-invoked` — skills/engineering/README.md:19 — defined here
- `prototype` — skills/engineering/README.md:23 — used here
- `diagnosing-bugs` — skills/engineering/README.md:25 — used here
- `research` — skills/engineering/README.md:26 — used here
- `tdd` — skills/engineering/README.md:27 — used here
- `domain-modeling` — skills/engineering/README.md:28 — used here
- `codebase-design` — skills/engineering/README.md:29 — used here
- `code-review` — skills/engineering/README.md:30 — used here
- `resolving-merge-conflicts` — skills/engineering/README.md:31 — used here
- `wizard` — skills/engineering/README.md:32 — used here

## Structure
- `# Engineering` — skills/engineering/README.md:1
- `## User-invoked` — skills/engineering/README.md:5
- `## Model-invoked` — skills/engineering/README.md:19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · skills/engineering/README.md:1: Directory README not linked from root README or other documentation files.

## Observations
Categorizes skills into two distinct invocation tiers: 9 user-invoked skills (explicit invocation required) and 9 model-invoked skills (autonomous trigger phrasing). Documents both Claude Code and Codex mechanisms for controlling model invocation.

## Context cost
3,840 bytes (~960 tokens). Navigation and categorization directory overview for engineering skills.
