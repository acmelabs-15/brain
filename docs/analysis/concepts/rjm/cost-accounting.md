---
package: rjm
name: Cost accounting
slug: cost-accounting
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

# Cost accounting

## Definition — verbatim
> "Cost is reported as model calls and tokens (input plus output) per variant, not wall-clock seconds or API dollars." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 59 | defined here | Subsection defining the metric accounting rules for form-factor evaluation. |

## Consumes
Raw model invocation telemetry including input tokens, output tokens, and call counts.

## Produces
Normalized token and call consumption metrics per fixture and variant.

## When applied
Computed across all evaluation runs to provide stable cost comparisons.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
Cost accounting standardizes evaluation measurement on deterministic model calls and token quantities rather than fluctuating API pricing or wall-clock timing, enabling reproducible cross-system benchmarking.
