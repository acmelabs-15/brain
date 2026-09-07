---
package: rjm
name: three-dot diff
slug: three-dot-diff
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# three-dot diff

## Definition — verbatim
(used, not defined)

> "paths, strips line suffixes, and checks each path against the three-dot diff." — .claude/skills/review/scripts/validate_findings_scope.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 6 | used here | Git comparison mechanism against which finding locations are filtered to ensure findings relate only to PR changes. |

## Consumes
Git branch HEAD and merge-base with the target base branch (`git diff base...HEAD`).

## Produces
The definitive list of modified, added, or deleted files comprising pull request changes.

## When applied
Computed in review step 1 and passed to `validate_findings_scope.py` to bound review scrutiny to changed files.

## Sub-concepts
none

## Part of
review

## Implementation status
clean

## Design notes
The three-dot diff represents git's symmetric merge-base comparison (`origin/main...HEAD`), establishing the exact boundary of pull request modifications to ensure review agents do not fail pull requests for pre-existing codebase issues.
