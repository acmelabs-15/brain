---
package: matt
name: implicit invocation
slug: implicit-invocation
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

# implicit invocation

## Definition — verbatim
(used, not defined)
> "- Mark every user-invoked skill with `policy.allow_implicit_invocation: false`, the Codex analog of `disable-model-invocation: true`, so Codex excludes it from implicit invocation while explicit `$skill` invocation still works." — CHANGELOG.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 34 | used here | Explains configuring OpenAI metadata to prevent automatic triggering while preserving explicit manual calls. |

## Consumes
Agent harness skill trigger evaluation based on conversational context.

## Produces
Automatic skill loading triggered by matching user prompts against skill descriptions.

## When applied
Enabled on model-invoked skills; suppressed on user-invoked skills via configuration policies.

## Sub-concepts
none

## Part of
dual-harness-invocation-model

## Implementation status
defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
Implicit invocation allows agent models to automatically activate skills matching conversation context, and is selectively disabled via frontmatter or policy settings to prevent unwanted triggering.
