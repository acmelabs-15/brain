---
package: matt
path: external/ask-matt.md
type: doc
bytes: 355633
unit: inv-matt-10
deprecated: false
aliases: []
memo_inputs:
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/ask-matt.md

## Purpose — required, verbatim
> "Find out which skill to use for the situation you are in." — external/ask-matt.md:24

## Design intent — required
Acts as the central conversational router and navigation compass for the skills repository. Instead of forcing users to guess which skill fits their situation or memorizing flat lists, it diagnoses the user's dilemma (e.g. unstarted idea, inbound bug reports, long session) and recommends the specific skill sequence, the branch points where human decisions belong, and the appropriate context management strategy (clear, compact, or handoff).

## Phase — required
matt:Getting Started

## Inputs — required
User's conversational description of their current engineering situation or development dilemma (e.g. an idea they cannot start, arriving bug reports, or a long-running session).

## Outputs — required
Recommendations naming the appropriate skill or skill sequence, decision branch points, and context management guidance. Does not produce code artifacts or execute skills directly.

## Invokes — required
- skill setup-matt-pocock-skills — external/ask-matt.md:32
- skill grill-with-docs — external/ask-matt.md:69
- skill triage — external/ask-matt.md:69
- skill to-spec — external/ask-matt.md:32
- skill to-tickets — external/ask-matt.md:32
- skill implement — external/ask-matt.md:32
- skill grill-me — external/ask-matt.md:29
- skill wayfinder — external/ask-matt.md:29
- skill handoff — external/ask-matt.md:43

## Invoked by — required
none

## Concepts named — required, verbatim
- `flow` — external/ask-matt.md:34 — defined here
- `The main flow` — external/ask-matt.md:36 — defined here
- `On-ramps` — external/ask-matt.md:37 — defined here
- `Standalones` — external/ask-matt.md:38 — defined here
- `phase boundary` — external/ask-matt.md:42 — defined here
- `Continue` — external/ask-matt.md:43 — defined here
- `smart zone` — external/ask-matt.md:43 — used here
- `primary source` — external/ask-matt.md:43 — used here
- `disable-model-invocation` — external/ask-matt.md:49 — used here
- `standalone router` — external/ask-matt.md:69 — defined here
- `secondary source` — external/ask-matt.md:70 — used here

## Structure
- # The /ask-matt Skill — external/ask-matt.md:24
- ## What it does — external/ask-matt.md:24
- ## When to reach for it — external/ask-matt.md:27
- ## Prerequisites — external/ask-matt.md:30
- ## Flows, not skills — external/ask-matt.md:33
- ## The phase boundary — external/ask-matt.md:41
- ## Common questions — external/ask-matt.md:45
- ## It's working if — external/ask-matt.md:60
- ## Where it fits — external/ask-matt.md:68
- ## Related reading — external/ask-matt.md:71
- ## Skill actions — external/ask-matt.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · external/ask-matt.md:49: Agent falsely declares skills missing because harness omits skills with `disable-model-invocation: true` from the injected skill context list.
- `doc-drift` · external/ask-matt.md:51: Router answers from brief one-line summaries without opening actual `SKILL.md` files, causing incorrect behavioral claims and missed seam checks.
- `doc-drift` · external/ask-matt.md:47: Hand-maintained routing table lags repository releases, omitting newly shipped skills like `/grilling` and `/resolving-merge-conflicts`.

## Observations
Explicitly frames skill execution around continuous "flows" rather than isolated tools, with the phase boundary as the only point for context lifecycle decisions. Documents that `ask-matt` is a secondary source over the repository and must defer to `SKILL.md` files whenever assertions conflict.

## Context cost
355633 bytes, ~72000 tokens (HTML snapshot including full inline hydration payload).
