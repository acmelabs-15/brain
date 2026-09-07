---
package: rjm
name: Hybrid
slug: hybrid
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hybrid

## Definition — verbatim
> "Hybrid: Both knowledge (passive) and actions (skill)" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 15 | defined here | Summary table category classifying framework logic coupled with project-specific path references. |
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 8 | used here | Placement classification for capabilities combining passive knowledge with active tool execution. |
| .claude/skills/context-optimizer/SKILL.md | 4 | defined here | Outlines the hybrid content placement option balancing skill execution with passive context injection. |

## Consumes
Content requiring both reference knowledge and tool actions, or generic logic mixed with hardcoded paths.

## Produces
Balanced skill architectures with progressive disclosure, or parameterized components prepared for extraction.

## When applied
Applied when analyzing skill content for optimal placement or evaluating components for framework extraction.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Hybrid represents a dual classification in rjm: in context management, it refers to artifacts combining passive knowledge and active tool use; in architectural audits, it denotes generic logic contaminated with local paths that must be parameterized before extraction.
