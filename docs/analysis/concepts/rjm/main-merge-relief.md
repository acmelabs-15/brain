---
package: rjm
name: main-merge relief
slug: main-merge-relief
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# main-merge relief

## Definition — verbatim
(used, not defined)

> "main-merge relief" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 27 | used here | Mechanism raising commit count threshold from 20 to 40 when branches merged origin/main. |

## Consumes
Commit history containing merge commits from origin/main.

## Produces
Increased commit threshold allowance (raising ceiling to 40 commits).

## When applied
During commit-count validation when evaluating long-lived branches that merged main.

## Sub-concepts
none

## Part of
commit-count-block

## Implementation status
clean

## Design notes
A threshold adjustment technique from issue #3596 that doubled the allowed commit count ceiling for PR branches that had merged origin/main, retired when commit count blocks were eliminated.
