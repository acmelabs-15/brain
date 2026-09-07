---
package: rjm
name: Content-controlled confirmatory rerun
slug: content-controlled-confirmatory-rerun
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

# Content-controlled confirmatory rerun

## Definition — verbatim
> "The first run's headline caveat was the content confound: the skill artifact was a smaller projection of the agent, so form and content varied together. Issue [#2936](https://github.com/rjmurillo/ai-agents/issues/2936) built a content-controlled skill variant whose body is byte-identical to the agent body, so only the form label differs." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 98 | defined here | Confirmatory rerun methodology isolating form factor by holding prompt bodies byte-identical. |

## Consumes
Byte-identical prompt bodies packaged into both agent and skill forms, evaluated against standard fixtures.

## Produces
Definitive empirical comparison confirming whether packaging form alone impacts recall or token usage.

## When applied
Executed to validate and de-confound initial evaluation findings.

## Sub-concepts
content-confound

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
The content-controlled confirmatory rerun enforces strict scientific control by making the prompt body byte-identical across agent and skill forms, eliminating prompt length and phrasing confounds to isolate pure packaging effects.
