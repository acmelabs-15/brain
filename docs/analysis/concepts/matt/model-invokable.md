---
package: matt
name: model-invokable
slug: model-invokable
kind: pattern
package_phase: cross-phase
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

# model-invokable

## Definition — verbatim
(used, not defined)
> "- [#766](https://github.com/mattpocock/skills/pull/766) [`4aaccb5`](https://github.com/mattpocock/skills/commit/4aaccb58d40559d7e3c59a029b2290ae5ba538de) Thanks [@mattpocock](https://github.com/mattpocock)! - Make `writing-for-agents` model-invokable in Codex again." — CHANGELOG.md:21

## Also called — verbatim
`Model-invoked` — CHANGELOG.md:25

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 21 | used here | Describes restoring model-invokable behavior in Codex by updating OpenAI agent metadata. |

## Consumes
Model-facing skill description with clear trigger conditions.

## Produces
Autonomous triggering capability allowing an LLM agent to call the skill when relevant context arises.

## When applied
Configured on skills intended to be reached autonomously by models during tasks without explicit user invocation.

## Sub-concepts
none

## Part of
dual-harness-invocation-model

## Implementation status
defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Model-invokable skills expose detailed description metadata allowing agents to trigger them autonomously when relevant conditions arise, trading always-loaded context cost for automated discovery.
