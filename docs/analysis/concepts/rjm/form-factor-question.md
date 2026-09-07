---
package: rjm
name: form-factor question
slug: form-factor-question
kind: pattern
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

# form-factor question

## Definition — verbatim
> "It deliberately left out the form-factor question (ADR-058 lines 107 to 109):" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 26 | defined here | Defined as whether domain content should ship as an isolated subagent or an inline skill. |

## Consumes
Verified domain content prompt and evaluation corpus.

## Produces
Architectural packaging choice between subagent dispatch and inline skill execution.

## When applied
Evaluated after domain content is proven effective, to decide delivery packaging.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
The form-factor question asks whether proven domain capabilities should be packaged as autonomous subagents or inline skills, distinguishing prompt content efficacy from execution topology.
