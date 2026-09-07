---
package: rjm
name: Sequence Diagram
slug: sequence-diagram
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Sequence Diagram

## Definition — verbatim
(used, not defined)

> "| **Sequence Diagram** | Auth/data flows | Mermaid |" — .claude/skills/threat-modeling/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 111 | used here | Architecture modeling diagram type recommended for illustrating authentication handshakes and data flows. |

## Consumes
Protocol specifications, authentication message flows, and inter-service interaction sequences.

## Produces
Chronological message sequence diagram rendered in Mermaid.

## When applied
Applied during Phase 1 (Scope and Decompose) when analyzing temporal ordering and protocol handshakes in data and auth flows.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Sequence Diagram` is an architectural visualization artifact in `rjm` used to trace chronological interactions and message flows across system components, particularly for uncovering authentication flaws and race conditions.
