---
package: rjm
name: Builder
slug: builder
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Builder

## Definition — verbatim
(used, not defined)

> "(Expert, Manager, Builder, Integration) across 149 lines" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 35 | used here | Execution tier in the retired four-tier agent hierarchy, migrated to the executor role. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 368 | used here | Cited as an example creational pattern candidate for CVA pattern mapping extensions. |
| .claude/skills/cva-analysis/SKILL.md | 447 | used here | Referenced as an extension point pattern type to add to pattern mapping guides. |

## Consumes
Specifications, tasks, and creational abstraction requirements.

## Produces
Code implementations and structured object construction patterns.

## When applied
During implementation execution and Gang of Four pattern mapping in CVA analysis.

## Sub-concepts
none

## Part of
four-tier-agent-hierarchy

## Implementation status
defects: doc-drift, missing-path

## Design notes
Represents both an execution role tier in the legacy agent hierarchy (migrated to executor) and the classic Gang of Four creational design pattern referenced in commonality-variability analysis.
