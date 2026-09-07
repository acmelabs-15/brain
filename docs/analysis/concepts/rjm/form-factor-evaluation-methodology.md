---
package: rjm
name: Form-Factor Evaluation Methodology
slug: form-factor-evaluation-methodology
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

# Form-Factor Evaluation Methodology

## Definition — verbatim
> "# ADR-075: Form-Factor Evaluation Methodology (Agent vs Skill)" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:12

## Also called — verbatim
`three-variant eval` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 12 | defined here | Architectural specification establishing empirical comparison between agent and skill delivery forms. |

## Consumes
Domain prompt content, evaluation fixtures, model panel configurations, and scoring judges.

## Produces
Comparative recall and token consumption metrics leading to prefer-skill-form, prefer-agent-form, or inconclusive verdicts.

## When applied
Applied when deciding whether specialized domain knowledge should be deployed as an autonomous subagent or an inline skill.

## Sub-concepts
three-variant-eval, content-baseline, content-controlled-confirmatory-rerun

## Part of
agent-eval-discipline

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
ADR-075 introduces an empirical evaluation methodology to determine whether domain capability performs better and cheaper as an isolated subagent or as an inline skill, holding content and model constant to isolate the delivery mechanism.
