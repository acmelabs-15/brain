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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/README.md

## Purpose — required, verbatim
> "Skills I use daily for code work." — skills/engineering/README.md:3

## Design intent — required
Structural directory index and architectural catalog for the engineering skills in the `matt` package. Categorizes the entire suite along the invocation boundary into User-invoked (orchestrators reachable only through explicit user typing via `disable-model-invocation: true` in Claude Code and `policy.allow_implicit_invocation: false` in Codex `agents/openai.yaml`) versus Model-invoked (autonomous primitives with rich trigger phrasing). Provides concise descriptions and direct pointers to each skill's `SKILL.md`. Without this index, developers and automated agents would lack an authoritative overview of engineering skill capabilities and their respective invocation models.

## Phase — required
cross-phase

## Inputs — required
The complete suite of 18 engineering skills across user-invoked and model-invoked categories.

## Outputs — required
Taxonomic categorization and navigation catalog for engineering skills.

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
- `User-invoked` — skills/engineering/README.md:5 — defined here
- `disable-model-invocation` — skills/engineering/README.md:7 — used here
- `allow_implicit_invocation` — skills/engineering/README.md:7 — used here
- `Model-invoked` — skills/engineering/README.md:19 — defined here

## Structure
- Engineering — skills/engineering/README.md:1
- User-invoked — skills/engineering/README.md:5
- Model-invoked — skills/engineering/README.md:19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly formalizes the two-tier execution model: 9 user-invoked workflow orchestrators and 9 model-invoked primitives.

## Context cost
3840 bytes, 33 lines, ~850 tokens. Navigational index referencing all 18 engineering skills.
