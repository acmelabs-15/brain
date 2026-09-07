---
package: rjm
name: Step 1
slug: step-1
kind: name-only
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 1

## Definition — verbatim
(used, not defined)

> "added Step 0.5, the Memory-First Gate, between Step 0 and Step 1." — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 31 | used here | Cited as the problem clarification step that runs after Step 0 and Step 0.5 have passed. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A pipeline step label and heading in `/spec` identifying the problem clarification and ontology elicitation step, recorded as a name-only identifier rather than an independent lifecycle concept.
