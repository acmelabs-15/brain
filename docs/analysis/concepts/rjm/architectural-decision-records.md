---
package: rjm
name: Architectural Decision Records
slug: architectural-decision-records
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architectural Decision Records

## Definition — verbatim
> "An Architectural Decision (AD) is a justified design choice that addresses a functional or non-functional requirement that is architecturally significant." — .claude/agents/architect.md:194

## Also called — verbatim
ADRs — .claude/agents/architect.md:192

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 192 | defined here | Comprehensive section detailing purpose, creation triggers, template schema, and lifecycle rules for ADRs. |
| templates/agents/architect.shared.md | 207 | defined here | Shared architect template defining the structure and criteria for authoring architectural decision records. |

## Consumes
Architecturally significant requirements, technical alternatives, quality-attribute trade-offs, and precedent searches.

## Produces
Version-controlled, immutable architecture decision documents stored in `.agents/architecture/`.

## When applied
Created whenever a decision has high significance, requires substantial investment, introduces dependencies, or sets a long-term precedent.

## Sub-concepts
adr-precedent-search

## Part of
architect-agent

## Implementation status
clean

## Design notes
Architectural Decision Records (ADRs) are rjm's primary governance mechanism for capturing architecturally significant design choices. They establish an immutable, searchable repository of rationale, evaluated options, and explicit quality trade-offs, preserving institutional engineering memory across agents and sessions.
