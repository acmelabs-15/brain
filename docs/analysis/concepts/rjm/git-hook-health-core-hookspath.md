---
package: rjm
name: Git Hook Health (core.hooksPath)
slug: git-hook-health-core-hookspath
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Git Hook Health (core.hooksPath)

## Definition — verbatim
> "Git Hook Health (core.hooksPath)" — scripts/validation/pre_pr_sequence.py:401

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 401 | defined here | Pre-PR gate verifying core.hooksPath points to an existing directory so git executes hook shims. |

## Consumes
Git configuration (`core.hooksPath`) and filesystem directory targets.

## Produces
Pass/fail verification verdict ensuring git hooks are not silently bypassed by broken hook paths.

## When applied
Evaluated during the pre-PR validation sequence before submitting pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A pre-PR verification gate in `pre_pr_sequence.py` addressing issue #5090. While `Lefthook Installed` checks if Lefthook believes it is installed, this gate verifies that `git config core.hooksPath` points to an existing directory on disk, preventing silent hook bypasses where git ignores missing hook paths without warning.
