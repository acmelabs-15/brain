---
package: rjm
name: Single-pass generation
slug: single-pass-generation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Single-pass generation

## Definition — verbatim
> "Agents produce output once, critic reviews" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 26 | used here | Described as a legacy baseline generation pattern lacking iterative feedback. |

## Consumes
User prompts and task assignments.

## Produces
Single-shot outputs reviewed without automated optimization loops.

## When applied
Legacy agent workflows prior to the adoption of evaluator-optimizer loops.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A legacy generation pattern where an agent produces an artifact in a single turn without iterative evaluation and optimization. ADR-010 identifies this pattern as inadequate for high-stakes artifacts, replacing it with an evaluator-optimizer loop.
