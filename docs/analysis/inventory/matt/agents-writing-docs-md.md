---
package: matt
path: .agents/writing-docs.md
type: agent
bytes: 12688
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/writing-docs.md

## Purpose — required, verbatim
> "Every skill in `engineering/` and `productivity/` has a human-facing **docs page** at `docs/<bucket>/<skill-name>.md`. The docs tree mirrors those two bucket folders under `skills/`. It is published at `https://aihero.dev/skills-<skill-name>`; the URL is always `skills-<skill-name>` regardless of bucket, so the docs path is repo organisation only. The page is not the skill and not a copy of `SKILL.md`. Only these two buckets are promoted; the rest (`misc/`, `in-progress/`, `deprecated/`) ship no docs page." — .agents/writing-docs.md:3 (no explicit purpose statement)

## Design intent — required
Defines the authoring standard, structure, and quality criteria for public documentation pages for promoted skills published on aihero.dev. Aims to relieve user cognitive load by treating pages as nodes in a distributed router. Prescribes a mandatory fixed frame (`What it does`, `When to reach for it`, `Where it fits`), free-form middle sections, evidence-based common questions, and checkable "It's working if" criteria. Enforces house style: state defining constraints in plain prose, use absolute URLs, adopt AI Coding Dictionary vocabulary, avoid runbook step-by-step repetition, and never attribute opinions to individual authors.

## Phase — required
cross-phase

## Inputs — required
`skills/<bucket>/<skill-name>/SKILL.md`, GitHub issues, changelogs, personal wiki, AI Coding Dictionary.

## Outputs — required
`docs/<bucket>/<skill-name>.md`

## Invokes — required
- agent install-block.md — .agents/writing-docs.md:19

## Invoked by — required
- agent .agents/install-block.md — .agents/install-block.md:39
- doc CLAUDE.md — CLAUDE.md:17

## Concepts named — required, verbatim
- `docs page` — .agents/writing-docs.md:3 — defined here
- `cognitive load` — .agents/writing-docs.md:5 — used here
- `fixed frame` — .agents/writing-docs.md:15 — defined here
- `defining constraint` — .agents/writing-docs.md:25 — defined here
- `Invocation mode` — .agents/writing-docs.md:31 — defined here
- `Trigger boundary` — .agents/writing-docs.md:32 — defined here
- `leading word` — .agents/writing-docs.md:42 — defined here
- `chain step` — .agents/writing-docs.md:66 — defined here
- `run-once setup` — .agents/writing-docs.md:66 — defined here
- `periodic maintenance` — .agents/writing-docs.md:66 — defined here
- `reach-for-it-anytime standalone` — .agents/writing-docs.md:66 — defined here
- `AI Coding Dictionary` — .agents/writing-docs.md:77 — used here

## Structure
- # Writing docs pages — .agents/writing-docs.md:1
- ## Page structure — .agents/writing-docs.md:13
- ## What it does — .agents/writing-docs.md:23
- ## When to reach for it — .agents/writing-docs.md:27
- ## Prerequisites — .agents/writing-docs.md:34
- ## <free-form middle> — .agents/writing-docs.md:38
- ## Common questions — .agents/writing-docs.md:44
- ## It's working if — .agents/writing-docs.md:58
- ## Where it fits — .agents/writing-docs.md:61
- ## Conventions — .agents/writing-docs.md:72
- ## Done when — .agents/writing-docs.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Treats documentation pages as an architectural router layer designed to lower human cognitive load. Establishes the "defining constraint" as the single most critical sentence explaining how a skill diverges from obvious defaults. References `ask-matt` as the root router map.

## Context cost
12688 bytes, ~2800 tokens (15468 bytes including invoked install-block.md).
