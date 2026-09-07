---
package: rjm
name: prefer-skill-form
slug: prefer-skill-form
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

# prefer-skill-form

## Definition — verbatim
> "| prefer-skill-form | skill recall is within the agent's confidence interval (no significant loss) AND skill cost is lower | Ship the content as a skill; retire or stop investing in the agent form for this domain. |" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 53 | defined here | Decision table verdict condition directing content to be shipped as an inline skill. |

## Consumes
Multi-variant evaluation results showing skill recall parity with agent and lower token cost.

## Produces
Architectural decision to ship capability as a skill and retire agent implementation.

## When applied
Selected when eval confirms skill form achieves equivalent recall at reduced execution cost.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
prefer-skill-form is an empirical decision verdict that directs domain functionality to be packaged as an inline skill rather than an agent when recall parity is proven and token or invocation overhead is reduced.
