---
package: rjm
name: catalog prune
slug: catalog-prune
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# catalog prune

## Definition — verbatim
(used, not defined)

> "This script fills that gap for the `.claude/skills/` catalog prune." — scripts/eval/eval-skill-overlap.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 6 | used here | Explains that pairwise overlap analysis supplies empirical evidence required for the skill catalog prune. |

## Consumes
Pairwise skill overlap matrices (`matrix.json`) identifying `SUBSUMED` or `OVERLAP` skill relationships.

## Produces
Decisions to delete, merge, or retire redundant skills from the `.claude/skills/` repository directory.

## When applied
Applied during periodic repository maintenance and skill consolidation workflows to eliminate duplicative agent skills.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
A governance and catalog hygiene maintenance workflow in rjm that uses empirical overlap evaluation evidence to safely retire or consolidate redundant skills from `.claude/skills/`, preventing catalog bloat while protecting distinct capabilities.
