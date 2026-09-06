---
package: matt
name: user-invoked
slug: user-invoked
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
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

# user-invoked

## Definition — verbatim
> "**User-invoked**: reachable **only by the human typing its name**." — .agents/invocation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 1 | defined here | Document title and taxonomy definition establishing the user-invoked category. |
| .agents/writing-docs.md | 5 | used here | Documentation guidelines noting how to document user-invoked skills. |
| .changeset/add-implement-spec-skill.md | 5 | used here | Changeset note marking implement-spec as a user-invoked skill. |
| CHANGELOG.md | 25 | used here | Changelog entry recording the introduction of user-invoked skill classification. |
| CLAUDE.md | 15 | defined here | Core repository rule specifying the distinction for user-invoked skills. |
| CLAUDE.md | 19 | defined here | Points to .agents/invocation.md for governing user-invoked skills. |
| docs/engineering/wizard.md | 77 | defined here | Explains historical user-invoked status of wizard before harness bugs required migration. |
| external/wizard.md | 55 | used here | Documents user-invoked status and behavior in external documentation. |
| README.md | 186 | defined here | Top-level repository taxonomy grouping skills under User-invoked. |
| skills/engineering/README.md | 5 | defined here | Bucket README section header grouping engineering skills reachable only by users. |
| skills/productivity/README.md | 5 | defined here | Bucket README section header grouping productivity skills reachable only by users. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 10 | defined here | Architectural explanation of trade-offs and mechanics for user-invoked skills. |

## Consumes
A skill definition marked with disable-model-invocation: true (Claude Code) and policy.allow_implicit_invocation: false (Codex).

## Produces
A slash-command accessible strictly to human users, preventing autonomous model triggering.

## When applied
When a skill serves as a high-ceremony, multi-step workflow orchestrator or performs setup/destructive operations.

## Sub-concepts
disable-model-invocation-true, policy-allow-implicit-invocation-false

## Part of
invocation

## Implementation status
defects: [doc-drift, script-bug, internal-contradiction] in docs/engineering/wizard.md and CLAUDE.md

## Design notes
In matt's skill architecture, user-invoked designates top-level workflow skills or orchestrators that should never be triggered autonomously by an LLM, only explicitly by a human user typing the skill name. This prevents infinite loops, unexpected tool hijacking, or premature execution of destructive or high-ceremony workflows.
