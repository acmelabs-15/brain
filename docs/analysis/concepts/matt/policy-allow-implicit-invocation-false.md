---
package: matt
name: policy.allow_implicit_invocation: false
slug: policy-allow-implicit-invocation-false
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# policy.allow_implicit_invocation: false

## Definition — verbatim
(used, not defined)

> "Set `disable-model-invocation: true` in the frontmatter (Claude Code) and `policy.allow_implicit_invocation: false` in `agents/openai.yaml` (Codex)." — .agents/invocation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 5 | defined here | Specifies the Codex policy configuration key to disable implicit model invocation. |
| skills/productivity/README.md | 7 | used here | Explains that user-invoked skills set policy.allow_implicit_invocation: false in agents/openai.yaml for Codex. |

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
policy.allow_implicit_invocation: false is an OpenAI Codex configuration directive used to disable automatic model invocation rather than an operational lifecycle concept.
