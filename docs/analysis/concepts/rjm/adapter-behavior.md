---
package: rjm
name: Adapter behavior
slug: adapter-behavior
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

# Adapter behavior

## Definition — verbatim
> "The PermissionRequest adapter accepts one complete JSON document regardless of whitespace or pretty printing, and rejects trailing content after it." — .claude/skills/agent-harness-reference/SKILL.md:151-152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 149 | defines | Details runtime parsing, validation, and error suppression behaviors required for hook permission adapters. |

## Consumes
Hook execution stdout/stderr streams and JSON decision payloads.

## Produces
Validated host permission responses (`approve`, `deny`) with associated rationale strings.

## When applied
Applied by hook adapters when processing host permission requests and formatting approval/denial payloads.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
Defines the defensive parsing and output normalization techniques required for rjm hook adapters. By enforcing strict single-document JSON parsing, requiring explicit reason strings for decisions, and suppressing malformed output to fall back to safe host defaults, it isolates host CLIs from script failures.
