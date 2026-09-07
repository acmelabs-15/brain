---
package: rjm
name: Script diff triage
slug: script-diff-triage
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

# Script diff triage

## Definition — verbatim
> "1. **Script diff triage**: run a 3-way merge on the 5 shared scripts where vendored is larger. Decide per-script: keep local, adopt upstream, or cherry-pick specific improvements." — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:278

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 278 | defined here | Action item establishing the triage procedure for reconciling vendored script differences. |

## Consumes
Vendored script files, upstream script updates, and 3-way merge tooling.

## Produces
Per-script reconciliation decisions determining whether to retain local modifications, adopt upstream changes, or cherry-pick enhancements.

## When applied
Applied during upstream vendor synchronization when local modifications diverge from upstream releases.

## Sub-concepts
3-way-merge

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
A maintenance technique in rjm for reconciling divergences between locally customized scripts and upstream releases using 3-way merge diff analysis.
