---
package: rjm
name: validate-if-present gate
slug: validate-if-present-gate
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

# validate-if-present gate

## Definition — verbatim
> "(`scripts/validation/git_hook_policy.py session`, a validate-if-present gate): a malformed log still blocks that commit. When no log is staged, the gate returns 0" — .claude/rules/session-logs.md:32-34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/session-logs.md | 32 | defined here | Git pre-commit policy hook behavior validating session logs when staged but returning zero when none are present. |

## Consumes
Staged files in git index, git hook policy configurations.

## Produces
Pre-commit hook validation verdict blocking commits with malformed session logs while passing cleanly when no session logs are staged.

## When applied
Executed during `session-policy` pre-commit checks (`scripts/validation/git_hook_policy.py session`).

## Sub-concepts
none

## Part of
session-log-mechanics

## Implementation status
defects: doc-drift, missing-path

## Design notes
A conditional validation pattern implemented in git pre-commit hooks where inspection occurs only if target files are present in the staged change set. In the context of deprecated session logs, if a legacy log is staged it must conform strictly to schema and commit graph reachability rules; if no log is staged, the check succeeds immediately without error.
