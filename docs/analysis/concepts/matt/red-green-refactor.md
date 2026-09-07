---
package: matt
name: red-green-refactor
slug: red-green-refactor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# red-green-refactor

## Definition — verbatim
(used, not defined)

> "Type `/tdd`, or the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reaches for it automatically when a task fits: building a feature or fixing a bug test-first, or when you say \"red-green-refactor\"." — docs/engineering/tdd.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 9 | used here | Listed as an invocation trigger phrase for the tdd skill. |
| external/tdd.md | 24 | used here | External catalog trigger phrase for initiating test-driven development. |
| skills/engineering/tdd/SKILL.md | 3 | used here | Skill description trigger matching requests for red-green-refactor workflows. |

## Consumes
A feature requirement, contract change, or bug reproduction with defined inputs and observable outputs.

## Produces
Test-driven implementations verified through failing (red) and passing (green) cycles.

## When applied
When prompted by the developer using the phrase "red-green-refactor" or when building test-first features.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: doc-drift (docs/engineering/tdd.md:51 / issue #589 where skill trigger still promises "red-green-refactor" even though the refactoring phase was excised from the inline loop in favor of dedicated code-review sessions)

## Design notes
`red-green-refactor` is the classical TDD moniker recognized as a primary invocation trigger for the `tdd` skill. In Matt's design evolution, the "refactor" phase was deliberately extracted from the inner development cycle because LLM coding agents routinely tangled functional fixes with opportunistic refactorings, degrading test reliability. Instead, the loop in `tdd` focuses strictly on red-to-green implementation at pre-agreed seams, delegating structural cleanup and refactoring to an independent `code-review` session.
