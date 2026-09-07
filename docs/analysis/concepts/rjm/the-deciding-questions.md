---
package: rjm
name: The deciding questions
slug: the-deciding-questions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The deciding questions

## Definition — verbatim
> "## The deciding questions" — docs/when-to-use.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 74 | defined here | Heading introducing the four-question heuristic ordering for selecting lifecycle commands when task shape is ambiguous. |

## Consumes
Ambiguous task requests with uncertain scope, contracts, or risk profiles.

## Produces
An ordered decision on which lifecycle commands (/spec, /plan, /build, /test, /review, /ship) must be executed.

## When applied
Applied when a developer or agent encounters a task shape whose required lifecycle phases are not immediately obvious.

## Sub-concepts
none

## Part of
fitness-guide

## Implementation status
clean

## Design notes
An ordered four-question heuristic protocol (known answer, pinned contract, customer execution, blast radius) used to resolve phase-selection ambiguity and prevent skipping essential verification on high-risk paths.
