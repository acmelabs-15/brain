---
package: matt
path: docs/productivity/wait-what.md
type: doc
bytes: 3528
unit: inv-matt-9
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/wait-what.md

## Purpose — required, verbatim
> "`wait-what` is what you type when a message didn't land. The [agent](https://www.aihero.dev/ai-coding-dictionary/agent) then re-pitches what it just said. It adds the context you were missing, writes in plain English, and uses the vocabulary from your project's `CONTEXT.md`." — docs/productivity/wait-what.md:3

## Design intent — required
A minimal, three-line conversation repair primitive that re-pitches confusing or overly verbose agent messages. Anchored on the word "wait" (signaling a listener comprehension breakdown rather than an instruction about output brevity), it prompts the model to back up, restore omitted context premises, and express ideas in plain ASD-STE100 Simplified Technical English utilizing project nouns from `CONTEXT.md`.

## Phase — required
matt:productivity

## Inputs — required
Prior confusing messages in the current conversation, and project domain vocabulary defined in `CONTEXT.md` (and optional `CONTEXT-MAP.md`).

## Outputs — required
Re-pitched, plain English message adding missing context and employing project ubiquitous language.

## Invokes — required
- doc grill-with-docs — docs/productivity/wait-what.md:11
- doc domain-modeling — docs/productivity/wait-what.md:36
- doc ask-matt — docs/productivity/wait-what.md:36

## Invoked by — required
- doc wait-what — docs/productivity/teach.md:17

## Concepts named — required, verbatim
- `agent` — docs/productivity/wait-what.md:3 — used here
- `wait-what` — docs/productivity/wait-what.md:3 — defined here
- `model` — docs/productivity/wait-what.md:5 — used here
- `leading word` — docs/productivity/wait-what.md:5 — defined here
- `ASD-STE100 Simplified Technical English` — docs/productivity/wait-what.md:23 — used here
- `ubiquitous language` — docs/productivity/wait-what.md:23 — used here
- `tokens` — docs/productivity/wait-what.md:23 — used here
- `grilling` — docs/productivity/wait-what.md:36 — used here

## Structure
- ## What it does — docs/productivity/wait-what.md:1
- ## When to reach for it — docs/productivity/wait-what.md:7
- ## The name is the mechanism — docs/productivity/wait-what.md:13
- ## It plugs into the language you already have — docs/productivity/wait-what.md:21
- ## It's working if — docs/productivity/wait-what.md:27
- ## Where it fits — docs/productivity/wait-what.md:34

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates how skill size directly affects model verbosity: extensive instructions against verbosity ironically induce verbose behavior by expanding prompt context. Demonstrates how naming the listener's state ("wait, you lost me") yields better explanatory depth than constraining output format ("/tldr", "be concise").

## Context cost
3528 bytes (~882 tokens).
