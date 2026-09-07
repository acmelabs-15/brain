---
package: rjm
name: Step 0.5
slug: step-0-5
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

# Step 0.5

## Definition — verbatim
(used, not defined)

> "added Step 0.5, the Memory-First Gate, between Step 0 and Step 1." — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 31 | defined here | Formally defined as the blocking Memory-First Gate running between Step 0 and Step 1 in the spec pipeline. |

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
defects: missing-path, internal-contradiction, doc-drift

## Design notes
A pipeline step label and heading in `/spec` identifying the Memory-First Gate, recorded as a name-only identifier rather than an independent lifecycle concept.
