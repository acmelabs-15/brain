---
package: matt
path: external/wait-what.md
type: doc
bytes: 329864
unit: inv-matt-31
deprecated: false
aliases: []
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/wait-what.md

## Purpose — required, verbatim
> "Ask the agent to say that again, in plain English." — external/wait-what.md:24

## Design intent — required
A minimal, three-line conversation repair primitive that re-pitches confusing or overly verbose agent messages. Anchored on the word "wait" (signaling a listener comprehension breakdown rather than an instruction about output brevity), it prompts the model to back up, restore omitted context premises, and express ideas in plain ASD-STE100 Simplified Technical English utilizing project nouns from `CONTEXT.md`.

## Phase — required
matt:Productivity Skills

## Inputs — required
Prior confusing messages in the current conversation, and project domain vocabulary defined in `CONTEXT.md` (and optional `CONTEXT-MAP.md`).

## Outputs — required
Re-pitched, plain English message adding missing context and employing project ubiquitous language.

## Invokes — required
- skill grill-with-docs — external/wait-what.md:29
- skill domain-modeling — external/wait-what.md:45
- skill ask-matt — external/wait-what.md:45

## Invoked by — required
none

## Concepts named — required, verbatim
- `wait-what` — external/wait-what.md:25 — defined here
- `agent` — external/wait-what.md:25 — used here
- `CONTEXT.md` — external/wait-what.md:25 — used here
- `model` — external/wait-what.md:26 — used here
- `leading word` — external/wait-what.md:31 — defined here
- `re-pitch` — external/wait-what.md:33 — defined here
- `CLAUDE.md` — external/wait-what.md:35 — used here
- `ASD-STE100 Simplified Technical English` — external/wait-what.md:35 — used here
- `ubiquitous language` — external/wait-what.md:35 — used here
- `tokens` — external/wait-what.md:35 — used here
- `CONTEXT-MAP.md` — external/wait-what.md:36 — used here
- `grilling` — external/wait-what.md:45 — used here

## Structure
- # The /wait-what Skill — external/wait-what.md:24
- ## What it does — external/wait-what.md:24
- ## When to reach for it — external/wait-what.md:27
- ## The name is the mechanism — external/wait-what.md:30
- ## It plugs into the language you already have — external/wait-what.md:34
- ## It's working if — external/wait-what.md:37
- ## Where it fits — external/wait-what.md:44
- ## You have the skill. Now build the workflow around it. — external/wait-what.md:45
- ## Install the skills — external/wait-what.md:45
- ## Related reading — external/wait-what.md:45

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates that skill size directly impacts model verbosity: lengthy prompts against verbosity inadvertently expand context and prompt verbosity. Focuses on the psychological distinction between instructing output brevity ("/tldr") and signaling comprehension failure ("wait"), demonstrating that signaling a listener breakdown causes the model to restore necessary omitted context.

## Context cost
329864 bytes, ~65000 tokens (HTML snapshot with inline hydration bundle).
