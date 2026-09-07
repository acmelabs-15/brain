---
package: rjm
name: DOCS SILENT
slug: docs-silent
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DOCS SILENT

## Definition — verbatim
> "Mark an absent official answer `DOCS SILENT`. Do not infer it from Claude." — .claude/skills/agent-harness-reference/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 29 | defines | Protocol rule instructing contributors to explicitly flag absent official vendor documentation instead of inferring behavior from Claude. |

## Consumes
Official vendor documentation reviews where specific hook behaviors, fields, or schemas are omitted.

## Produces
Explicit `DOCS SILENT` annotations in hook contract records and sidecars.

## When applied
Applied during harness contract extraction whenever an official vendor specification does not document a specific behavior or field.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
A documentation discipline in rjm that prevents hallucinated or inferred harness contracts. When official vendor documentation fails to define an event shape or behavior, marking it `DOCS SILENT` prevents agents from falsely assuming Claude Code or Copilot CLI behaviors based on extrapolation, forcing explicit empirical probing instead.
