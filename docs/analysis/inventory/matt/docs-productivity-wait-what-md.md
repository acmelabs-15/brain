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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/wait-what.md

## Purpose — required, verbatim
> "`wait-what` is what you type when a message didn't land. The [agent](https://www.aihero.dev/ai-coding-dictionary/agent) then re-pitches what it just said. It adds the context you were missing, writes in plain English, and uses the vocabulary from your project's `CONTEXT.md`." — docs/productivity/wait-what.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-wait-what`) for the `wait-what` user-invoked productivity skill. Explains how a three-line skill using a single leading word ("wait") corrects agent verbosity, invented jargon, and stacked acronyms by signaling the user's comprehension failure rather than demanding output brevity (which leads models to clip words and write unhelpful telegrams). Grounds the re-pitch in ASD-STE100 Simplified Technical English and project-specific nouns from `CONTEXT.md` (optionally navigated via `CONTEXT-MAP.md`), restoring clarity and missed premises after the fact.

## Phase — required
matt:Productivity

## Inputs — required
User invocation via `/wait-what` in an active conversation where comprehension failed; prior conversational context; global `CLAUDE.md` and project `CONTEXT.md` (or `CONTEXT-MAP.md`).

## Outputs — required
A re-pitched message from the agent that is shorter and clearer, adding missing premises, written in plain English, using project vocabulary from `CONTEXT.md`.

## Invokes — required
- skill grill-with-docs — docs/productivity/wait-what.md:11
- skill domain-modeling — docs/productivity/wait-what.md:36
- skill ask-matt — docs/productivity/wait-what.md:36

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `wait-what` — docs/productivity/wait-what.md:3 — defined here
- `agent` — docs/productivity/wait-what.md:3 — used here
- `CONTEXT.md` — docs/productivity/wait-what.md:3 — used here
- `model` — docs/productivity/wait-what.md:5 — used here
- `leading word` — docs/productivity/wait-what.md:5 — defined here
- `grill-with-docs` — docs/productivity/wait-what.md:11 — used here
- `CLAUDE.md` — docs/productivity/wait-what.md:23 — used here
- `ASD-STE100 Simplified Technical English` — docs/productivity/wait-what.md:23 — used here
- `ubiquitous language` — docs/productivity/wait-what.md:23 — used here
- `tokens` — docs/productivity/wait-what.md:23 — used here
- `CONTEXT-MAP.md` — docs/productivity/wait-what.md:25 — used here
- `grilling` — docs/productivity/wait-what.md:36 — used here
- `domain-modeling` — docs/productivity/wait-what.md:36 — used here
- `ask-matt` — docs/productivity/wait-what.md:36 — used here

## Structure
- What it does — docs/productivity/wait-what.md:1
- When to reach for it — docs/productivity/wait-what.md:7
- The name is the mechanism — docs/productivity/wait-what.md:13
- It plugs into the language you already have — docs/productivity/wait-what.md:21
- It's working if — docs/productivity/wait-what.md:27
- Where it fits — docs/productivity/wait-what.md:34

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Articulates a fundamental insight into prompt engineering and agent interaction design: instructions targeting output attributes (e.g. `/tldr`, `/no-fluff`, "be brief") cause models to truncate information and adopt a terse, unhelpful register, whereas naming the user's cognitive state ("wait, you lost me") prompts the agent to provide missing context and premises. Highlights the brevity mechanism: a three-line skill is deliberately kept minimal because verbosity-reduction instructions that are long cause models to respond to instruction volume rather than the plea. Contrasts post-hoc message repair (`wait-what`) with upfront prevention (`grill-with-docs` and `domain-modeling`).

## Context cost
3528 bytes, approximately 850 tokens. Standalone doc; loads no secondary references.
