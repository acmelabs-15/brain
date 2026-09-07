---
package: rjm
name: git push
slug: git-push
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/safe_push_pr_branch.py, sha256: dda091d2fa928563a909463214253faad5af59d645c579fbfd63ed13509aff71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git push

## Definition — verbatim
(used, not defined)

> "Safe ``git push`` with explicit refspec and remote verification." — .github/scripts/safe_push_pr_branch.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/safe_push_pr_branch.py | 2 | used here | Reference to the git push command whose invocation is wrapped with explicit refspecs and remote verification. |

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
clean

## Design notes
The external Git command-line invocation (`git push`) referenced in script docstrings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
