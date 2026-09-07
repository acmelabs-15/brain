---
package: rjm
name: Decision Framework
slug: decision-framework
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Framework

## Definition — verbatim
> "## Decision Framework" — .claude/skills/context-optimizer/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 24 | used here | Cited as the authoritative decision framework governing content placement. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 5 | used here | Validates content placement against the skill vs passive context decision framework. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 660 | used here | Recommends consulting the Decision Framework in SKILL.md when skills lack actionable tools. |
| .claude/skills/context-optimizer/SKILL.md | 60 | defined here | Core decision framework for context optimization (does the model know this, passive context vs skill). |
| .claude/skills/merge-resolver/SKILL.md | 99 | defined here | Decision framework for merge resolution defining priority hierarchy (Security > Bugfix > Feature > Style). |

## Consumes
Content candidates, merge conflict scenarios, and knowledge classification.

## Produces
Architectural placement decisions (passive context, on-demand skill, or discard) or merge conflict resolutions.

## When applied
Applied when triaging content placement in context-optimizer or resolving Git conflicts in merge-resolver.

## Sub-concepts
none

## Part of
context-optimizer, merge-resolver

## Implementation status
defects: doc-drift, missing-path

## Design notes
A structured decision matrix used across multiple rjm skills—most notably context-optimizer (deciding between passive memory, active skills, and removal) and merge-resolver (evaluating precedence between security, bugfix, and feature edits)—to systematically guide agent decisions without ad-hoc heuristics.
