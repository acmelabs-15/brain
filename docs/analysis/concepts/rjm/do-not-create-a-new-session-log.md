---
package: rjm
name: Do not create a new session log
slug: do-not-create-a-new-session-log
kind: gate
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

# Do not create a new session log

## Definition — verbatim
> "Session log creation is discontinued; no start, end, commit, push, or PR gate ever required one, and none does now." — .claude/rules/session-logs.md:27-29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/session-logs.md | 27 | defined here | Mandatory policy rule forbidding creation of new session log files across all workflow phases. |

## Consumes
Developer contributions, agent sessions, PR workflows.

## Produces
Enforcement preventing creation of deprecated `.agents/sessions/*.json` files while permitting existing historical logs to remain.

## When applied
Enforced continuously across all commit, push, and pull request workflows.

## Sub-concepts
none

## Part of
session-log-mechanics

## Implementation status
defects: doc-drift, missing-path

## Design notes
"Do not create a new session log" codifies the lifecycle deprecation of per-session JSON logging in rjm. By explicitly establishing that session log files are never required for start, commit, push, or PR gates, it eliminates administrative overhead and token consumption while preserving existing historical logs for retrospective and memory tools.
