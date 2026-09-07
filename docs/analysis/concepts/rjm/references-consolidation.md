---
package: rjm
name: References consolidation
slug: references-consolidation
kind: technique
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

# References consolidation

## Definition — verbatim
> "2. **References consolidation**: decide fate of 8 v4.x legacy reference files. Either rename to `references/_v4-legacy/` to mark deprecated, delete if fully superseded by upstream's 9 new files, or merge content." — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 279 | defined here | Maintenance task defining the procedure for consolidating legacy references with upstream architecture. |

## Consumes
Legacy reference documents, newly synced upstream documentation files.

## Produces
Deprecation renaming, deletion of superseded files, or merged reference documentation.

## When applied
Applied following major upstream architectural upgrades where documentation naming and structure have changed.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
A maintenance technique for rationalizing documentation references when upstream refactorings introduce alternative files that overlap with locally extracted legacy references.
