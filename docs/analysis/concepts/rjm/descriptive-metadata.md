---
package: rjm
name: descriptive metadata
slug: descriptive-metadata
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# descriptive metadata

## Definition — verbatim
> "`role` is **descriptive metadata**. It grants and withholds nothing at" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 107 | defined here | Core design principle establishing that frontmatter role annotations remain inert at runtime. |

## Consumes
Agent definitions and frontmatter schemas.

## Produces
Informational categorization without runtime privilege escalation or enforcement gating.

## When applied
When authoring agent frontmatter and configuring catalog generation.

## Sub-concepts
none

## Part of
agent-coordination

## Implementation status
defects: doc-drift

## Design notes
An architectural design pattern dictating that agent role attributes serve purely as inert, informational categorization rather than runtime privilege boundaries.
