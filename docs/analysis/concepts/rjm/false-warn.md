---
package: rjm
name: false WARN
slug: false-warn
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# false WARN

## Definition — verbatim
> "Conservative stance (forbid PASS without evidence) shifts false PASS to false WARN (acceptable trade-off)" — .agents/architecture/ADR-021-model-routing-strategy.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 113 | defined here | Characterized as an acceptable trade-off verdict when evidence is incomplete to avoid false PASS. |

## Consumes
Incomplete or ambiguous pull request diff context during automated evaluation.

## Produces
A non-blocking warning verdict prompting human or escalated secondary review.

## When applied
Emitted when review context is insufficient to prove correctness but no explicit critical defect is found.

## Sub-concepts
none

## Part of
evidence-sufficiency-principle

## Implementation status
defects: missing-path

## Design notes
A quality gate outcome where a review agent raises a cautionary warning due to incomplete evidence rather than a confirmed bug. In rjm's governance design, tolerating occasional false warnings is an intentional engineering compromise to eliminate dangerous false passes.
