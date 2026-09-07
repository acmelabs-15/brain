---
package: matt
name: disable-model-invocation
slug: disable-model-invocation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: skills/engineering/README.md, sha256: 713826c94f7858c28067238ce6c7021783e4da0dc0beef58a2af72cf75268fda}
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/productivity/grill-me/SKILL.md, sha256: caaf8b8de1684f96e26b28f3c29189db5c89cce4b73e1c93d86164f66ef88637}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# disable-model-invocation

## Definition — verbatim
(used, not defined)

> "It ships with `disable-model-invocation: true`, so no other skill can call it either." — docs/engineering/implement.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/implement.md | 9 | defined here | Explains that implement sets disable-model-invocation: true to require explicit human triggering. |
| external/implement.md | 28 | used here | Notes that /implement requires human invocation via disable-model-invocation: true. |
| skills/engineering/grill-with-docs/SKILL.md | 4 | used here | Frontmatter configuration disabling automatic agent invocation for grill-with-docs. |
| skills/engineering/implement/SKILL.md | 4 | used here | Frontmatter setting restricting implement to human slash command calls. |
| skills/engineering/README.md | 7 | used here | Explains the mechanics of user-invoked skills using disable-model-invocation in Claude Code. |
| skills/engineering/to-spec/SKILL.md | 4 | defined here | Frontmatter setting disabling autonomous model invocation for to-spec. |
| skills/in-progress/claude-handoff/SKILL.md | 5 | defined here | Frontmatter setting disabling autonomous model invocation for claude-handoff. |
| skills/productivity/grill-me/SKILL.md | 4 | defined here | Frontmatter setting restricting grill-me to direct user invocation. |
| skills/productivity/handoff/SKILL.md | 5 | used here | Frontmatter setting preventing autonomous agent calling of handoff. |
| skills/productivity/teach/SKILL.md | 4 | used here | Frontmatter setting disabling automatic invocation for teach. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 10 | used here | Documents the skill mechanics of user-invoked skills via disable-model-invocation: true. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
disable-model-invocation is a Claude Code YAML frontmatter configuration directive restricting skill execution exclusively to direct human user invocations rather than an operational lifecycle concept.
