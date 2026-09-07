---
package: rjm
name: Relationships
slug: relationships
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Relationships

## Definition — verbatim
> "- **Relationships**: Same object references duplicated" — .claude/skills/golden-principles/references/design-dry-principle.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 17 | defined here | Enumerated as a scope of redundancy where identical object associations or references are duplicated across the system. |
| .claude/skills/research-and-incorporate/references/workflow.md | 177 | defined here | Section heading establishing mandatory conceptual connections to other architectural ideas in deep analysis documents. |
| .claude/skills/research-and-incorporate/SKILL.md | 130 | defined here | Specified as a blocking quality gate requiring at least two explicit connections to existing concepts. |

## Consumes
Object graphs, dependency linkages, entity relational models, and researched conceptual frameworks.

## Produces
Normalized reference topologies, explicit conceptual linkages in analysis artifacts, and decoupled association structures.

## When applied
Applied during object model normalization to remove redundant pointers, and during Phase 2 of the research-and-incorporate workflow as a blocking quality gate.

## Sub-concepts
none

## Part of
dry-principle

## Implementation status
defects: missing-path, doc-drift

## Design notes
Relationships in rjm encompass both structural dependencies in code and semantic linkages in architectural research. In code design under the DRY principle, duplicate references create synchronization hazards when association paths mutate. In research synthesis, explicit relationships anchor newly acquired knowledge to existing system concepts, preventing knowledge silos and ensuring architectural coherence.
