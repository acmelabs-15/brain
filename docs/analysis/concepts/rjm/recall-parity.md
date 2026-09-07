---
package: rjm
name: Recall parity
slug: recall-parity
kind: gate
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

# Recall parity

## Definition — verbatim
> "- Recall parity: the form must not lose findings the agent form catches." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 35 | defined here | Defined as a decision driver requiring that candidate forms preserve detection recall. |

## Consumes
Comparative recall statistics from multi-variant evaluation runs.

## Produces
Verification that alternative delivery forms do not degrade domain capability.

## When applied
Assessed during form-factor evaluation before adopting an inline skill over an agent.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
Recall parity guarantees that switching from an agent to an inline skill does not sacrifice quality or miss critical findings, making capability retention a prerequisite for cost optimization.
