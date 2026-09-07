---
package: rjm
name: content confound
slug: content-confound
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

# content confound

## Definition — verbatim
> "The first run's headline caveat was the content confound: the skill artifact was a smaller projection of the agent, so form and content varied together." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 100 | defined here | Defined as the experimental confound where form factor and prompt content vary simultaneously. |

## Consumes
none

## Produces
Identification of experimental error requiring controlled reruns.

## When applied
Identified during eval analysis when compared artifacts differ in prompt body text as well as packaging.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
A content confound occurs when an evaluation attempts to compare delivery forms (agent vs skill) but uses prompts of differing lengths or contents, confusing prompt efficacy with architectural form factor.
