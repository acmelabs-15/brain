---
package: rjm
name: 3-way merge
slug: 3-way-merge
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

# 3-way merge

## Definition — verbatim
(used, not defined)

> "1. **Script diff triage**: run a 3-way merge on the 5 shared scripts where vendored is larger. Decide per-script: keep local, adopt upstream, or cherry-pick specific improvements." — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:278

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 278 | used here | Specified as the reconciliation technique for triaging divergent script modifications. |

## Consumes
Common ancestor base version, local modified file, and upstream incoming file version.

## Produces
A reconciled, merged file or delineated conflict markers for manual arbitration.

## When applied
Applied when merging divergent branches or synchronizing customized vendored code with upstream repositories.

## Sub-concepts
none

## Part of
script-diff-triage

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
A standard version-control merge technique utilizing a common base ancestor to reconcile concurrent modifications between local and upstream file versions.
