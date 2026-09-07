---
package: rjm
name: Strangler Fig
slug: strangler-fig
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/planner/references/mental-models-galls-law.md, sha256: c92dfa5f41a98019df5632823621ccab6fac26ad154ddb59fcda98de50b8f04b}
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strangler Fig

## Definition — verbatim
(used, not defined)

> "- Strangler Fig: incremental migration pattern" — .claude/skills/decision-critic/references/mental-models-galls-law.md:70

## Also called — verbatim
"strangler fig" — scripts/eval/eval-agents.py:379

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 77 | defined here | Listed in Problem Domain Cross-Reference table as a Tier 3 (Senior) legacy systems migration strategy. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 70 | used here | Listed under Related Models as an incremental migration pattern respecting Gall's Law. |
| .claude/skills/planner/references/mental-models-galls-law.md | 62 | used here | Cross-referenced as an incremental migration approach preferred over big-bang rewrites. |
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 54 | used here | Referenced in pre-mortem risk assessment to replace high-risk rewrites with phased migration. |
| scripts/eval/eval-agents.py | 379 | used here | Included in expected agent critique evaluation asserting consideration of strangler fig over big-bang switch. |

## Consumes
Legacy codebase or monolith, identified seams, routing facade or proxy.

## Produces
Phased migration plan replacing legacy components piece by piece while preserving system operation.

## When applied
Applied when modernizing legacy systems or migrating off monolithic applications where business continuity is required and big-bang cutovers present unacceptable risk.

## Sub-concepts
none

## Part of
legacy-systems

## Implementation status
defects: missing-path

## Design notes
Strangler Fig is rjm's primary pattern for legacy modernization and rewrite replacement, placing an intercepting facade around an existing system and replacing functionality module-by-module until the legacy core can be safely retired without service interruption.
