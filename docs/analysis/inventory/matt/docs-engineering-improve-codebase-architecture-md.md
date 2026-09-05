---
package: matt
path: docs/engineering/improve-codebase-architecture.md
type: doc
bytes: 11814
unit: inv-matt-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/improve-codebase-architecture.md

## Purpose — required, verbatim
> "`improve-codebase-architecture` surveys a codebase for **deepening opportunities**: places where a shallow module (an interface nearly as complex as the thing it hides) could become a deep one. It writes them up as a self-contained HTML report, and then [grills](https://www.aihero.dev/ai-coding-dictionary/grilling) you through whichever one you pick." — docs/engineering/improve-codebase-architecture.md:3

## Design intent — required
Human-facing documentation and operational manual for `improve-codebase-architecture`, a periodic maintenance skill that surveys codebases for module deepening opportunities based on John Ousterhout's philosophy of software design. It describes the two gating filters (the deletion test and recency of change), the generation of an external HTML review report with candidate cards and strength badges, and the subsequent grilling loop on a selected candidate. Without it, users would expect direct code refactoring, struggle with CDN-dependent HTML report rendering failures, or become overwhelmed by unconstrained multi-question interrogations.

## Phase — required
cross-phase

## Inputs — required
Repository commit history (recent change hot spots), codebase source files, `CONTEXT.md`, and `docs/adr/`. Optionally a planned specification or user-directed focal area.

## Outputs — required
A self-contained HTML report written to `<tmpdir>/architecture-review-<timestamp>.html`, candidate cards (`Strong`, `Worth exploring`, `Speculative`), updated `CONTEXT.md` terms, optional rejected-candidate ADRs in `docs/adr/`, and settled architectural decisions for downstream specification.

## Invokes — required
- skill codebase-design — docs/engineering/improve-codebase-architecture.md:24
- skill wayfinder — docs/engineering/improve-codebase-architecture.md:25
- skill diagnosing-bugs — docs/engineering/improve-codebase-architecture.md:26
- skill grilling — docs/engineering/improve-codebase-architecture.md:50
- skill to-spec — docs/engineering/improve-codebase-architecture.md:50
- skill to-tickets — docs/engineering/improve-codebase-architecture.md:50
- skill implement — docs/engineering/improve-codebase-architecture.md:50
- skill grill-with-docs — docs/engineering/improve-codebase-architecture.md:72
- skill domain-modeling — docs/engineering/improve-codebase-architecture.md:101
- skill ask-matt — docs/engineering/improve-codebase-architecture.md:101

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `deepening opportunities` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `shallow module` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `deep one` — docs/engineering/improve-codebase-architecture.md:3 — defined here
- `session` — docs/engineering/improve-codebase-architecture.md:5 — used here
- `deletion test` — docs/engineering/improve-codebase-architecture.md:7 — defined here
- `agent` — docs/engineering/improve-codebase-architecture.md:11 — used here
- `spec` — docs/engineering/improve-codebase-architecture.md:18 — used here
- `vibe-coded` — docs/engineering/improve-codebase-architecture.md:19 — used here
- `CONTEXT.md` — docs/engineering/improve-codebase-architecture.md:30 — used here
- `ADR` — docs/engineering/improve-codebase-architecture.md:30 — used here
- `depth` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `locality` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `seams` — docs/engineering/improve-codebase-architecture.md:36 — defined here
- `leverage` — docs/engineering/improve-codebase-architecture.md:38 — defined here
- `Strong` — docs/engineering/improve-codebase-architecture.md:42 — defined here
- `Worth exploring` — docs/engineering/improve-codebase-architecture.md:43 — defined here
- `Speculative` — docs/engineering/improve-codebase-architecture.md:44 — defined here
- `Top recommendation` — docs/engineering/improve-codebase-architecture.md:46 — defined here
- `model` — docs/engineering/improve-codebase-architecture.md:56 — used here
- `context window` — docs/engineering/improve-codebase-architecture.md:64 — used here
- `tickets` — docs/engineering/improve-codebase-architecture.md:64 — used here
- `harness` — docs/engineering/improve-codebase-architecture.md:84 — used here
- `periodic maintenance` — docs/engineering/improve-codebase-architecture.md:101 — defined here

## Structure
- What it does — docs/engineering/improve-codebase-architecture.md:1
- When to reach for it — docs/engineering/improve-codebase-architecture.md:9
- Prerequisites — docs/engineering/improve-codebase-architecture.md:28
- Depth, and the report that hunts for it — docs/engineering/improve-codebase-architecture.md:34
- What happens after you pick one — docs/engineering/improve-codebase-architecture.md:48
- Common questions — docs/engineering/improve-codebase-architecture.md:52
- It's working if — docs/engineering/improve-codebase-architecture.md:90
- Where it fits — docs/engineering/improve-codebase-architecture.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The skill operates strictly as a codebase survey tool without altering repository code; outputs an ephemeral HTML candidate report to `<tmpdir>/architecture-review-<timestamp>.html`. It applies John Ousterhout's module depth philosophy: deep modules maximize behavior behind minimal, stable interfaces, while shallow modules leak complexity across seams or extract pure functions without operational locality. It uses two decisive filters: the deletion test (evaluating whether removing a module concentrates complexity behind a smaller interface) and recency of change (targeting active churn rather than dormant files). Documents that CDN-dependent Tailwind/Mermaid rendering breaks silently under strict security hooks or offline conditions (line 60), and parallel exploration depends on Claude Code's `subagent_type=Explore` tool, causing degradation in other harnesses (line 84).

## Context cost
11814 bytes, ~2700 tokens.
