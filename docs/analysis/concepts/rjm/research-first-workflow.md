---
package: rjm
name: Research-First Workflow
slug: research-first-workflow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Research-First Workflow

## Definition — verbatim
> "### Research-First Workflow" — docs/workflow-commands.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 32 | used here | Referenced as the concrete workflow matching the exploratory spike task shape. |
| docs/workflow-commands.md | 36 | defined here | Section heading introducing the two-step exploratory workflow chaining /spec and /plan. |

## Consumes
An open question, architectural trade-off, or spike investigation request.

## Produces
Structured requirements specification and exploratory milestone plan without code implementation.

## When applied
When tackling exploratory spikes or unknown answers before deciding whether to build.

## Sub-concepts
none

## Part of
lifecycle-commands

## Implementation status
defects: doc-drift

## Design notes
A specialized sequence of the lifecycle commands running only /spec and optionally /plan, deliberately omitting /build, /test, and /ship to prevent premature code authoring on unresolved questions.
