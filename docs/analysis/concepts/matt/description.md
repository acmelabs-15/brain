---
package: matt
name: description
slug: description
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# description

## Definition — verbatim
(used, not defined)

> "  \"description\": \"Matt Pocock's agent skills for real engineering\"," — package.json:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 5 | used here | Explains that frontmatter description is human-facing for user-invoked skills. |
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Mentions modifying description frontmatter for trigger clarity. |
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Mentions quoting colons in skill description fields. |
| package.json | 5 | defined here | Standard npm package.json property describing the repository. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 9 | used here | Explains that description acts as a top-level context pointer for model discovery. |

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
description is a configuration property in package.json and skill frontmatter rather than an operational lifecycle concept.
