---
package: matt
name: build chain
slug: build-chain
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# build chain

## Definition — verbatim
> "`code-review` is the review step at the tail of the build chain: `grill-with-docs → to-spec → to-tickets → implement → code-review`." — docs/engineering/code-review.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 88 | defined here | Defines the end-to-end sequence of engineering skills from requirements grilling to code review. |

## Consumes
User intent and project documentation.

## Produces
End-to-end verified codebase modifications and review verdicts.

## When applied
Sequenced across full feature delivery from inception through implementation and verification.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The canonical end-to-end engineering skill pipeline in Matt's package, chaining `grill-with-docs → to-spec → to-tickets → implement → code-review` to move systematically from ambiguous ideas to rigorously verified code.
