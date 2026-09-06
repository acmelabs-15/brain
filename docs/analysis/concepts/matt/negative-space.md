---
package: matt
name: Negative Space
slug: negative-space
kind: pattern
package_phase: matt:writing-for-agents
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Negative Space

## Definition — verbatim
> "**Negative Space** — the void — is blindness to the steering done by what you leave _out_: every decision a skill declines is delegated to the agent's priors rather than left neutral, so the cure is to read a draft for its silences and decide each omission deliberately (fill it, or leave it open as a real **branch**)." — CHANGELOG.md:173

## Also called — verbatim
`the void` — CHANGELOG.md:173

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 173 | defined here | Formal definition in changelog of the steering impact of omitted instructions |

## Consumes
A draft skill or prompt specification

## Produces
An intentional audit of prompt omissions, either specifying unaddressed decisions or explicitly leaving them as intentional branches

## When applied
When reviewing skill documentation and prompts to eliminate unintentional default behavior

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Negative Space highlights that omitting guidance in an agent instruction does not result in neutrality, but rather silently surrenders the unaddressed decisions to the base model's default priors, requiring prompt authors to evaluate omissions consciously.
