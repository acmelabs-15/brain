---
package: matt
path: docs/engineering/prototype.md
type: doc
bytes: 9630
unit: inv-matt-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/prototype.md

## Purpose — required, verbatim
> "`prototype` writes **throwaway code that answers a question**: does this state model feel right, or what should this screen look like. The question comes first and decides the shape of everything that follows; a prototype that answers the wrong question is pure waste, however good it looks." — docs/engineering/prototype.md:3

## Design intent — required
Defines the authoring standard, artifact conventions, and mental model for prototyping exploratory logic and user interfaces. Emphasizes writing disposable, unhardened code (no tests, persistence, or defensive handling) strictly scoped to answering a single blocking question that conversation cannot settle. Prescribes two distinct artifact branches: single-file zero-build HTML walkthroughs with pure logic modules for state/domain questions, and radical structural multi-variant UI routes switchable via query parameters for visual questions. Preserves durable answers in main-branch ADRs and git commit messages while parking runnable prototype code on unmerged throwaway branches (`prototype/<name>`) linked via issue context pointers.

## Phase — required
matt:engineering

## Inputs — required
A single unresolved design or state model question that discussion cannot settle, wayfinder prototype decision tickets, or ungrillable edge-case questions arising during grilling sessions.

## Outputs — required
Two concrete artifacts: durable decision records (ADRs, commit messages, or issue notes in main) and runnable prototype evidence parked on unmerged throwaway git branches (`prototype/<name>`) with context pointers left on implementation issues; plus either a single self-contained HTML walkthrough file or multi-variant UI routes on a query parameter.

## Invokes — required
- doc diagnosing-bugs — docs/engineering/prototype.md:11
- doc wayfinder — docs/engineering/prototype.md:13
- doc handoff — docs/engineering/prototype.md:47
- doc grill-me — docs/engineering/prototype.md:67
- doc grill-with-docs — docs/engineering/prototype.md:67
- doc to-spec — docs/engineering/prototype.md:67
- doc ask-matt — docs/engineering/prototype.md:67

## Invoked by — required
none

## Concepts named — required, verbatim
- `prototype` — docs/engineering/prototype.md:3 — defined here
- `throwaway code` — docs/engineering/prototype.md:3 — defined here
- `agent` — docs/engineering/prototype.md:9 — used here
- `grilling` — docs/engineering/prototype.md:11 — used here
- `tickets` — docs/engineering/prototype.md:13 — used here
- `guided walkthroughs` — docs/engineering/prototype.md:19 — defined here
- `context pointer` — docs/engineering/prototype.md:30 — used here
- `session` — docs/engineering/prototype.md:35 — used here
- `primary source` — docs/engineering/prototype.md:35 — used here
- `context` — docs/engineering/prototype.md:47 — used here
- `tokens` — docs/engineering/prototype.md:50 — used here
- `reach-for-it-anytime standalone` — docs/engineering/prototype.md:63 — defined here
- `decision tickets` — docs/engineering/prototype.md:65 — used here

## Structure
- ## What it does — docs/engineering/prototype.md:1
- ## When to reach for it — docs/engineering/prototype.md:7
- ## Two branches — docs/engineering/prototype.md:15
- ## The prototype is a primary source — docs/engineering/prototype.md:24
- ## Common questions — docs/engineering/prototype.md:32
- ## It's working if — docs/engineering/prototype.md:52
- ## Where it fits — docs/engineering/prototype.md:61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/prototype.md:40-41 documents flow-unaware agents incorrectly recommending `/prototype` by name instead of `/implement` after tickets are created due to generic naming.

## Observations
Contrasts logic prototyping (which produces zero-dependency, double-clickable single-file HTML state demos that non-coders can drive via guided walkthroughs) with terminal apps, noting terminal prototypes failed because domain stakeholders lacked local runtimes. Replaces code deletion with long-term retention on unmerged throwaway branches (`prototype/<name>`) so subsequent agent sessions retain primary-source runnable evidence.

## Context cost
9630 bytes (~2400 tokens).
