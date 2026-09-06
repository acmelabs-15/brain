---
package: matt
name: dual-harness invocation model
slug: dual-harness-invocation-model
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

# dual-harness invocation model

## Definition — verbatim
> "- Document the dual-harness invocation model in `.agents/invocation.md`, `CLAUDE.md`, and the promoted-bucket READMEs." — CHANGELOG.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 35 | defined here | Records documentation of the architecture supporting both Claude Code and Codex skill invocation. |

## Consumes
Claude Code frontmatter (`disable-model-invocation`) and Codex configuration (`agents/openai.yaml`).

## Produces
A unified skill repository structure that functions seamlessly across both agent platforms.

## When applied
Across all skill authoring and packaging workflows in the repository.

## Sub-concepts
implicit-invocation, model-invokable

## Part of
none

## Implementation status
defects: missing-path, doc-drift (in CHANGELOG.md)

## Design notes
The dual-harness invocation model provides a unified configuration architecture allowing skills to maintain distinct user-invoked and model-invoked semantics across both Claude Code and OpenAI Codex without duplicate source files.
