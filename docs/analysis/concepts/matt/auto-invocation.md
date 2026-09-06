---
package: matt
name: auto-invocation
slug: auto-invocation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# auto-invocation

## Definition — verbatim
(used, not defined)

> "so auto-invocation fires." — .agents/invocation.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 6 | used here | Describes autonomous skill triggering fired when model-facing descriptions match user intents. |

## Consumes
Frontmatter description containing rich trigger phrasing.

## Produces
Automatic execution of the relevant skill when the user's prompt matches trigger criteria.

## When applied
When an LLM model detects intent in a conversation matching the skill's trigger phrasing.

## Sub-concepts
none

## Part of
model-invoked

## Implementation status
clean

## Design notes
Auto-invocation is the autonomous triggering pattern in matt's architecture where an agent model decides to invoke a skill based on rich trigger phrasing in its frontmatter description without requiring explicit human slash-command invocation.
