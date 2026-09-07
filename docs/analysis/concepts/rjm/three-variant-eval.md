---
package: rjm
name: three-variant eval
slug: three-variant-eval
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

# three-variant eval

## Definition — verbatim
> "Adopt a three-variant eval. For one domain, hold the content and the model constant and vary only the delivery form:" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 41 | defined here | Core decision in ADR-075 establishing the experimental design comparing baseline, agent, and skill. |

## Consumes
Naive baseline prompt, agent shared prompt, and domain skill file.

## Produces
Three parallel evaluation runs across identical fixtures and scoring judges.

## When applied
Run when evaluating form-factor trade-offs for a specialized domain.

## Sub-concepts
baseline, agent, prefer-skill-form, prefer-agent-form, inconclusive

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
The three-variant evaluation design isolates form-factor effects from prompt content quality by benchmarking baseline (naive control), agent (subagent prompt), and skill (inline prompt) under identical conditions.
