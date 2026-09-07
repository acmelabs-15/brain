---
package: rjm
name: Session-protocol CI failure
slug: session-protocol-ci-failure
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

# Session-protocol CI failure

## Definition — verbatim
(used, not defined)
> "`Session-protocol CI failure`, not `PR ops`" — .claude/skills/autoplan/SKILL.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 99 | used here | Exemplifies the specificity rule where failing CI checks on PRs take precedence over generic PR ops. |

## Consumes
CI check run failure outputs and protocol logs on a pull request.

## Produces
Diagnostic routing to targeted troubleshooting workflows rather than generic PR management.

## When applied
When classifying PR-related failures during Phase 1 intent classification.

## Sub-concepts
none

## Part of
intent-family

## Implementation status
clean

## Design notes
Session-protocol CI failure exemplifies the precedence rule within autoplan's intent classification taxonomy. When a pull request encounters failing continuous integration checks, classifying it as a protocol failure rather than broad PR operations routes the task directly to targeted diagnostic and repair skills, preventing high-leverage failures from being treated as routine administrative PR actions.
