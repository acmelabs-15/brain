---
package: rjm
name: atomic-commit
slug: atomic-commit
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# atomic-commit

## Definition — verbatim
> "(\"atomic-commit\", _handle_atomic_commit)," — scripts/validation/git_hook_policy.py:8431

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 277 | used here | Cited as the PR sequencing boundary enforcing small commit batches within file-cap limits. |
| scripts/validation/git_hook_policy.py | 8431 | defined here | Registered as an active git hook CLI command validating that staged authored files do not exceed limits. |

## Consumes
Staged git changes, commit metadata, and authored file counts.

## Produces
Exit code 0 when staged authored files <= 5, or exit code 1 blocking the commit if authored files exceed the limit.

## When applied
Executed by pre-commit hooks on every git commit invocation across agent sessions.

## Sub-concepts
none

## Part of
git-hook-policy, pre-pr-validation-gates

## Implementation status
clean

## Design notes
`atomic-commit` is a core repository governance gate in rjm. Enforced via `scripts/validation/git_hook_policy.py`, it blocks any commit where authored staged files exceed `MAX_AUTHORED_FILES_PER_COMMIT` (5 files), exempting generated companion files. This hard boundary forces agents and developers to make small, focused, and reviewable commits, preventing monolithic changes that are difficult to audit, review, or bisect.
