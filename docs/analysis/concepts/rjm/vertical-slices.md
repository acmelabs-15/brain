---
package: rjm
name: vertical slices
slug: vertical-slices
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vertical slices

## Definition — verbatim
> "Implements changes in thin vertical slices with TDD and atomic commits." — docs/workflow-commands.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 92 | defined here | Core implementation methodology of the /build command executing changes incrementally. |

## Consumes
Decomposed atomic tasks and plan steps.

## Produces
Incremental, fully working end-to-end functionality backed by unit tests.

## When applied
Applied during /build execution when implementing tasks slice-by-slice.

## Sub-concepts
tdd, atomic-commits

## Part of
build

## Implementation status
defects: doc-drift

## Design notes
An architectural implementation technique where functionality is delivered in thin end-to-end vertical slices rather than horizontal architectural layers, ensuring immediate verification and preventing broken intermediate states.
