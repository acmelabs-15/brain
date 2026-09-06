---
package: matt
name: disable-model-invocation: true
slug: disable-model-invocation-true
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# disable-model-invocation: true

## Definition — verbatim
(used, not defined)

> "Set `disable-model-invocation: true` in the frontmatter (Claude Code) and `policy.allow_implicit_invocation: false` in `agents/openai.yaml` (Codex)." — .agents/invocation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 5 | defined here | Directs setting disable-model-invocation: true in frontmatter to make a skill user-invoked in Claude Code. |
| docs/engineering/ask-matt.md | 56 | used here | Mentions setting disable-model-invocation: true to restrict ask-matt to human triggering. |
| external/ask-matt.md | 49 | used here | Notes the frontmatter setting disable-model-invocation: true in external documentation. |
| skills/productivity/README.md | 7 | used here | Explains that user-invoked productivity skills set disable-model-invocation: true for Claude Code. |

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
defects: [orphan, doc-drift] in external/ask-matt.md and docs/engineering/ask-matt.md

## Design notes
disable-model-invocation: true is a Claude Code YAML frontmatter configuration directive restricting skill invocation to human slash-commands rather than an operational lifecycle concept.
