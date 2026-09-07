---
package: rjm
name: YAGNI Examples
slug: yagni-examples
kind: reference
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

# YAGNI Examples

## Definition — verbatim
> "## When NOT to Abstract (YAGNI Examples)" — .claude/skills/cva-analysis/references/matrix-building-examples.md:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 312 | defined here | Heading for section providing concrete negative examples where CVA dictates refraining from abstraction per YAGNI. |

## Consumes
Requirements and use case matrices showing single-column (no variability) or all-variability edge cases.

## Produces
Architectural decisions to write concrete code without interfaces, coupled with ADRs documenting reassessment triggers.

## When applied
When reviewing CVA matrices to determine whether abstraction is justified or violates You Aren't Gonna Need It principles.

## Sub-concepts
single-payment-method-no-variability, all-variability-reconsider-scope

## Part of
cva-matrix-building-examples-net-focus

## Implementation status
clean

## Design notes
A vital reference section in rjm's CVA guidance that prevents over-engineering by demonstrating negative cases where CVA analysis indicates that no design pattern or interface should be introduced, maintaining simple concrete code until real variability emerges.
