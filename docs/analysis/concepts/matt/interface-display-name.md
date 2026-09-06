---
package: matt
name: interface.display_name
slug: interface-display-name
kind: name-only
package_phase: none
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

# interface.display_name

## Definition — verbatim
(used, not defined)

> "It holds Codex UI metadata: `interface.display_name` and `interface.short_description` for the skill picker" — .agents/invocation.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 10 | used here | Specifies the OpenAI Codex configuration property for setting a skill's display name in the UI skill picker. |

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
interface.display_name is a configuration field in agents/openai.yaml for the Codex UI skill picker rather than an operational lifecycle concept.
