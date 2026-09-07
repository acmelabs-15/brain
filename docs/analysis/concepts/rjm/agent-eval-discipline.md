---
package: rjm
name: agent eval discipline
slug: agent-eval-discipline
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

# agent eval discipline

## Definition — verbatim
(used, not defined)

> "Follow-on to ADR-058 (agent eval discipline), which scoped the form-factor question out and tracked it here." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 16 | used here | Referenced as the parent evaluation discipline (ADR-058) establishing empirical testing for agents. |

## Consumes
Held-out test fixtures, scoring rubrics, and model evaluation runners.

## Produces
Statistical confidence intervals, recall measurements, and validation reports for agent behaviors.

## When applied
Applied continuously during agent development, prompt tuning, and regression testing.

## Sub-concepts
form-factor-evaluation-methodology, three-variant-eval

## Part of
architecture-governance

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
Agent eval discipline refers to rjm's systematic practice of benchmarking agent prompt effectiveness against baselines with statistical confidence intervals rather than relying on qualitative assertions.
