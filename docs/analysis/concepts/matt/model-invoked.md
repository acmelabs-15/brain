---
package: matt
name: Model-invoked
slug: model-invoked
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/README.md, sha256: 713826c94f7858c28067238ce6c7021783e4da0dc0beef58a2af72cf75268fda}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Model-invoked

## Definition — verbatim
> "**Model-invoked**: reachable by **model or user**." — .agents/invocation.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 1 | defined here | Document title and taxonomy definition establishing the model-invoked category. |
| .changeset/user-invoked-skill-invocation.md | 7 | defined here | Changeset note describing terminology standardization for model-invoked skills. |
| CHANGELOG.md | 25 | used here | Changelog entry recording the introduction of model-invoked skill classification. |
| CLAUDE.md | 15 | defined here | Core repository rule specifying the distinction for model-invoked skills. |
| CLAUDE.md | 19 | defined here | Points to .agents/invocation.md for governing model-invoked skills. |
| docs/engineering/wizard.md | 77 | defined here | Explains that wizard was made model-invoked to avoid harness issues dropping user-invoked skills. |
| external/diagnosing-bugs.md | 28 | used here | External documentation citing model-invoked capability for debugging. |
| external/wizard.md | 55 | used here | Documents model-invoked status for setup and configuration wizards. |
| README.md | 186 | defined here | Top-level repository taxonomy grouping skills under Model-invoked. |
| skills/engineering/README.md | 19 | defined here | Bucket README section header grouping engineering skills reachable by models. |
| skills/productivity/README.md | 15 | defined here | Bucket README section header grouping productivity skills reachable by models. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 9 | defined here | Architectural explanation of trade-offs and mechanics for model-invoked skills. |

## Consumes
A skill definition with model-facing description and rich trigger phrasing.

## Produces
Autonomous discovery and execution of the skill by LLM agents.

## When applied
When a skill contains logic or references that an agent model can usefully reach for autonomously during a session.

## Sub-concepts
auto-invocation

## Part of
invocation

## Implementation status
defects: [doc-drift, script-bug, internal-contradiction] in docs/engineering/wizard.md, CLAUDE.md, and external docs

## Design notes
In matt's skill architecture, model-invoked is the default invocation mode for skills that the agent model can autonomously choose to reach for when contextually relevant, as well as being callable by human users. It relies on model-facing descriptions with rich trigger phrasing rather than slash-command documentation.
