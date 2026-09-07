---
package: rjm
name: endingCommit
slug: endingcommit
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/rules/session-logs.md, sha256: a4592aa8702246ac5770c118f5e5e3e4c31699ce9fede52273a865384d87208e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# endingCommit

## Definition — verbatim
> "Record `endingCommit` in a follow-up commit, never by amending." — .claude/rules/session-logs.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/session-logs.md | 37 | defined here | Mandatory property in legacy session logs recording the final reachable commit SHA in a follow-up commit rather than amending. |

## Consumes
Committed git change set, git `HEAD` commit SHA.

## Produces
Reachable commit SHA recorded in `.agents/sessions/*.json` metadata linking the session log to the git commit graph.

## When applied
Populated when concluding work on a branch carrying an existing legacy session log file.

## Sub-concepts
none

## Part of
session-log-mechanics

## Implementation status
defects: doc-drift, missing-path

## Design notes
`endingCommit` is a metadata field in legacy session logs (`.agents/sessions/*.json`) capturing the final reachable git commit SHA of a working session. It must be written in a distinct follow-up commit rather than via `git commit --amend`, because amending destroys the original commit object, leaving an unreachable SHA that causes session validation and CI ratchet failures.
