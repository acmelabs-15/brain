---
package: rjm
name: Semantic agent drift
slug: semantic-agent-drift
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Semantic agent drift

## Definition — verbatim
> "hand-synced tree diverging in meaning" — .claude/skills/ai-agents-generation-and-release/SKILL.md:112

## Also called — verbatim
"Semantic agent drift (src/claude)" — .claude/skills/ai-agents-generation-and-release/SKILL.md:112

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 112 | used here | Drift detection entry monitoring diverging meaning between canonical agent sources and hand-synced trees. |

## Consumes
Canonical agent definitions and hand-synced mirror trees (`src/claude`).

## Produces
Similarity score and divergence report comparing semantic content against baseline.

## When applied
Executed weekly via `drift-detection.yml` (Monday 09:00 UTC) using `build/scripts/detect_agent_drift.py`.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, unfailable-gate

## Design notes
Monitors divergence between canonical agent prompt definitions and mirror targets where generation cannot be fully automated. Rather than checking mechanical byte equality, semantic drift detection computes embedding similarity thresholds (floor of 80) to detect unintentional conceptual drift while allowing deliberate target-specific adaptations.
