---
package: rjm
name: Single Payment Method (No Variability)
slug: single-payment-method-no-variability
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Single Payment Method (No Variability)

## Definition — verbatim
> "### Example: Single Payment Method (No Variability)" — .claude/skills/cva-analysis/references/matrix-building-examples.md:314

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 314 | defined here | Worked example demonstrating a 1-column CVA matrix where abstraction is avoided in favor of a concrete implementation. |

## Consumes
Requirements with only a single implementation case (e.g., Credit Card payment only).

## Produces
Direct concrete implementation without interface indirection, paired with an ADR defining triggers for future reassessment.

## When applied
When CVA analysis yields only one column, demonstrating zero variability to abstract over.

## Sub-concepts
none

## Part of
yagni-examples

## Implementation status
clean

## Design notes
A canonical negative example in rjm showing how CVA enforces YAGNI: with only a single supported payment method, the matrix has zero variability, prompting the team to deploy a direct concrete class and document a reassessment trigger rather than introducing premature Strategy abstractions.
