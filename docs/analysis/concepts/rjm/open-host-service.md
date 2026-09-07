---
package: rjm
name: Open Host Service
slug: open-host-service
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Open Host Service

## Definition — verbatim
> "- **Context Map**: the explicit description of how bounded contexts relate (Customer-Supplier, Conformist, Shared Kernel, Partnership, Open Host Service, Published Language)." — .claude/skills/software-engineering-library/references/domain-driven-design.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 24 | defined here | Listed as a publishing context relationship pattern in the core vocabulary definition of Context Map. |

## Consumes
Upstream core capabilities intended for consumption by multiple downstream clients.

## Produces
A stable, documented, and versioned communication protocol or public interface.

## When applied
Applied when upstream publishes a stable protocol that any number of downstream clients can consume without custom negotiations.

## Sub-concepts
none

## Part of
context-map

## Implementation status
clean

## Design notes
Open Host Service decouples upstream services from individual downstream requirements by publishing a stable, standard protocol. It protects upstream teams from authoring bespoke adapters for every consumer while providing consumers with reliable, predictable integration points.
