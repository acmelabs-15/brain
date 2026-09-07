---
package: rjm
name: ExternalError
slug: externalerror
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

# ExternalError

## Definition — verbatim
(used, not defined)

> "class ExternalError(SnapshotError):" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 188 | defined here | Defines external dependency failure exception in snapshot hierarchy mapped to EXIT_EXTERNAL. |

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
`ExternalError` is a Python exception class identifier in `pr_snapshot.py` signaling external network or GitHub API failures rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
