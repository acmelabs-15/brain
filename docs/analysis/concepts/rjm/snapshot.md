---
package: rjm
name: Snapshot
slug: snapshot
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Snapshot

## Definition — verbatim
(used, not defined)

> "class Snapshot:" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 151 | defined here | Defines dataclass holding PR identity, temporary worktree path, changed file paths, and bare repo path. |

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
defects: orphan

## Design notes
`Snapshot` is a Python dataclass identifier in `pr_snapshot.py` managing isolated bare clone and worktree filesystem paths rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
