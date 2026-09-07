---
package: rjm
name: GitHubReadError
slug: githubreaderror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GitHubReadError

## Definition — verbatim
(used, not defined)

> "class GitHubReadError(RuntimeError):" — scripts/report_pr_supersession.py:223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 223 | defined here | RuntimeError exception subclass raised when GitHub API or gh CLI operations fail. |

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
defects: missing-path

## Design notes
`GitHubReadError` is a Python exception class identifier signaling GitHub API read errors rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
