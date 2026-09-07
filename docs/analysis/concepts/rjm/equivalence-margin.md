---
package: rjm
name: equivalence margin
slug: equivalence-margin
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# equivalence margin

## Definition — verbatim
> "A future revision should add an equivalence margin (for example, reject the verdict if the CI half-width exceeds a set threshold in percentage points) so a wide-CI run resolves to `inconclusive` rather than a `prefer-skill-form` that the data cannot support." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 57 | defined here | Statistical threshold proposed to prevent underpowered evaluation runs from claiming equivalence. |

## Consumes
Bootstrap confidence interval bounds and predefined percentage-point margin threshold.

## Produces
Statistical validity check rejecting underpowered runs as inconclusive.

## When applied
Evaluated during statistical analysis of multi-variant evaluation runs.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
An equivalence margin is a rigorous statistical requirement ensuring that non-significant differences between two variants reflect true functional equivalence rather than high variance caused by small sample sizes.
