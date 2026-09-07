---
package: rjm
name: calibrated envelope
slug: calibrated-envelope
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# calibrated envelope

## Definition — verbatim
> "Run this project on a materially less capable model than the current harness default, and it falls outside the calibrated envelope." — .agents/governance/agent-design-principles.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 13 | defined here | Identifies the range of frontier model intelligence within which the repository's constrain-down guardrails function effectively. |

## Consumes
Harness model configuration and model capability benchmarking.

## Produces
Reliable execution quality across agent tasks.

## When applied
Evaluated when selecting default execution models or assessing instruction failures.

## Sub-concepts
none

## Part of
frontier-model-execution

## Implementation status
defects: other

## Design notes
The operational boundary condition of rjm's agent instructions. It defines the range of model capability necessary for the system's terse, constrain-down guardrails to succeed without degrading into literalist or incoherent behavior.
