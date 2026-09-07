---
package: rjm
name: Claude Code hooks
slug: claude-code-hooks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Code hooks

## Definition — verbatim
(used, not defined)

> "Implement routing-level enforcement gates using Claude Code hooks." — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 67 | used here | Specified as the runtime mechanism used to implement routing-level enforcement gates. |

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
defects: doc-drift, missing-path

## Design notes
An external platform hook mechanism provided by Claude Code CLI that rjm uses to intercept tool calls; it is an external runtime feature rather than an internal software lifecycle concept.
