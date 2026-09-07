---
package: rjm
name: PR ops
slug: pr-ops
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PR ops

## Definition — verbatim
(used, not defined)
> "`Session-protocol CI failure`, not `PR ops`" — .claude/skills/autoplan/SKILL.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 99 | used here | Contrasted against session-protocol CI failures to illustrate specific versus general intent classification. |

## Consumes
Pull request, issue, label, and milestone management requests.

## Produces
Route to the `github` skill for operational git and GitHub maintenance actions.

## When applied
When managing non-failing pull request lifecycle operations and repository metadata.

## Sub-concepts
none

## Part of
intent-family

## Implementation status
clean

## Design notes
PR ops is a coarse-grained operational intent family in autoplan covering pull request administrative tasks such as labeling, milestone assignment, issue linking, and branch synchronization. It directs tasks to the `github` skill while systematically yielding precedence to diagnostic or debugging skills whenever failing checks or merge conflicts are detected.
