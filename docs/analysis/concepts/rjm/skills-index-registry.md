---
package: rjm
name: Skills Index Registry
slug: skills-index-registry
kind: artifact
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skills Index Registry

## Definition — verbatim
> "This PRD defines a Skills Index Registry to enable O(1) skill lookup by ID, establish consistent naming conventions, and provide skill lifecycle governance." — .agents/archive/planning/PRD-skills-index-registry.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 1 | defined here | PRD title and architecture document defining the centralized skill index registry. |

## Consumes
Atomic and collection skill memory files stored under `.serena/memories/`.

## Produces
A centralized index registry file (`.serena/memories/skills-index.md`) enabling O(1) skill lookups and lifecycle tracking.

## When applied
Applied during agent skill discovery and skill creation/deprecation governance.

## Sub-concepts
skill-id, quick-reference-table, domain-grouping, deprecated-skills-section, skill-lifecycle-states

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A centralized registry artifact designed to replace linear O(n) memory search across 65+ skill files with an O(1) single-read lookup table. While its target implementation in `.serena/memories/skills-index.md` falls outside the synthesis lifecycle boundary, the registry pattern reflects rjm's architecture for deterministic skill discovery and lifecycle state tracking.
