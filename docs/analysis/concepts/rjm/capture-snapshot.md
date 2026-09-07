---
package: rjm
name: capture_snapshot
slug: capture-snapshot
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

# capture_snapshot

## Definition — verbatim
(used, not defined)

> "def capture_snapshot(" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:363

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 363 | defined here | Function creating isolated bare clone and detached worktree for PR review at exact commit SHAs. |

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
`capture_snapshot` is a Python function identifier in `pr_snapshot.py` performing bare clone initialization and worktree extraction rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
