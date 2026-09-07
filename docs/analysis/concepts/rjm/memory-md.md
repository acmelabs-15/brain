---
package: rjm
name: MEMORY.md
slug: memory-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: .claude/skills/planner/references/hybrid-memory-architecture.md, sha256: 79f1a2ca8b8e5d6daf194c5090a360f15831ecebaaea209da88a1204f53c1609}
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MEMORY.md

## Definition — verbatim
(used, not defined)

> "The first 200 lines or 25 KB limit applies to auto-memory MEMORY.md." — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:532

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 532 | used here | Explains that the Anthropic vendor limit of 200 lines / 25 KB applies to MEMORY.md rather than CLAUDE.md. |
| .claude/skills/context-optimizer/SKILL.md | 303 | used here | Notes vendor 200-line or 25 KB auto-memory limit applies to MEMORY.md. |
| .claude/skills/planner/references/hybrid-memory-architecture.md | 17 | used here | Categorizes MEMORY.md as storage for always-available identity and active project context. |
| scripts/error_classification.py | 5 | used here | Documents logging error patterns for graduation into MEMORY.md. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, orphan

## Design notes
`MEMORY.md` is Claude Code's auto-memory markdown file name storing persistent project-level context rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
