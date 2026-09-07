---
package: rjm
name: Force-Push Safety SHA gate
slug: force-push-safety-sha-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Force-Push Safety SHA gate

## Definition — verbatim
(used, not defined)

> "The existing Force-Push Safety SHA gate (`.claude/commands/pr-autofix.md` lines 100 to 105) is the only protection." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 28 | used here | Cited as the authoritative post-hoc gate comparing local branch ref to remote head SHA before pushing. |

## Consumes
Local branch tip ref (`refs/heads/$BRANCH`) and expected remote pull request head SHA (`head.sha`).

## Produces
Push authorization or push blockage with conflict resolution prompts.

## When applied
Executed immediately before pushing commits to a remote PR branch during automated fix workflows.

## Sub-concepts
none

## Part of
push-time-guard, pr-autofix

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A non-negotiable repository safety gate that prevents automated workflows from overwriting remote commits. By validating that the local branch's expected base matches the actual remote tip SHA before executing force-push operations (`--force-with-lease`), it serves as the ultimate authoritative safety barrier against data loss on shared branches.
