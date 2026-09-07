---
package: rjm
name: Shipped registrations
slug: shipped-registrations
kind: name-only
package_phase: none
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

# Shipped registrations

## Definition — verbatim
(used, not defined)

> "Shipped registrations" — .claude/skills/agent-harness-reference/SKILL.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 100 | defines | Section heading auditing active hook registrations and confirming zero live hooks are registered across harnesses. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
A documentation section heading in `agent-harness-reference` auditing the active inventory of host hook registrations across `.claude/hooks/hooks.json` and generated Copilot configuration rather than an operational lifecycle concept.
