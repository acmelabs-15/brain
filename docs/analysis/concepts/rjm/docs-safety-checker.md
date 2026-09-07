---
package: rjm
name: docs safety checker
slug: docs-safety-checker
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# docs safety checker

## Definition — verbatim
(used, not defined)

> "- `scripts/check_docs_safety.py` (83 lines): docs safety checker for unsafe command interpolation patterns (v5.1 addition)" — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 203 | used here | Descriptive summary label for the check_docs_safety.py script added in upstream v5.1. |

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
defects: orphan, internal-contradiction, doc-drift

## Design notes
An informal descriptive label for a Python script scanning documentation for unsafe interpolation patterns rather than an agent lifecycle concept.
