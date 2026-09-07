---
package: rjm
name: taste_lints.py
slug: taste-lints-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# taste_lints.py

## Definition — verbatim
(used, not defined)

> "taste_lints.py on staged or specified files" — .claude/skills/taste-lints/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 23 | defined here | Listed in the triggers table as the underlying script executing the `run taste lints` operation. |
| scripts/ci/taste_count_ratchet.py | 4 | used here | Referenced in the module docstring describing its error exit code behavior and integration with the ratchet script. |

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
defects: other, doc-drift

## Design notes
`taste_lints.py` is the executable script file implementing custom taste invariant checks and generating agent-readable remediation blocks, classified as kind: name-only per D-023.
